const express = require('express')
const router = express.Router()
const handler = require('../controllers/handler')

module.exports = () => {

  router.get('/api', handler.start)
  router.get('/api/vacations', handler.getVacations)

  return router
}

