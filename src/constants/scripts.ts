import type { HashType } from '@ckb-lumos/base'
import type { ScriptConfigs, Config } from '@ckb-lumos/config-manager'
import { predefined } from '@ckb-lumos/config-manager'
import { Script } from '../models/Script'

export interface ContractHashTag {
  codeHashes: string[] // The code hashes whose hash type are type in mainnet and testnet are different
  txHashes: string[] //  mainnet and testnet contract tx hashes
  tag: string
  category?: 'lock' | 'type'
  depType: 'dep_group' | 'code'
  lumosConfigName?: string // for lumos config
  hashType: HashType
}

export const ScriptTagExtraRules = new Map<string, (s: Script) => string>([
  [
    'secp256k1 / multisig',
    script => (script.args.length === 28 * 2 + 2 ? 'secp256k1 / multisig / locktime' : 'secp256k1 / multisig'),
  ],
])

export const MainnetContractHashTags: ContractHashTag[] = [
  {
    codeHashes: ['0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8'],
    txHashes: ['0x71a7ba8fc96349fea0ed3a5c47992e3b4084b031a42264a018e0072e8172e46c-0'],
    hashType: 'type',
    depType: 'dep_group',
    lumosConfigName: 'SECP256K1_BLAKE160',
    tag: 'secp256k1_blake160',
    category: 'lock',
  },
  {
    codeHashes: ['0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8'],
    txHashes: ['0x71a7ba8fc96349fea0ed3a5c47992e3b4084b031a42264a018e0072e8172e46c-1'],
    depType: 'dep_group',
    hashType: 'type',
    lumosConfigName: 'SECP256K1_BLAKE160_MULTISIG',
    tag: 'secp256k1 / multisig',
    category: 'lock',
  },
  {
    codeHashes: ['0x0fb343953ee78c9986b091defb6252154e0bb51044fd2879fde5b27314506111'],
    txHashes: ['0xa05f28c9b867f8c5682039c10d8e864cf661685252aa74a008d255c33813bb81-0'],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'secp256k1 / anyone-can-pay (deprecated)',
    category: 'lock',
  },
  {
    codeHashes: ['0xd369597ff47f29fbc0d47d2e3775370d1250b85140c670e4718af712983a2354'],
    txHashes: ['0x4153a2014952d7cac45f285ce9a7c5c0c0e1b21f2d378b82ac1433cb11c25c4d-0'],
    depType: 'dep_group',
    hashType: 'type',
    lumosConfigName: 'ANYONE_CAN_PAY',
    tag: 'secp256k1 / anyone-can-pay',
    category: 'lock',
  },
  {
    codeHashes: ['0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e'],
    txHashes: ['0xe2fb199810d49a4d8beec56718ba2593b665db9d52299a0f9e6e75416d73ff5c-2'],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'DAO',
    tag: 'nervos dao',
    category: 'type',
  },
  {
    codeHashes: ['0x5e7a36a77e68eecc013dfa2fe6a23f3b6c344b04005808694ae6dd45eea4cfd5'],
    txHashes: ['0xc7813f6a415144643970c2e88e0bb6ca6a8edc5dd7c1022746f628284a9936d5-0'],
    hashType: 'type',
    depType: 'code',
    lumosConfigName: 'SUDT',
    tag: 'sudt',
    category: 'type',
  },
  {
    codeHashes: ['0xbf43c3602455798c1a61a596e0d95278864c552fafe231c063b3fabf97a8febc'],
    txHashes: ['0x1d60cb8f4666e039f418ea94730b1a8c5aa0bf2f7781474406387462924d15d4-0'],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'PW_LOCK',
    tag: 'pwlock-k1-acpl',
    category: 'lock',
  },
  {
    codeHashes: ['0xe4d4ecc6e5f9a059bf2f7a82cca292083aebc0c421566a52484fe2ec51a9fb0c'],
    txHashes: ['0x04632cc459459cf5c9d384b43dee3e36f542a464bdd4127be7d6618ac6f8d268-0'],
    depType: 'dep_group',
    hashType: 'type',
    lumosConfigName: 'CHEQUE',
    tag: 'cheque',
    category: 'lock',
  },
  {
    codeHashes: ['0x24b04faf80ded836efc05247778eec4ec02548dab6e2012c0107374aa3f68b81'],
    txHashes: [
      '0xb4c76f34382f03f39e2e39dd8a4cca037394bb3d032bde6a285c52e5a5e35535-0',
      '0xd521f52a7f4f4f00a25f0f6924c439844574d77d228113077ee0c84dc60ad11d-0',
      '0xdb29e26b3553559140bffddbc8f04011207db8a5996cbaf5b521db98e9d11b17-0',
      '0x8703457af1e3711aed7772bfe87ab50175cbf29439196cfdb34095e8cbbe3d45-0',
    ],
    depType: 'code',
    hashType: 'type',
    tag: 'm-nft_issuer',
    category: 'type',
  },
  {
    codeHashes: ['0xd51e6eaf48124c601f41abe173f1da550b4cbca9c6a166781906a287abbb3d9a'],
    txHashes: [
      '0xc3b5ada764ed341d42f86aee3ec17d7ffdd6372155b41b95687a7957b359ab39-0',
      '0xd521f52a7f4f4f00a25f0f6924c439844574d77d228113077ee0c84dc60ad11d-1',
      '0xdb29e26b3553559140bffddbc8f04011207db8a5996cbaf5b521db98e9d11b17-1',
      '0x8703457af1e3711aed7772bfe87ab50175cbf29439196cfdb34095e8cbbe3d45-1',
    ],
    depType: 'code',
    hashType: 'type',
    tag: 'm-nft_class',
    category: 'type',
  },
  {
    codeHashes: ['0x2b24f0d644ccbdd77bbf86b27c8cca02efa0ad051e447c212636d9ee7acaaec9'],
    txHashes: [
      '0xaf35eb9ba88d0b159ba450cfcc9089796cc401bc4089a43de018c12f990909a5-0',
      '0xd521f52a7f4f4f00a25f0f6924c439844574d77d228113077ee0c84dc60ad11d-2',
      '0xdb29e26b3553559140bffddbc8f04011207db8a5996cbaf5b521db98e9d11b17-2',
      '0x8703457af1e3711aed7772bfe87ab50175cbf29439196cfdb34095e8cbbe3d45-2',
    ],
    depType: 'code',
    hashType: 'type',
    tag: 'm-nft',
    category: 'type',
  },
  {
    codeHashes: ['0x614d40a86e1b29a8f4d8d93b9f3b390bf740803fa19a69f1c95716e029ea09b3'],
    txHashes: ['0x1a04142a2a745fb3b7e0e9b61241676c1c94ad8cdacb36f223661130a23fb007-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'unipass v2',
    category: 'lock',
  },
  {
    codeHashes: ['0xd01f5152c267b7f33b9795140c2467742e8424e49ebe2331caec197f7281b60a'],
    txHashes: ['0x86a5e91ad93475caf30a3d3b0258786dd463984f71e8471abc5574f206f6207a-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'unipass v3',
    category: 'lock',
  },
  {
    codeHashes: ['0x081dbffa88dab54ba426d231ca64eb760cea2fe9e16761a1da400da1b2cbe128'],
    txHashes: ['0x0f0c22372a05f3c5f47acb066c65f9bae86bdce043762310e50309cc5a77abd4-0'],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'flashsigner',
    category: 'lock',
  },
  {
    codeHashes: ['0x1122a4fb54697cf2e6e3a96c9d80fd398a936559b90954c6e88eb7ba0cf652df'],
    txHashes: [
      '0x875db3381ebe7a730676c110e1c0d78ae1bdd0c11beacb7db4db08e368c2cd95-0',
      '0xae2d5838730fc096e68fe839aea50d294493e10054513c10ca35e77e82e9243b-0',
    ],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'cota',
    category: 'type',
  },
  {
    codeHashes: ['0x90ca618be6c15f5857d3cbd09f9f24ca6770af047ba9ee70989ec3b229419ac7'],
    txHashes: [
      '0x875db3381ebe7a730676c110e1c0d78ae1bdd0c11beacb7db4db08e368c2cd95-0',
      '0xae2d5838730fc096e68fe839aea50d294493e10054513c10ca35e77e82e9243b-0',
    ],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'cota_registry',
    category: 'type',
  },
  {
    codeHashes: ['0x000f87062a2fe9bb4a6cc475212ea11014b84deb32e0375ee51e6ec4a553e009'],
    txHashes: ['0x71b55e3641fdc8d00d9943a93b2c6e6ab42f7e57909009c2a1ad5c234956cdc5-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_custodian_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0xff602581f07667eef54232cce850cbca2c418b3418611c132fca849d1edcd775'],
    txHashes: ['0x61e576a7e5d2398ecc5b1a969d1af0142c87db0996c2f6fce41bf28f68d805b2-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_deposit_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x3714af858b8b82b2bb8f13d51f3cffede2dd8d352a6938334bb79e6b845e3658'],
    txHashes: ['0xe6389b5cf63eec1e2592e930414bc43f92508e529bdd5f5a07fa1dd140f4f20a-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_withdrawal_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x628b5f956b46ae27b50819a9ebab79ce5f957e6899ba0c75b8e142de2ed0dcd2'],
    txHashes: ['0x8eca99207a462a9005bd91d04e24911627769096220f867d1cc0a32e75a287a6-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_challenge_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0xb619184ab9142c51b0ee75f4e24bcec3d077eefe513115bad68836d06738fd2c'],
    txHashes: ['0x2e46a10a67987594d4eaee2d5f9ac96ce651f7bfb44e82c286a12a1950ad4f29-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_stake_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0xa4398768d87bd17aea1361edc3accd6a0117774dc4ebc813bfa173e8ac0d086d'],
    txHashes: ['0x625696834db4320214a8af09de74fd51fc8a83be69d920243f8ccd219071473b-0'],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'OMNI_LOCK(outdated)',
    tag: 'omni_lock v1',
    category: 'lock',
  },
  {
    codeHashes: ['0x9b819793a64463aed77c615d6cb226eea5487ccfc0783043a587254cda2b6f26'],
    txHashes: [
      '0xc76edf469816aa22f416503c38d0b533d2a018e253e379f134c3985b3472c842-0',
      '0xdfdb40f5d229536915f2d5403c66047e162e25dedd70a79ef5164356e1facdc8-0',
    ],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'OMNILOCK',
    tag: 'omni_lock v2',
    category: 'lock',
  },
  {
    codeHashes: ['0xfef1d086d9f74d143c60bf03bd04bab29200dbf484c801c72774f2056d4c6718'],
    txHashes: ['0x9f8e73e096f1583696760281004d71dc0cebd3c9aa6fb584949facde6e543e67-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_state_validator',
    category: 'type',
  },
  {
    codeHashes: ['0x096df264f38fff07f3acd318995abc2c71ae0e504036fe32bc38d5b6037364d4'],
    txHashes: ['0xf0cfb02fb435bf2f061cbf33b1b024a4944b3f4a95968a9d997d95dd2f76a7f9-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_eth_account_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0xd00c84f0ec8fd441c38bc3f87a371f547190f2fcff88e642bc5bf54b9e318323'],
    txHashes: ['0xf05188e5f3a6767fc4687faf45ba5f1a6e25d3ada6129dae8722cb282f262493-0'],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'JoyID',
    category: 'lock',
  },
  {
    codeHashes: ['0x50bd8d6680b8b9cf98b73f3c08faf8b2a21914311954118ad6609be6e78a1b95'],
    txHashes: ['0xc07844ce21b38e4b071dd0e1ee3b0e27afd8d7532491327f39b786343f558ab7-0'],
    depType: 'code',
    hashType: 'data1',
    tag: 'xUDT',
    category: 'lock',
  },
  {
    codeHashes: ['0x4a4dce1df3dffff7f8b2cd7dff7303df3b6150c9788cb75dcf6747247132b9f5'],
    txHashes: ['0x96b198fb5ddbd1eed57ed667068f1f1e55d07907b4c0dbd38675a69ea1b69824-0'],
    depType: 'code',
    hashType: 'data1',
    tag: 'Spore',
    category: 'type',
  },
  {
    codeHashes: ['0x7366a61534fa7c7e6225ecc0d828ea3b5366adec2b58206f2ee84995fe030075'],
    txHashes: ['0xe464b7fb9311c5e2820e61c99afc615d6b98bdefbe318c34868c010cbd0dc938-0'],
    depType: 'code',
    hashType: 'data1',
    tag: 'Spore Cluster',
  },
  {
    codeHashes: ['0x9f3aeaf2fc439549cbc870c653374943af96a0658bd6b51be8d8983183e6f52f'],
    txHashes: ['0xaa8ab7e97ed6a268be5d7e26d63d115fa77230e51ae437fc532988dd0c3ce10a-0x1'],
    depType: 'code',
    hashType: 'type',
    tag: 'Force Bridge',
    category: 'lock',
  },
  {
    codeHashes: ['0xbc6c568a1a0d0a09f6844dc9d74ddb4343c32143ff25f727c59edf4fb72d6936'],
    txHashes: ['0x04c5c3e69f1aa6ee27fb9de3d15a81704e387ab3b453965adbe0b6ca343c6f41-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'RGB++',
  },
  {
    codeHashes: ['0x2c8c11c985da60b0a330c61a85507416d6382c130ba67f0c47ab071e00aec628'],
    txHashes: ['0x67524c01c0cb5492e499c7c7e406f2f9d823e162d6b0cf432eacde0c9808c2ad-0'],
    depType: 'code',
    hashType: 'data1',
    tag: 'Unique Cell',
  },
  {
    codeHashes: ['0x70d64497a075bd651e98ac030455ea200637ee325a12ad08aff03f1a117e5a62'],
    txHashes: ['0x6257bf4297ee75fcebe2654d8c5f8d93bc9fc1b3dc62b8cef54ffe166162e996-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'BTC Time Lock',
  },
  {
    codeHashes: ['0xcfba73b58b6f30e70caed8a999748781b164ef9a1e218424a6fb55ebf641cb33'],
    txHashes: ['0xeda235b56aa422c497b9b9bcfde7af289376e7fe12449ade99176609005994ba-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'DID',
    category: 'type',
  },
  {
    codeHashes: ['0x641a89ad2f77721b803cd50d01351c1f308444072d5fa20088567196c0574c68'],
    txHashes: ['0x1911208b136957d5f7c1708a8835edfe8ae1d02700d5cb2c3a6aacf4d5906306-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'Nostr',
    category: 'lock',
  },
  {
    codeHashes: ['0x8290467a512e5b9a6b816469b0edabba1f4ac474e28ffdd604c2a7c76446bbaf'],
    txHashes: ['0x10d63a996157d32c01078058000052674ca58d15f921bec7f1dcdac2160eb66b-4'],
    depType: 'code',
    hashType: 'data1',
    tag: 'Single Use Lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x2a8100ab5990fa055ab1b50891702e1e895c7bd1df6322cd725c1a6115873bd3'],
    txHashes: ['0x621a6f38de3b9f453016780edac3b26bfcbfa3e2ecb47c2da275471a5d3ed165-0'],
    depType: 'dep_group',
    hashType: 'data1',
    tag: 'iCKB Logic',
  },
  {
    codeHashes: ['0xacc79e07d107831feef4c70c9e683dac5644d5993b9cb106dca6e74baa381bd0'],
    txHashes: ['0x621a6f38de3b9f453016780edac3b26bfcbfa3e2ecb47c2da275471a5d3ed165-0'],
    depType: 'dep_group',
    hashType: 'data1',
    tag: 'WR Owned-Owner',
  },
  {
    codeHashes: ['0x49dfb6afee5cc8ac4225aeea8cb8928b150caf3cd92fea33750683c74b13254a'],
    txHashes: ['0x621a6f38de3b9f453016780edac3b26bfcbfa3e2ecb47c2da275471a5d3ed165-0'],
    depType: 'dep_group',
    hashType: 'data1',
    tag: 'UDT Limit Order',
  },
  {
    codeHashes: ['0x26622198b66240e437e323e0fecf1c26ba3c8c28a45f03ed3ebb9f7f2bdc0055'],
    txHashes: ['0xb22fd5c56a642f2e8447f7fb2bbd4faa85ce09ec9393113b9bdeec2b17cd4f95-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'Stable++ Pool',
  },
  {
    codeHashes: ['0x9376c3b5811942960a846691e16e477cf43d7c7fa654067c9948dfcd09a32137'],
    txHashes: ['0x715afa97fb02c2ccdddbbc320ce3e92388074a5aee07fdf0b312f0b89ea6d6b7-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'DID',
  },
]

export const TestnetContractHashTags: ContractHashTag[] = [
  {
    codeHashes: ['0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8'],
    txHashes: ['0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37-0'],
    depType: 'dep_group',
    hashType: 'type',
    lumosConfigName: 'SECP256K1_BLAKE160',
    tag: 'secp256k1_blake160',
    category: 'lock',
  },
  {
    codeHashes: ['0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8'],
    txHashes: ['0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37-1'],
    depType: 'dep_group',
    hashType: 'type',
    lumosConfigName: 'SECP256K1_BLAKE160_MULTISIG',
    tag: 'secp256k1 / multisig',
    category: 'lock',
  },
  {
    codeHashes: ['0x86a1c6987a4acbe1a887cca4c9dd2ac9fcb07405bbeda51b861b18bbf7492c4b'],
    txHashes: ['0x4f32b3e39bd1b6350d326fdfafdfe05e5221865c3098ae323096f0bfc69e0a8c-0'],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'secp256k1 / anyone-can-pay (deprecated)',
    category: 'lock',
  },
  {
    codeHashes: ['0x3419a1c09eb2567f6552ee7a8ecffd64155cffe0f1796e6e61ec088d740c1356'],
    txHashes: ['0xec26b0f85ed839ece5f11c4c4e837ec359f5adc4420410f6453b1f6b60fb96a6-0'],
    depType: 'dep_group',
    hashType: 'type',
    lumosConfigName: 'ANYONE_CAN_PAY',
    tag: 'secp256k1 / anyone-can-pay',
    category: 'lock',
  },
  {
    codeHashes: ['0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e'],
    txHashes: ['0x8f8c79eb6671709633fe6a46de93c0fedc9c1b8a6527a18d3983879542635c9f-2'],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'DAO',
    tag: 'nervos dao',
    category: 'type',
  },
  {
    codeHashes: ['0x48dbf59b4c7ee1547238021b4869bceedf4eea6b43772e5d66ef8865b6ae7212'],
    txHashes: ['0xc1b2ae129fad7465aaa9acc9785f842ba3e6e8b8051d899defa89f5508a77958-0'],
    depType: 'code',
    hashType: 'data',
    tag: 'sudt (deprecated)',
    category: 'type',
  },
  {
    codeHashes: ['0xc5e5dcf215925f7ef4dfaf5f4b4f105bc321c02776d6e7d52a1db3fcd9d011a4'],
    txHashes: ['0xe12877ebd2c3c364dc46c5c992bcfaf4fee33fa13eebdf82c591fc9825aab769-0'],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'SUDT',
    tag: 'sudt',
    category: 'type',
  },
  {
    codeHashes: ['0x58c5f491aba6d61678b7cf7edf4910b1f5e00ec0cde2f42e0abb4fd9aff25a63'],
    txHashes: ['0x4f254814b972421789fafef49d4fee94116863138f72ab1e6392daf3decfaec1-0'],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'PW_LOCK',
    tag: 'pwlock-k1-acpl',
    category: 'lock',
  },
  {
    codeHashes: ['0x6843c5fe3acb7f4dc2230392813cb9c12dbced5597fca30a52f13aa519de8d33'],
    txHashes: ['0x28ee75f9745828eaade301ef24d0b037404717469a299180ecb679259cb688ab-0'],
    depType: 'code', // TODO
    hashType: 'type',
    tag: 'pwlock-r1',
    category: 'lock',
  },
  {
    codeHashes: ['0x60d5f39efce409c587cb9ea359cefdead650ca128f0bd9cb3855348f98c70d5b'],
    txHashes: ['0x7f96858be0a9d584b4a9ea190e0420835156a6010a5fde15ffcdc9d9c721ccab-0'],
    depType: 'dep_group',
    hashType: 'type',
    lumosConfigName: 'CHEQUE',
    tag: 'cheque',
    category: 'lock',
  },
  {
    codeHashes: ['0xb59879b6ea6fff985223117fa499ce84f8cfb028c4ffdfdf5d3ec19e905a11ed'],
    txHashes: [
      '0x744d2c4c4e6fabe66cfb08cb818532c50fffc682a7614746328c5d691a811c06-0',
      '0xbd262c87a84c08ea3bc141700cf55c1a285009de0e22c247a8d9597b4fc491e6-0',
      '0x194a0f84de41d006a07ece07c96a8130100818599fcf0b2ecf49e512b873ed6e-0',
      '0x3ecf42927509645dec38667d557dd9ba20d0d07267d769983495c1b6b9c70cc4-0',
      '0xf11ccb6079c1a4b3d86abe2c574c5db8d2fd3505fdc1d5970b69b31864a4bd1c-0',
    ],
    depType: 'code',
    hashType: 'type',
    tag: 'm-nft_issuer',
    category: 'type',
  },
  {
    codeHashes: ['0x095b8c0b4e51a45f953acd1fcd1e39489f2675b4bc94e7af27bb38958790e3fc'],
    txHashes: [
      '0x4f27e40b302bcb3bf0af3deae460f46076de2b4db30c0212b14b341c20fcb330-0',
      '0xbd262c87a84c08ea3bc141700cf55c1a285009de0e22c247a8d9597b4fc491e6-1',
      '0x194a0f84de41d006a07ece07c96a8130100818599fcf0b2ecf49e512b873ed6e-1',
      '0x3ecf42927509645dec38667d557dd9ba20d0d07267d769983495c1b6b9c70cc4-1',
      '0xf11ccb6079c1a4b3d86abe2c574c5db8d2fd3505fdc1d5970b69b31864a4bd1c-1',
    ],
    depType: 'code',
    hashType: 'type',
    tag: 'm-nft_class',
    category: 'type',
  },
  {
    codeHashes: ['0xb1837b5ad01a88558731953062d1f5cb547adf89ece01e8934a9f0aeed2d959f'],
    txHashes: [
      '0x7f9e3c1a2fc90411eb90fc2363101f6bd7b33875c3535117db5e52cd8a78b313-0',
      '0xbd262c87a84c08ea3bc141700cf55c1a285009de0e22c247a8d9597b4fc491e6-2',
      '0x194a0f84de41d006a07ece07c96a8130100818599fcf0b2ecf49e512b873ed6e-2',
      '0x3ecf42927509645dec38667d557dd9ba20d0d07267d769983495c1b6b9c70cc4-2',
      '0xf11ccb6079c1a4b3d86abe2c574c5db8d2fd3505fdc1d5970b69b31864a4bd1c-2',
    ],
    depType: 'code',
    hashType: 'type',
    tag: 'm-nft',
    category: 'type',
  },
  {
    codeHashes: ['0x124a60cd799e1fbca664196de46b3f7f0ecb7138133dcaea4893c51df5b02be6'],
    txHashes: ['0x3d41e1c543f0fddcbb17157d15a2845d7c5fb0363561cd8f50ecd0e118b34f84-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'unipass v2',
    category: 'lock',
  },
  {
    codeHashes: ['0x3e1eb7ed4809b2d60650be96a40abfbdafb3fb942b7b37ec7709e64e2cd0a783'],
    txHashes: ['0x8b98ede6bf7b5baba767b1d2d46a13749fc810375b14152abbc259a7fc98e46d-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'unipass v3',
    category: 'lock',
  },
  {
    codeHashes: ['0x577a5e5930e2ecdd6200765f3442e6119dc99e87df474f22f13cab819c80b242'],
    txHashes: ['0xb66776ff3244033fcd15312ae8b17d384c11bebbb923fce3bd896d89f4744d48-0'],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'flashsigner',
    category: 'lock',
  },
  {
    codeHashes: ['0x89cd8003a0eaf8e65e0c31525b7d1d5c1becefd2ea75bb4cff87810ae37764d8'],
    txHashes: [
      '0xd8c7396f955348bd74a8ed4398d896dad931977b7c1e3f117649765cd3d75b86-0',
      '0xeb8c99e9aaff64ffea5a97100fa9e6c23e59afe7ab9789cd882e3bb9a930c3ea-0',
    ],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'cota',
    category: 'type',
  },
  {
    codeHashes: ['0x9302db6cc1344b81a5efee06962abcb40427ecfcbe69d471b01b2658ed948075'],
    txHashes: [
      '0xd8c7396f955348bd74a8ed4398d896dad931977b7c1e3f117649765cd3d75b86-0',
      '0xeb8c99e9aaff64ffea5a97100fa9e6c23e59afe7ab9789cd882e3bb9a930c3ea-0',
    ],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'cota_registry',
    category: 'type',
  },
  {
    codeHashes: ['0x85ae4db0dd83f428a31deb342e4000af37ce2c9645d9e619df00096e3c50a2bb'],
    txHashes: ['0x7aed145beb6984fff008ca6224d0726d06a19959c4f01d15e49942d76e28747a-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_custodian_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x50704b84ecb4c4b12b43c7acb260ddd69171c21b4c0ba15f3c469b7d143f6f18'],
    txHashes: ['0x9caeec735f3cd2a60b9d12be59bb161f7c61ddab1ac22c4383a94c33ba6404a2-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_deposit_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x06ae0706bb2d7997d66224741d3ec7c173dbb2854a6d2cf97088796b677269c6'],
    txHashes: ['0x9c607a9a75ea4699dd01b1c2a478002343998cac8346d2aa582f35b532bd2b93-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_withdrawal_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x5a86c3bf1e8648b6a6f8abe6875720ccf9745ab225b68fa7c195f9d6635dea80'],
    txHashes: ['0x15598fb4d3fc4b7e0afcffc80ed0c02b62edb3f7875771f0397f17eef712b65d-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_challenge_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x7f5a09b8bd0e85bcf2ccad96411ccba2f289748a1c16900b0635c2ed9126f288'],
    txHashes: ['0x053fdb4ed3181eab3a3a5f05693b53a8cdec0a24569e16369f444bac48be7de9-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_stake_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x1e44736436b406f8e48a30dfbddcf044feb0c9eebfe63b0f81cb5bb727d84854'],
    txHashes: ['0xbcd73881ba53f1cd95d0c855395c4ffe6f54e041765d9ab7602d48a7cb71612e-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_state_validator',
    category: 'type',
  },
  {
    codeHashes: ['0x07521d0aa8e66ef441ebc31204d86bb23fc83e9edc58c19dbb1b0ebe64336ec0'],
    txHashes: ['0x21da20f275af89ca7172cb1cd7fcb8676056e4212ba3782e8c77afebae57c6ed-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'godwoken_eth_account_lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e'],
    txHashes: ['0x9154df4f7336402114d04495175b37390ce86a4906d2d4001cf02c3e6d97f39c-0'],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'OMNI_LOCK(outdated)',
    tag: 'omni_lock v1',
    category: 'lock',
  },
  {
    codeHashes: ['0xf329effd1c475a2978453c8600e1eaf0bc2087ee093c3ee64cc96ec6847752cb'],
    txHashes: ['0xec18bf0d857c981c3d1f4e17999b9b90c484b303378e94de1a57b0872f5d4602-0'],
    depType: 'code',
    hashType: 'type',
    lumosConfigName: 'OMNILOCK',
    tag: 'omni_lock v2',
    category: 'lock',
  },
  {
    codeHashes: ['0xd23761b364210735c19c60561d213fb3beae2fd6172743719eff6920e020baac'],
    txHashes: ['0x4dcf3f3b09efac8995d6cbee87c5345e812d310094651e0c3d9a730f32dc9263-0'],
    depType: 'dep_group',
    hashType: 'type',
    tag: 'JoyID',
    category: 'lock',
  },
  {
    codeHashes: ['0x25c29dc317811a6f6f3985a7a9ebc4838bd388d19d0feeecf0bcd60f6c0975bb'],
    txHashes: ['0xbf6fb538763efec2a70a6a3dcb7242787087e1030c4e7d86585bc63a9d337f5f-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'xUDT(final_rls)',
    category: 'lock',
  },
  {
    codeHashes: ['0x50bd8d6680b8b9cf98b73f3c08faf8b2a21914311954118ad6609be6e78a1b95'],
    txHashes: ['0xbf6fb538763efec2a70a6a3dcb7242787087e1030c4e7d86585bc63a9d337f5f-0'],
    depType: 'code',
    hashType: 'data1',
    tag: 'xUDT',
    category: 'lock',
  },
  {
    codeHashes: [
      '0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d',
      '0x5e063b4c0e7abeaa6a428df3b693521a3050934cf3b0ae97a800d1bc31449398',
      '0xbbad126377d45f90a8ee120da988a2d7332c78ba8fd679aab478a19d6c133494',
    ],
    txHashes: [
      '0x5e8d2a517d50fd4bb4d01737a7952a1f1d35c8afc77240695bb569cd7d9d5a1f-0',
      '0x06995b9fc19461a2bf9933e57b69af47a20bf0a5bc6c0ffcb85567a2c733f0a1-0',
      '0xfd694382e621f175ddf81ce91ce2ecf8bfc027d53d7d31b8438f7d26fc37fd19-0',
    ],
    depType: 'code',
    hashType: 'data1',
    tag: 'Spore',
    category: 'type',
  },
  {
    codeHashes: [
      '0x0bbe768b519d8ea7b96d58f1182eb7e6ef96c541fbd9526975077ee09f049058',
      '0x7366a61534fa7c7e6225ecc0d828ea3b5366adec2b58206f2ee84995fe030075',
      '0x598d793defef36e2eeba54a9b45130e4ca92822e1d193671f490950c3b856080',
    ],
    txHashes: [
      '0xcebb174d6e300e26074aea2f5dbd7f694bb4fe3de52b6dfe205e54f90164510a-0',
      '0xfbceb70b2e683ef3a97865bb88e082e3e5366ee195a9c826e3c07d1026792fcd-0',
      '0x49551a20dfe39231e7db49431d26c9c08ceec96a29024eef3acc936deeb2ca76-0',
    ],
    depType: 'code',
    hashType: 'data1',
    tag: 'Spore Cluster',
  },
  {
    codeHashes: [
      '0x4349889bda064adab8f49f7dd8810d217917f7df28e9b2a1df0b74442399670a',
      '0xbe8b9ce3d05a32c4bb26fe71cd5fc1407ce91e3a8b9e8719be2ab072cef1454b',
    ],
    txHashes: [
      '0xc5a41d58155b11ecd87a5a49fdcb6e83bd6684d3b72b2f3686f081945461c156-0',
      '0x0231ea581bbc38965e10a2659da326ae840c038a9d0d6849f458b51d94870104-0',
    ],
    depType: 'code',
    hashType: 'data1',
    tag: 'Spore Cluster Proxy',
  },
  {
    codeHashes: [
      '0x923e997654b2697ee3f77052cb884e98f28799a4270fd412c3edb8f3987ca622',
      '0xc986099b41d79ca1b2a56ce5874bcda8175440a17298ea5e2bbc3897736b8c21',
    ],
    txHashes: [
      '0x52210232292d10c51b48e72a2cea60d8f0a08c2680a97a8ee7ca0a39379f0036-0',
      '0x53fdb9366637434ff685d0aca5e2a68a859b6fcaa4b608a7ecca0713fed0f5b7-0',
    ],
    depType: 'code',
    hashType: 'data1',
    tag: 'Spore Cluster Agent',
  },
  {
    codeHashes: [
      '0x61ca7a4796a4eb19ca4f0d065cb9b10ddcf002f10f7cbb810c706cb6bb5c3248',
      '0xd07598deec7ce7b5665310386b4abd06a6d48843e953c5cc2112ad0d5a220364',
    ],
    txHashes: [
      '0xf1de59e973b85791ec32debbba08dff80c63197e895eb95d67fc1e9f6b413e00-0',
      '0x61efdeddbaa0bb4132c0eb174b3e8002ff5ec430f61ba46f30768d683c516eec-0',
    ],
    depType: 'code',
    hashType: 'type',
    tag: 'RGB++',
  },
  {
    codeHashes: ['0x8e341bcfec6393dcd41e635733ff2dca00a6af546949f70c57a706c0f344df8b'],
    txHashes: ['0xff91b063c78ed06f10a1ed436122bd7d671f9a72ef5f5fa28d05252c17cf4cef-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'Unique Cell',
  },
  {
    codeHashes: [
      '0x00cdf8fab0f8ac638758ebf5ea5e4052b1d71e8a77b9f43139718621f6849326',
      '0x80a09eca26d77cea1f5a69471c59481be7404febf40ee90f886c36a948385b55',
    ],
    txHashes: [
      '0xde0f87878a97500f549418e5d46d2f7704c565a262aa17036c9c1c13ad638529-0',
      '0x5364b3535965e9eac9a35dd7af8e9e45a61d30a16e115923c032f80b28783e21-0',
    ],
    depType: 'code',
    hashType: 'type',
    tag: 'BTC Time Lock',
  },
  {
    codeHashes: ['0x0b1f412fbae26853ff7d082d422c2bdd9e2ff94ee8aaec11240a5b34cc6e890f'],
    txHashes: ['0x37f82dd30435575954cc7a9e2292f238ed24d71b0d57a55d8a2fc8a08aa1accf-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'DID',
    category: 'type',
  },
  {
    codeHashes: ['0x6ae5ee0cb887b2df5a9a18137315b9bdc55be8d52637b2de0624092d5f0c91d5'],
    txHashes: ['0xa2a434dcdbe280b9ed75bb7d6c7d68186a842456aba0fc506657dc5ed7c01d68-0'],
    depType: 'code',
    hashType: 'type',
    tag: 'Nostr',
    category: 'lock',
  },
  {
    codeHashes: ['0x8290467a512e5b9a6b816469b0edabba1f4ac474e28ffdd604c2a7c76446bbaf'],
    txHashes: ['0xb4f171c9c9caf7401f54a8e56225ae21d95032150a87a4678eac3f66a3137b93-4'],
    depType: 'code',
    hashType: 'data1',
    tag: 'Single Use Lock',
    category: 'lock',
  },
  {
    codeHashes: ['0x2a8100ab5990fa055ab1b50891702e1e895c7bd1df6322cd725c1a6115873bd3'],
    txHashes: ['0xf7ece4fb33d8378344cab11fcd6a4c6f382fd4207ac921cf5821f30712dcd311-0'],
    depType: 'dep_group',
    hashType: 'data1',
    tag: 'iCKB Logic',
  },
  {
    codeHashes: ['0xacc79e07d107831feef4c70c9e683dac5644d5993b9cb106dca6e74baa381bd0'],
    txHashes: ['0xf7ece4fb33d8378344cab11fcd6a4c6f382fd4207ac921cf5821f30712dcd311-0'],
    depType: 'dep_group',
    hashType: 'data1',
    tag: 'WR Owned-Owner',
  },
  {
    codeHashes: ['0x49dfb6afee5cc8ac4225aeea8cb8928b150caf3cd92fea33750683c74b13254a'],
    txHashes: ['0xf7ece4fb33d8378344cab11fcd6a4c6f382fd4207ac921cf5821f30712dcd311-0'],
    depType: 'dep_group',
    hashType: 'data1',
    tag: 'UDT Limit Order',
  },
]

const getLumosScripts = (scripts: ContractHashTag[]): ScriptConfigs =>
  scripts.reduce(
    (acc, script) =>
      Object.assign(acc, {
        [script.lumosConfigName ?? script.tag]: {
          CODE_HASH: script.codeHashes[0],
          HASH_TYPE: script.hashType,
          TX_HASH: `${script.txHashes[script.txHashes.length - 1].split('-')[0]}`,
          INDEX: `0x${(+script.txHashes[script.txHashes.length - 1].split('-')[1]).toString(16)}`,
          DEP_TYPE: script.depType,
        },
      }),
    {},
  )

const LUMOS_MAINNET_SCRIPTS: ScriptConfigs = getLumosScripts(MainnetContractHashTags)

export const LUMOS_MAINNET_CONFIG: Config = {
  PREFIX: predefined.LINA.PREFIX,
  SCRIPTS: LUMOS_MAINNET_SCRIPTS,
}

const LUMOS_TESTNET_SCRIPTS: ScriptConfigs = getLumosScripts(TestnetContractHashTags)

export const LUMOS_TESTNET_CONFIG: Config = {
  PREFIX: predefined.AGGRON4.PREFIX,
  SCRIPTS: LUMOS_TESTNET_SCRIPTS,
}
