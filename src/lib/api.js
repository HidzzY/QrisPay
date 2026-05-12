export async function createPayment(payload) {
  const res = await fetch('/api/create-payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  const text = await res.text()

  try {
    return JSON.parse(text)
  } catch {
    console.error('Create payment error:', text)
    throw new Error('Response create-payment bukan JSON')
  }
}

export async function checkPayment(transactionId) {
  const res = await fetch(
    `/api/check-payment?transaction_id=${transactionId}`
  )

  const text = await res.text()

  try {
    return JSON.parse(text)
  } catch {
    console.error('Check payment error:', text)
    throw new Error('Response check-payment bukan JSON')
  }
}
