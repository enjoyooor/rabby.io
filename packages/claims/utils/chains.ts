import { CHAINS, CHAINS_ENUM } from '@debank/common';

export const RABBY_SWAP_ROUTER: Record<string, string> = {
  [CHAINS_ENUM.ETH]: '0x6eb211caf6d304a76efe37d9abdfaddc2d4363d1',
  [CHAINS_ENUM.POLYGON]: '0xf23b0f5cc2e533283ea97f7b9245242b8d65b26b',
  [CHAINS_ENUM.BSC]: '0xf756a77e74954c89351c12da24c84d3c206e5355',
  [CHAINS_ENUM.AVAX]: '0x509f49ad29d52bfaacac73245ee72c59171346a8',
  [CHAINS_ENUM.FTM]: '0x3422656fb4bb0c6b43b4bf65ea174d5b5ebc4a39',
  [CHAINS_ENUM.OP]: '0xd1a57cb694cf4941360a937d5f5633b363204e18',
  [CHAINS_ENUM.ARBITRUM]: '0xf401c6373a63c7a2ddf88d704650773232cea391',
  [CHAINS_ENUM.GNOSIS]: '0x5a0ab5d78c4d40e3a467a8bc52ce16cce88c999d',
  [CHAINS_ENUM.CRO]: '0xa1b61f32a7c11e64df6b11d420d2bb7656f4b6ab',
  [CHAINS_ENUM.AURORA]: '0x67832c40daf905ea5dde3fca036219e861a6bb8a',
  [CHAINS_ENUM.HMY]: '0x563b6c3646e587caad54d57b5c0e98d7e99aeb4f',
  [CHAINS_ENUM.METIS]: '0xb490f6a28eb43709410737dbdc1ffb4d3a5c4989',
  [CHAINS_ENUM.MOBM]: '0xa166a168463c44c6c973c4f8adf97031d7b25499',
  [CHAINS_ENUM.NOVA]: '0xe02504dcbc0721e7a4861c56b842c53e28dec84d',
  [CHAINS_ENUM.BOBA]: '0x328fd59a417463af4b0a465794ad627d5fc90d7b',
  [CHAINS_ENUM.KLAY]: '0xfcda4bd27e841dec3d8a49a3187f44757c8b9eac',
  [CHAINS_ENUM.ASTAR]: '0x563b6c3646e587caad54d57b5c0e98d7e99aeb4f',
  [CHAINS_ENUM.HECO]: '0x275ad6133d7662e6feb70365c93d78363286dfcc',
  [CHAINS_ENUM.CELO]: '0xc9f8a7d8cabb46135a90b9fa0ce58b75e8d15cc5'
  // [CHAINS_ENUM.CANTO]: '0x21ad01d9fa3ebc3ea2afc90f571f7df32ffd223e',
};

export const CLAIM_CHIAN_LIST = [
  CHAINS[CHAINS_ENUM.ETH].serverId,
  CHAINS[CHAINS_ENUM.POLYGON].serverId,
  CHAINS[CHAINS_ENUM.BSC].serverId,
  CHAINS[CHAINS_ENUM.AVAX].serverId,
  CHAINS[CHAINS_ENUM.FTM].serverId,
  CHAINS[CHAINS_ENUM.OP].serverId,
  CHAINS[CHAINS_ENUM.ARBITRUM].serverId,
  CHAINS[CHAINS_ENUM.GNOSIS].serverId
];

export const CHAINS_BY_SERVER_ID = Object.values(CHAINS).reduce(
  (acc, chain) => {
    acc[chain.serverId] = chain;
    return acc;
  },
  {} as Record<string, typeof CHAINS[keyof typeof CHAINS]>
);