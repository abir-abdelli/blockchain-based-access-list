// Require Web3 Module
var Web3 = require('web3') ;


//Show web3 where it needs to find for the besu node

  web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

// Write to the console the script will run shortly
console.log('Contract-ing ');

// Define the ABI of the contract, used to return the desired values
var abi = [
	{
	  constant: true,
	  inputs: [],
	  name: 'owner',
	  outputs: [ [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0x8da5cb5b'
	},
	{
	  constant: true,
	  inputs: [ [Object] ],
	  name: 'reqAccts',
	  outputs: [ [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0xf62d0d38'
	},
	{
	  inputs: [],
	  payable: false,
	  stateMutability: 'nonpayable',
	  type: 'constructor',
	  constant: undefined
	},
	{
	  anonymous: false,
	  inputs: [ [Object], [Object], [Object], [Object], [Object] ],
	  name: 'setAclInfo',
	  type: 'event',
	  constant: undefined,
	  payable: undefined,
	  signature: '0xf53abeccc777bbe4aaf8b69635c1d9ad964b5a08d9fd624b832eb4328f2c8d5c'
	},
	{
	  constant: false,
	  inputs: [ [Object], [Object], [Object], [Object], [Object] ],
	  name: 'setAclAtb',
	  outputs: [],
	  payable: false,
	  stateMutability: 'nonpayable',
	  type: 'function',
	  signature: '0xb04282e4'
	},
	{
	  constant: true,
	  inputs: [],
	  name: 'countList',
	  outputs: [ [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0x55b27b5d'
	},
	{
	  constant: true,
	  inputs: [ [Object], [Object] ],
	  name: 'getAclAtb',
	  outputs: [ [Object], [Object], [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0xd2555692'
	},
	{
	  constant: true,
	  inputs: [ [Object] ],
	  name: 'countRequtsForAddress',
	  outputs: [ [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0xaa97dc48'
	},
	{
	  constant: true,
	  inputs: [ [Object], [Object] ],
	  name: 'hasRightRead',
	  outputs: [ [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0x2dafc642'
	},
	{
	  constant: true,
	  inputs: [ [Object], [Object] ],
	  name: 'hasRightWrite',
	  outputs: [ [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0xaefed690'
	},
	{
	  constant: true,
	  inputs: [ [Object], [Object] ],
	  name: 'hasRightExec',
	  outputs: [ [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0xc29a61c6'
	},
	{
	  constant: true,
	  inputs: [ [Object], [Object], [Object] ],
	  name: 'hasRight',
	  outputs: [ [Object] ],
	  payable: false,
	  stateMutability: 'view',
	  type: 'function',
	  signature: '0x9e218417'
	}
  ];
  

// The besu address of the smart contract ??
var addr ='0x3Ace09BBA3b8507681146252d3Dd33cD4E2d4F63';

// Build a new variable based on the web3 API including the ABI and address of the contract
var ACL = new web3.eth.Contract(abi, addr);


// test result false / false /false puisque il n existe pas un ressource rsc et cettte adresse .
//ACL.methods.getAclAtb('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae' , 'rsc').call().then(console.log);


// set d'un nouveau utilisateur dans l'acl 




//get des acl 
var ins = prompt('entrer un adresse = ');
var rsc =prompt('entrer un ressource =');
ACL.methods.getAclAtb(ins, rsc).call().then(console.log);
 
