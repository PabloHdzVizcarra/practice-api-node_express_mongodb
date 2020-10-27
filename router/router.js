const express = require('express')
const router = express.Router()
const handler = require('../controllers/handler')

module.exports = () => {

  router.get('/api', handler.start)


  router.get('/api/vacations', handler.getVacations)
  router.get('/api/vacation/:sku', handler.getVacation)
  router.post('/api/vacation/:sku/notify-when-in-season', handler.sendEmail)
  router.delete('/api/vacation/:sku', handler.deleteVacation)


  return router
}

