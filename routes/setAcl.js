var express = require('express');
var path = require('path');
var router = express.Router();
var Web3 = require("web3");
web3 = new Web3(Web3.providers.HttpProvider("http://127.0.0.1:8545"));

/* GET users listing. */
router.get('/', function (req, res) {
  res.sendFile(path.resolve("../Client/public/setAclAtb.html"));
});

router.post('/', function(req,res) {
  const user = ({
    address: req.body.address,
    read: req.body.read,
    write: req.body.write,
    exec: req.body.exec,
    ressource: req.body.ressource
});


  // var abi = '';  // contract's abi
  // var addr = '' ; // contract's address

  // var abiErc = '' ; // ERC721's abi
  // var addrErc = '' ; // ERC721's address


  // var aclContract = new web3.eth.Contract(abi, addr);
  // var ercContract = new web3.eth.Contract(abiErc, addrErc);


 
  // aclContrac.methods.setAclAtb(user.address,user.read, user.write,user.exec, user.ressource).send()
  // .then(consol.log)
  // .then(aclContract.methods.countList().call(function(error,result){
  //   consol.log('countlist');
  //   consol.log(result);
  //   ercContract.methods._mint(address,result-1).call();
  // }));
  


 })



module.exports = router;
