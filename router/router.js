const express = require('express')
const router = express.Router()
const handler = require('../controllers/handler')

module.exports = () => {

  router.get('/api', handler.start)


  router.get('/vacations', handler.getVacations)
  router.get('/vacation/:sku', handler.getVacation)
  router.post('/vacation/:sku/notify-when-in-season', handler.sendEmail)
  router.delete('/vacation/:sku', handler.deleteVacation)

  return router
}

