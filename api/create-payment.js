export default async function handler(req, res) {
  try {
    const response = await fetch('https://qris.pw/api/create-payment.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.VITE_QRIS_API_KEY,
        'X-API-Secret': process.env.VITE_QRIS_API_SECRET
      },
      body: JSON.stringify(req.body || {})
    })

    const text = await response.text()

    try {
      const data = JSON.parse(text)
      return res.status(200).json(data)
    } catch {
      return res.status(500).json({
        success: false,
        error: 'Provider tidak mengembalikan JSON',
        raw_response: text
      })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
