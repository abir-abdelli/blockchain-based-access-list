var express = require('express');
var path = require('path');
var router = express.Router();
var Web3 = require("web3");
 
web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

/* GET users listing. */
router.get('/', function (req, res) {
  res.sendFile(path.resolve("../Client/public/getAclAtb.html"));
});

router.post('/', function(req,res) {
  const user = ({
    address: req.body.address,
    ressource: req.body.ressource
});


  var abi = '';
  
  var addr = '';

  
  var contract = new web3.eth.Contract(abi, addr);
  contract.methods.countList().call()
  contract.methods.getAclAtb(user.address, user.ressource).call( function(error,result) {
    console.log(result);
  });

  })


module.exports = router;
