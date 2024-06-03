import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalancebox from '@/components/TotalBalancebox'
import React from 'react'

const Home = () => {
  const loggenIn = {firstName: 'Naira', lastName: 'Almelegy', email:'contact@gmail.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="welcome"
            user={loggenIn?.firstName || 'Guest'}
            subtext="Access to manage your accounts and transactions"
          />
          <TotalBalancebox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
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