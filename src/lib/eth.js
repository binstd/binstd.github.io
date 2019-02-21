const Eth = require('ethjs');


var eth; 

if (typeof window !== `undefined`) {
    // import Web3 from 'web3';
    eth  = new Eth(window.ethereum || new Eth.HttpProvider('https://ropsten.infura.io/v3/0045c2ce288a4e649a8f39f3d19446b4'));  
}

export {eth,Eth}



