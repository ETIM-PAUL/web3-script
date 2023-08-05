import { ethers } from 'ethers';

const mnemonic = "injury manage trade drama violin wrist rack eyebrow patient fiscal stuff clerk"

const wallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log(wallet.privateKey);
