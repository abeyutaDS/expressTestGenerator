const mysql = require('../lib/mysqlConnection')
const log4js = require('log4js')

var express = require('express')
const router = express.Router()

log4js.configure(`config/log-config.json`)
const logger = log4js.getLogger('sql')

router.get('/person/:id([0-9]+)', (req, res) => {
    const query = 'select * from person where id = ' + req.params.id
    logger.info('parsonShow query : ' + query)
    mysql.query(query, (err, rows) => {
        res.send(rows)
    })
})

module.exports = router