const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const crypto = require('crypto');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(fileUpload());
app.post('/upload', (req, res) => {
	const hash = crypto.createHash('sha256').update(req.files.foo.data).digest('hex');
	res.json(hash);
});
app.listen(process.env.PORT, () => {
	console.log('server running');
});