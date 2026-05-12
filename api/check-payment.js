export default async function handler(req, res) {
  try {
    const { transaction_id } = req.query

    if (!transaction_id) {
      return res.status(400).json({
        success: false,
        error: 'transaction_id required'
      })
    }

    const response = await fetch(
      `https://qris.pw/api/check-payment.php?transaction_id=${transaction_id}`,
      {
        headers: {
          'X-API-Key': process.env.VITE_QRIS_API_KEY,
          'X-API-Secret': process.env.VITE_QRIS_API_SECRET
        }
      }
    )

    const data = await response.json()
    return res.status(200).json(data)

  } catch (error) {
    console.error('CHECK PAYMENT ERROR:', error)

    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
