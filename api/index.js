const axios = require('axios');

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = async (req, res) => {
  console.log('req')
  console.log(req)
  try {
    const response = await axios.post('https://api.eurocarpathian.com/auth/login', req.body);
    if (response.status !== 200) {
      return res.status(response.status).json({ type: 'error', message: response.statusText });
    } else {
      res.json(response.data);
    }
  } catch (error) {
    console.log(error)
    return res.status(error.response.status).json({ type: 'error', message: error.response.data.message });
  }
}

module.exports = allowCors(handler)
