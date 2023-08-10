import { ethers } from "ethers"

const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/AWnHswbq1h_XcVgQgP8IdyPSaaktBQGf")


const abi = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",

  // Authenticated Functions
  "function transfer(address to, uint amount) returns (bool)",

  // Events
  "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"

const erc20 = new ethers.Contract(address, abi, provider);

const balances = async () => {
  // mainnet
  const usdcDecimals = await erc20.decimals()
  const usdcSymbol = await erc20.symbol()
  const usdcBalance = await erc20.balanceOf("0x9d4eF81F5225107049ba08F69F598D97B31ea644")
  const totalSupply2 = await erc20.totalSupply()

  console.log(`The Decimal Count of ${address} is: ${usdcDecimals} in Mainnet Network`);
  console.log(`The Symbol of ${address} is: ${usdcSymbol} in Mainnet Network`);
  console.log(`The Total Supply of ${address} is: ${ethers.utils.formatUnits(totalSupply2, 18)} in Mainnet Network`);
  console.log(`The Balance of 0x9d4eF81F5225107049ba08F69F598D97B31ea644 is: ${usdcBalance} DAI in Mainnet Network`);

};


balances();