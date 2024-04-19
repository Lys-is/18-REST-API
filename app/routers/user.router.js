const express = require('express')
const router = new express()
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const controller = require('../controllers/user.controller')


router.get('/', controller.getAll)
router.get('/:id', controller.getOne)

router.post('/', controller.createOne)

router.put('/:id', controller.updateOne)

router.delete('/', controller.deleteAll)
router.delete('/:id', controller.deleteOne)

module.exports = router