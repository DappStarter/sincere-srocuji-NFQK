require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note soccer evil gloom prize olympic gaze'; 
let testAccounts = [
"0xa3dfb33a94769c1aea38b02defd3dd4c57801cb9ef223fcb83f29a94b57c84e9",
"0xee8b146617730ff898437338647e7aa295c4fbcc60f010592fbfb16f74afd316",
"0xaf636a5eb9f86dfa41f3a07d6b0faa0114a0ef81a968a7c93e57d166a51093a0",
"0x140ab10bd8ed49998c39257c483f5058d55f2f233990a17ca14981b6826f08a2",
"0x8816769fa842e21cef37a488cadd8baab53fd3a763f26501173962e033a50eb5",
"0xe2bdda1c94c894882e7c0ac11c0989b1deb9450de5ed4a6fdfce5fb51ff7b0ea",
"0x91d768e039cbf78343a3b467ada1c03a87225ad94ec09ac3f087a12138c188d5",
"0xaf05915360b63aef3fe9e14949fd7971e5aef76deaa92afd8646167d31c7d1f5",
"0x07c6c0eb2e4df2d960cdc9de26641185849b21ef6e11beec3227bf614599b213",
"0x0126e878eba5126521eed24b876db173bb75e37e37f86e64f5f64a1e5198508e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

