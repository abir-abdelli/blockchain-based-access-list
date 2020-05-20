var express = require('express');
var path = require('path');
var router = express.Router();
var Web3 = require("web3");

web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

/* GET users listing. */
router.get('/', function (req, res) {
  res.sendFile(path.resolve("../Client/public/getAclAtb.html"));
});

router.post('/', function (req, res) {
  const user = ({
    address: req.body.address,
    ressource: req.body.ressource,
    type: req.body.type,
    submit: req.body.submit
  });

  var abi = '';

  var addr = '';


  var contract = new web3.eth.Contract(abi, addr);


  switch (user.submit) {
    case 'exec right':
      contract.methods.hasRightExec(user.address, user.ressource).call(function (error, result) {
        console.log(result);
        res.send(result);
      });
      break;
    case 'read right':
      contract.methods.hasRightRead(user.address, user.ressource).call(function (error, result) {
        console.log(result);
        res.send(result);
      });
      break;
    case 'write right':
      contract.methods.hasRightWrite(user.address, user.ressource).call(function (error, result) {
        console.log(result);
        res.send(result);
      });
      break;
    case 'has right':
      contract.methods.hasRight(user.address,user.type,user.ressource).call(function (error, result) {
        console.log(result);
        res.send(result);
      });
      break;
    case 'owner':
      contract.methods.owner(user.address).call(function (error, result) {
        console.log(result);
        res.send(result);
      });
      break;
    case 'count list':
      contract.methods.countList().call(function (error, result) {
        console.log(result);
        res.send(result);
      });
      break;
    default:
    case 'get attribute informations':
      contract.methods.getAclAtb(user.address, user.ressource).call(function (error, result) {
        console.log(result);
        res.send(result);
      });
      break;
  }

})


module.exports = router;
