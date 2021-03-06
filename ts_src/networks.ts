// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  blech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
  assetHash: string;
  confidentialPrefix: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const liquid: Network = {
  messagePrefix: '\x18Liquid Signed Message:\n',
  bech32: 'ex',
  blech32: 'lq',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 57,
  scriptHash: 39,
  wif: 0x80,
  confidentialPrefix: 12,
  assetHash: '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d',
};
export const regtest: Network = {
  messagePrefix: '\x18Liquid Signed Message:\n',
  bech32: 'ert',
  blech32: 'el',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 235,
  scriptHash: 75,
  wif: 0xef,
  confidentialPrefix: 4,
  assetHash: '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225',
};
