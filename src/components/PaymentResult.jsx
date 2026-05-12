import { useEffect, useState } from 'react'
import { checkPayment } from '../lib/api'

export default function PaymentResult({ payment }) {
  const [status, setStatus] = useState('pending')

  async function refreshStatus() {
    if (!payment) return
    const result = await checkPayment(payment.transaction_id)
    if (result.success) setStatus(result.status)
  }

  useEffect(() => {
    if (!payment) return
    const interval = setInterval(refreshStatus, 5000)
    return () => clearInterval(interval)
  }, [payment])

  if (!payment) return <div className="card">Belum ada transaksi</div>

  return (
    <div className="card">
      <img src={payment.qris_url} width="250" />
      <p>{payment.transaction_id}</p>
      <p>{payment.order_id}</p>
      <p>Rp {payment.amount}</p>
      <p>Status: {status}</p>
      <button onClick={refreshStatus}>Check Status</button>
    </div>
  )
}