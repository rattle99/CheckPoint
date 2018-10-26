import web3 from './web3';

const address = '0x415EF6d747F7B6858233D47617FE4eFc39F1De7F';  // use quotes! 

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "fileHash",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "fileHash",
				"type": "string"
			},
			{
				"name": "_toVerify",
				"type": "address"
			}
		],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
// contract abi doesn't have quotes an will be something like [{a lot of code}, {a lot of code}, … ];  REMEMBER to add ; or it won't work 
export default new web3.eth.Contract(abi, address);