import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalancebox from '@/components/TotalBalancebox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const loggenIn = await getLoggedInUser()
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="welcome"
            user={loggenIn?.name || 'Guest'}
            subtext="Access to manage your accounts and transactions"
          />
          <TotalBalancebox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12350.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
       user={loggenIn}
       transactions={[]}
       banks={[{currentBalance:123.50}, {currentBalance: 152.23}]}
      />
    </section>
  )
}

export default Home