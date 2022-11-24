import React from 'react'
import { Header } from './layout/Header'
import { Billinginvoices } from './BillingInvoices/Billinginvoices'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard__wrapper">
        <Header />
        <Billinginvoices />
      </div>
    </>
  )
}

export default Dashboard
