exports.start = (req, res) => {
  res.json({
    hello: 'This is page default'
  })
}

exports.getVacations = (req, res) => {
  res.json({
    data: 'Get vacations'
  })
}

exports.getVacation = (req, res) => {

  res.json({
    get: "vacation by id"
  })
}

exports.sendEmail = (req, res) => {
  res.json({
    send: "email"
  })
}

exports.deleteVacation = (req, res) => {
  res.json({
    delete: "vacation by id"
  })
}