exports.getVacations = (req, res) => {
  res.json({
    data: 'Get vacations'
  })
}

exports.start = (req, res) => {
  res.json({
    hello: 'This is page default'
  })
}