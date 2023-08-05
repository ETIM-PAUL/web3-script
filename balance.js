import { ethers } from "ethers"


const balances = async (address) => {
  const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/uv6Iua6KcqzObQ7LMEotRh_YaAVovrC4")
  const balanceFrom = ethers.utils.formatEther(await provider.getBalance(address))
  const transactionCount = await provider.getTransactionCount(address)
  const getType = await provider.getCode(address)

  console.log(`The balance of ${address} is: ${balanceFrom} ETH`);
  console.log(`The transaction count of ${address} is: ${transactionCount}`);
  console.log(`The type of ${address} is: ${getType > 1 ? "contract address" : "wallet"}`);
};


balances("0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85");
balances("0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C");
balances("0x3b138FC7eC06B2A44565994CfDe5134A75915995")