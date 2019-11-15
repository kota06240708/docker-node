var express = require('express')
var router = express.Router()
var mysql = require('mysql')

// MySQLとのコネクションの作成
var opt = {
  host: 'mysql57',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'node_sample'
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

  connection.query(
    'insert into users set ?',
    { name: 'kota', age: 30 },
    function (error, results, fields) {
      if (error) {
        console.log('しっぱいし')
      }

      console.log(results)
    }
  )

  connection.end()

  res.render('index', { title: 'Express' })
})
module.exports = router
