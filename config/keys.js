const { JWT_SECRET} = require('./prod')

if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
	module.exports = {
		MONGOURI : 'mongodb+srv://pratik-shivnani:Pratham1143@nitk-instagram.0iqxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		JWT_SECRET : "asndudfrfperfhe9rug12"
	}
}else{
    module.exports = require('./dev')
	module.exports = {
		MONGOURI : 'mongodb+srv://pratik-shivnani:Pratham1143@nitk-instagram.0iqxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		JWT_SECRET : "asndudfrfperfhe9rug12"
	}
}