const axios = require('axios');

export const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
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

export const handler = async (req, res) => {
  const api = 'https://api.eurocarpathian.com'

  try {
    let url = req.url
    url = api + url.substring(0, url.indexOf('?')).replace('/api', '')

    let response

    switch (req.method) {
      case 'POST': {
        response = await axios.post(url, req.body)
      } break;
      case 'PUT': {
        response = await axios.put(url, req.body)
      } break;
      case 'DELETE': {
        response = await axios.delete(url)
      } break;
      default: {
        response = await axios.get(url)
      }
    }

    if (response.status !== 200) {
      return res.status(response.status).json({ type: 'error', message: response.statusText });
    } else {
      res.json(response.data);
    }
  } catch (error) {
    return res.status(error.response.status).json({ type: 'error', message: error.response.data.message });
  }
}

