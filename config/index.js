require('dotenv').config()

const config = {

  testnet: process.env.TESTNET,

  web3: {
    provider: process.env.PROVIDER
  },

  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    // password: PROCESS.ENV.REDIS_PASSWORD
  },

  tokenLists: [
    'https://raw.githubusercontent.com/DimensionDev/Mask-Token-List/gh-pages/latest/250/tokens.json',
    'https://unpkg.com/@crocoswap/default-token-list@3.2.1/build/sushiswap-default.tokenlist.json',
    'https://raw.githubusercontent.com/BoggedFinance/Bogged-Token-List/main/ftm/tokenlist.json'
  ],

  wftm: {
    "chainId":250,
    "name":"Wrapped FTM",
    "symbol":"wFTM",
    "address":"0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    "decimals":18,
    "logoURI":"https://assets.spookyswap.finance/tokens/wFTM.png"
  }

}


module.exports = config
