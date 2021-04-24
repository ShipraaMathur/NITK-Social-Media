const { JWT_SECRET} = require('./prod')

if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
	module.exports = {
		MONGOURI : 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000',
		JWT_SECRET : "asndudfrfperfhe9rug12"
	}
}else{
    module.exports = require('./dev')
	module.exports = {
		MONGOURI : 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000',
		JWT_SECRET : "asndudfrfperfhe9rug12"
	}
}