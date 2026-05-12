import { useState } from 'react'
import { createPayment } from '../lib/api'

export default function PaymentForm({ setPayment }) {
  const [form, setForm] = useState({
    amount: '',
    customer_name: '',
    customer_phone: '',
    callback_url: ''
  })

  async function handleSubmit() {
    const result = await createPayment({
      ...form,
      amount: Number(form.amount),
      order_id: 'ORDER-' + Date.now()
    })

    if (result.success) setPayment(result)
    else alert(result.error)
  }

  return (
    <div className="card">
      <input placeholder="Nominal" onChange={(e)=>setForm({...form, amount:e.target.value})} />
      <input placeholder="Nama Customer" onChange={(e)=>setForm({...form, customer_name:e.target.value})} />
      <input placeholder="No HP" onChange={(e)=>setForm({...form, customer_phone:e.target.value})} />
      <input placeholder="Callback URL" onChange={(e)=>setForm({...form, callback_url:e.target.value})} />
      <button onClick={handleSubmit}>Generate QRIS</button>
    </div>
  )
}