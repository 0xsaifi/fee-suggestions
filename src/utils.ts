import BigNumber from 'bignumber.js';

export const toGwei = (wei: string) => {
  return new BigNumber(wei).dividedBy(1000000000).toNumber();
};