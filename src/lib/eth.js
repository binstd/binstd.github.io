// import Web3 from 'web3';


const windowGlobal = typeof window !== 'undefined' && window;
export let web3 = windowGlobal.Web3 ? new Web3(windowGlobal.web3.currentProvider) : undefined;

export const isAddress = (hash) => {

    if (typeof hash === 'string') {
      return /^0x([A-Fa-f0-9]{40})$/.test(hash);
    } else {
      return false;
    }

};
  
export const getMetamaskStatus = () => {

    var accounts = web3.eth.accounts;
    
    console.log(accounts); 
    if (!window.Web3) {

      return 'noMetamask';
    }
    if (!web3.eth.accounts[0]) {

        return 'unlockMetamask';
    }
    return 'okMetamask';
};
