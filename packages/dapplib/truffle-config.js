require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain modify inner kiwi bone tragic'; 
let testAccounts = [
"0xd8b14cf826c453ed3a4657bbc40143fbe8561c7e55c8e8fa1573d6c845ef5785",
"0x28ea794fd39a27e000bec81204296ba206b6bdf41a4aa8cbaaa233c46284d530",
"0x7373dd83a98ffc4c015bf0113b2169f40f3d704c585032e6e9731c0c67cbcb71",
"0x0e1f5c30352df6fa5cea88ed97275699aa751578a2a1b2446dd8cbdfecc0f1f7",
"0x86200dff05c9594b0baebe16d4f1261abfb6fe67ff08fc6d66b7baaa644659c1",
"0x7bfef191d50937e0187dc850e782f5aed1711f2100905e54fa6e930c0a0d538e",
"0xe558441b38646fb07083d0d2d0505a175b8a4e002d21bf29e8d756eeacadaf7a",
"0xec3064235b57052d6c67ca6efd04609be5ba7c42ac8ab25d3bdf55a81698f592",
"0x11519b37f11952269317b28369b23875479e8f3bbfa633c35855a3d23a43a7be",
"0xe147933fe761829229de804b3c1db2f708965ddaaa4c8ea405ab4598b0ccb061"
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

