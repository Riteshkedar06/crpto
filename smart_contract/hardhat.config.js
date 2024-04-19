require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: "development",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/J-c2aN0E1zRmVSlHxmAfCAfK21UbRw7Y',
      accounts: ['3bb3e86934d299124da5105cbde8980a6be3ec6522d69d9b35342798080ba731'],
    },
    development:{
      url:"HTTP://127.0.0.1:7545",
      accounts:['0xc6eed5c7867f994baa35a1eb03ada7b2f0a10c862798cc9f0a7ad86ef6829ea6']
    }
  },
};