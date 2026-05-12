export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        success: false,
        error: 'Method not allowed'
      })
    }

    const response = await fetch('https://qris.pw/api/create-payment.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.VITE_QRIS_API_KEY,
        'X-API-Secret': process.env.VITE_QRIS_API_SECRET
      },
      body: JSON.stringify(req.body || {})
    })

    const data = await response.json()
    return res.status(200).json(data)

  } catch (error) {
    console.error('CREATE PAYMENT ERROR:', error)

    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
