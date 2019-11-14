var express = require('express')
var router = express.Router()
var mysql = require('mysql')

// MySQLとのコネクションの作成
var opt = {
  host: 'mysql57',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'sample'
}

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('うんこ')

  var connection = mysql.createConnection(opt)

  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack)
      return
    }

    console.error('成功だよー')
  })

  connection.end()

  res.render('index', { title: 'Express' })
})
module.exports = router
