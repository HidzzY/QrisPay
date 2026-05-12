export default async function handler(req, res) {
  const response = await fetch(
    `https://qris.pw/api/check-payment.php?transaction_id=${req.query.transaction_id}`,
    {
      headers: {
        'X-API-Key': process.env.VITE_QRIS_API_KEY,
        'X-API-Secret': process.env.VITE_QRIS_API_SECRET
      }
    }
  )

  const data = await response.json()
  res.status(200).json(data)
}