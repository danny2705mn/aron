const speakeasy = require('speakeasy');

export default function handler(req, res) {
  try {
    const token = speakeasy.totp({
      secret: '4ZERP4QUQQDMB7ON',
      encoding: 'base32'
    });
    res.status(200).json({ code: token });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
