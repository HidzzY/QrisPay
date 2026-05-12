export default async function handler(req, res) {
  const response = await fetch('https://qris.pw/api/create-payment.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.VITE_QRIS_API_KEY,
      'X-API-Secret': process.env.VITE_QRIS_API_SECRET
    },
    body: JSON.stringify(req.body)
  })

  const data = await response.json()
  res.status(200).json(data)
}