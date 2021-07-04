'use strict';

const express: any = require('express');
export const router: any = express.Router();


/* GET home page. */
router.get('/', function(req:any, res:any, next:any) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
