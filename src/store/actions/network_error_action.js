export const NETWORK_ERROR = 'NETWORK_ERROR';

export const networkError = () => {
  return {
    type: NETWORK_ERROR,
    networkStatus: false
  }
};