const { allowCors, handler } = require('../_utils')

module.exports = allowCors(handler)
