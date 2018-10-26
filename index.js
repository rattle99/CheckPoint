const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const crypto = require('crypto');
const app = express();
const Web3 = require('web3');
let url = 'https://rinkeby.infura.io/v3/ffef8cbdf9f943f29b141ba5b8c3790c';
let web3 = new Web3(Web3.givenProvider || url);
const ethjstx = require('ethereumjs-tx');




app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(fileUpload());


app.get('/', (req,res)=>{
	res.render('upload');
});
app.post('/upload', (req,res)=>{
	const hash = crypto.createHash('sha256').update(req.files.foo.data).digest('hex');
	contract.methods.set(hash).send((err,resp)=>{
		if(err){
			console.log("error : ",err);
			web3.eth.getAccounts((err,arr)=>{
				if(err){
					console.log(err);
				}
				console.log(arr);
			});
		}else{
			console.log("response : ",resp);
			web3.eth.getAccounts((err,arr)=>{
				if(err){
					console.log(err);
				}
				console.log(arr);
			});
		}
	});
});
app.listen(8080, ()=>{
	console.log('server running');
	console.log(web3.eth.accounts);
})