export async function createPayment(payload) {
  const res = await fetch('/api/create-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  return res.json()
}

export async function checkPayment(transactionId) {
  const res = await fetch(`/api/check-payment?transaction_id=${transactionId}`)
  return res.json()
}