import { useState } from 'react'
import Header from '../components/Header'
import PaymentForm from '../components/PaymentForm'
import PaymentResult from '../components/PaymentResult'

export default function Dashboard() {
  const [payment, setPayment] = useState(null)

  return (
    <div className="container">
      <Header />
      <div className="grid">
        <PaymentForm setPayment={setPayment} />
        <PaymentResult payment={payment} />
      </div>
    </div>
  )
}