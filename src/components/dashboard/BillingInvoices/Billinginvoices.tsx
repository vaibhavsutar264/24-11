import React from 'react'
import Billingtable from './Billingtable'
import { Billingcards } from './Billingcards'
import { Actionelement } from './Actionelement'
import { BillingBreadcrum } from './BillingBreadcrum'

export const Billinginvoices = () => {
  return (
    <div className="dashboard__content">
      <BillingBreadcrum />
      <Billingcards />
      <Actionelement />
      <Billingtable />
    </div>
  )
}
