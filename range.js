// This is a middleware for json-server
// In order to run go to package.json :
// "server": "json-server --watch db.json --port 5000 --middlewares ./range.js",
module.exports = (req, res, next) => {
	res.header('Content-Range', 'posts 0-20/20')
	next()
}
