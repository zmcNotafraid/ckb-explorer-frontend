import { Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FC, useState } from 'react'
import BigNumber from 'bignumber.js'
import TransactionItem from '../../components/TransactionItem/index'
import { UDTTransactionsPagination, UDTTransactionsPanel, TypeScriptController, UDTNoResultPanel } from './styled'
import { parseUDTAmount } from '../../utils/number'
import { ReactComponent as OpenInNew } from '../../assets/open_in_new.svg'
import { deprecatedAddrToNewAddr } from '../../utils/util'
import styles from './styles.module.scss'
import AddressText from '../../components/AddressText'
import PaginationWithRear from '../../components/PaginationWithRear'
import { CsvExport } from '../../components/CsvExport'
import { Transaction } from '../../models/Transaction'
import { OmigaInscriptionCollection, UDT, isOmigaInscriptionCollection } from '../../models/UDT'
import { Card, CardCellInfo, CardCellsLayout, HashCardHeader } from '../../components/Card'
import { useIsMobile } from '../../hooks'
import SUDTTokenIcon from '../../assets/sudt_token.png'
import { isMainnet } from '../../utils/chain'
// TODO: replaced to svg format
import ArrowUpIcon from '../../assets/arrow_up.png'
import ArrowDownIcon from '../../assets/arrow_down.png'
import ArrowUpBlueIcon from '../../assets/arrow_up_blue.png'
import ArrowDownBlueIcon from '../../assets/arrow_down_blue.png'
import Script from '../../components/Script'
import Capacity from '../../components/Capacity'

const typeScriptIcon = (show: boolean) => {
  if (show) {
    return isMainnet() ? ArrowUpIcon : ArrowUpBlueIcon
  }
  return isMainnet() ? ArrowDownIcon : ArrowDownBlueIcon
}

const IssuerContent: FC<{ address: string }> = ({ address }) => {
  const { t } = useTranslation()
  if (!address) {
    return t('address.unable_decode_address')
  }
  const newAddress = deprecatedAddrToNewAddr(address)

  return (
    <>
      <AddressText
        linkProps={{
          to: `/address/${newAddress}`,
        }}
      >
        {newAddress}
      </AddressText>

      {newAddress !== address && (
        <Tooltip placement="top" title={t(`udt.view-deprecated-address`)}>
          <Link to={`/address/${address}`} className={styles.openInNew} target="_blank">
            <OpenInNew />
          </Link>
        </Tooltip>
      )}
    </>
  )
}

export const UDTOverviewCard = ({ typeHash, udt }: { typeHash: string; udt: UDT | OmigaInscriptionCollection }) => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  const {
    displayName,
    uan,
    fullName,
    iconFile,
    issuerAddress,
    symbol,
    addressesCount,
    decimal,
    totalAmount,
    typeScript,
  } = udt
  const [showType, setShowType] = useState(false)

  const items: CardCellInfo<'left' | 'right'>[] = !isOmigaInscriptionCollection(udt)
    ? [
        {
          title: t('udt.name'),
          content: displayName || fullName,
        },
        {
          title: t('udt.issuer'),
          contentWrapperClass: styles.addressWidthModify,
          content: <IssuerContent address={issuerAddress} />,
        },
        {
          title: t('udt.holder_addresses'),
          content: addressesCount,
        },
        {
          title: t(uan ? 'udt.uan' : 'udt.symbol'),
          content: uan || symbol,
        },
        {
          title: t('udt.decimal'),
          content: decimal,
        },
        {
          title: t('udt.total_amount'),
          content: parseUDTAmount(totalAmount, decimal),
        },
      ]
    : [
        {
          title: t('udt.name'),
          content: displayName || fullName || <span className={styles.noneName}>(None)</span>,
        },
        {
          title: t('udt.status'),
          content: t(`udt.mint_status_${udt.mintStatus}`),
        },
        {
          title: t('udt.progress'),
          content: `${parseUDTAmount(udt.totalAmount, decimal)}/${parseUDTAmount(udt.expectedSupply, decimal)}`,
        },
        {
          title: t('udt.holder_addresses'),
          content: addressesCount,
        },
        {
          title: t('udt.expected_supply'),
          content: (
            <Capacity
              capacity={BigNumber(udt.expectedSupply)
                .div(new BigNumber(10).pow(parseInt(decimal, 10)))
                .toString()}
              unit={null}
            />
          ),
        },
        {
          title: t('udt.decimal'),
          content: decimal,
        },
        {
          title: t('udt.mint_limit'),
          content: parseUDTAmount(udt.mintLimit, decimal),
        },
      ]

  // TODO: To be implemented.
  const modifyTokenInfo = false && <div>Modify Token Info</div>

  const cardTitle = (
    <div className={styles.cardTitle}>
      <div className={styles.top}>
        <img className={styles.icon} src={iconFile || SUDTTokenIcon} alt="hash icon" />
        {isMobile && modifyTokenInfo}
      </div>
      {(uan || symbol) ?? t('udt.sudt')}
    </div>
  )

  return (
    <Card className={styles.udtOverviewCard} style={{ marginBottom: 16 }}>
      {/* When encountering more complex requirements, consider extracting the components within HashCardHeader
      into smaller components. Then, implement a completely new variant or freely assemble them externally. */}
      {isMobile && cardTitle}
      <HashCardHeader
        className={styles.cardHeader}
        title={!isMobile && cardTitle}
        hash={typeHash}
        rightContent={!isMobile && modifyTokenInfo}
      />

      <CardCellsLayout type="left-right" cells={items} borderTop />

      <TypeScriptController onClick={() => setShowType(!showType)}>
        <div>{t('udt.type_script')}</div>
        <img alt="type script" src={typeScriptIcon(showType)} />
      </TypeScriptController>
      {showType && typeScript && <Script script={typeScript} />}
    </Card>
  )
}

export const UDTComp = ({
  currentPage,
  pageSize,
  transactions,
  total,
  onPageChange,
  filterNoResult,
  id,
  isInscription,
}: {
  currentPage: number
  pageSize: number
  transactions: Transaction[]
  total: number
  onPageChange: (page: number) => void
  filterNoResult?: boolean
  id: string
  isInscription?: boolean
}) => {
  const { t } = useTranslation()
  const totalPages = Math.ceil(total / pageSize)

  if (filterNoResult) {
    return (
      <UDTNoResultPanel>
        <span>{t('search.udt_filter_no_result')}</span>
      </UDTNoResultPanel>
    )
  }
  return (
    <>
      <UDTTransactionsPanel>
        {transactions.map(
          (transaction: Transaction, index: number) =>
            transaction && (
              <TransactionItem
                transaction={transaction}
                key={transaction.transactionHash}
                circleCorner={{
                  bottom: index === transactions.length - 1 && totalPages === 1,
                }}
              />
            ),
        )}
      </UDTTransactionsPanel>
      <UDTTransactionsPagination>
        <PaginationWithRear
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={onPageChange}
          // TODO: The backend has not yet implemented export support for Inscription (xUDT), so it is disabled for now.
          rear={!isInscription && <CsvExport type="udts" id={id} />}
        />
      </UDTTransactionsPagination>
    </>
  )
}

export default UDTComp
