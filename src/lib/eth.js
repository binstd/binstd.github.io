
// var web3;
const Eth = require('ethjs');

// var web3; 
// if (typeof window !== `undefined`) {
//     const ethereum = window.ethereum;
//     web3 = new Web3(ethereum);
//     web3 = web3;
// }
// if (window.web3) {
//     // Then replace the old injected version by the latest build of Web3.js version 1.0.0
//     window.web3 = new Web3(window.ethereum);
//     web3 = window.web3;
// }
var eth; 
//var network;
if (typeof window !== `undefined`) {
    // import Web3 from 'web3';
    eth  = new Eth(window.ethereum || new Eth.HttpProvider('https://ropsten.infura.io/v3/0045c2ce288a4e649a8f39f3d19446b4'));
   
}
//

export {eth,Eth}

// const windowGlobal = typeof window !== 'undefined' && window;
// export let web3 = windowGlobal.Web3 ? new Web3(windowGlobal.web3.currentProvider) : undefined;

// if (typeof window !== `undefined`) {
//     const module = require("module")
// }



// export const isAddress = (hash) => {

//     if (typeof hash === 'string') {
//       return /^0x([A-Fa-f0-9]{40})$/.test(hash);
//     } else {
//       return false;
//     }

// };

