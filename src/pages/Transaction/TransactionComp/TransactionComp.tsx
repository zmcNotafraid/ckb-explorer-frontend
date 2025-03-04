import TransactionCellList from '../TransactionCellList'
import { Cell } from '../../../models/Cell'
import { Transaction } from '../../../models/Transaction'

const handleCellbaseInputs = (inputs: Cell[], outputs: Cell[]) => {
  if (inputs[0] && inputs[0].fromCellbase && outputs[0] && outputs[0].baseReward) {
    const resultInputs = inputs
    resultInputs[0] = {
      ...resultInputs[0],
      baseReward: outputs[0].baseReward,
      secondaryReward: outputs[0].secondaryReward,
      commitReward: outputs[0].commitReward,
      proposalReward: outputs[0].proposalReward,
    }
    return resultInputs
  }
  return inputs
}

export const TransactionComp = ({ transaction }: { transaction: Transaction }) => {
  const { transactionHash, displayInputs, displayOutputs, blockNumber, isCellbase } = transaction

  const inputs = handleCellbaseInputs(displayInputs, displayOutputs)

  /// [0, 11] block doesn't show block reward and only cellbase show block reward
  return (
    <>
      <div className="transactionInputs">
        {inputs && <TransactionCellList inputs={inputs} showReward={blockNumber > 0 && isCellbase} />}
      </div>
      <div className="transactionOutputs">
        {displayOutputs && <TransactionCellList outputs={displayOutputs} txHash={transactionHash} />}
      </div>
    </>
  )
}
