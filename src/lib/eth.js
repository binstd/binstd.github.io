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
    console.log(accounts); // ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"] 
    // console.log(web3.eth.accounts);
    if (!window.Web3) {
      return 'noMetamask';
    }
    if (!web3.eth.accounts[0]) {
      return 'unlockMetamask';
    }
    // console.log(web3.eth.defaultAccount);
    return 'okMetamask';
};
