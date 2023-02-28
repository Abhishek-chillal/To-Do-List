const express = require('express');

const router = express();

const listController = require('../controllers/list');

router.get('/',listController.getList);

router.post('/',listController.postList);

router.get('/:customListName',listController.getcustom);

router.post('/delete',listController.deleteItem);

module.exports=router;