import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalancebox from '@/components/TotalBalancebox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async ({ searchParams: {id, page} }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggenIn = await getLoggedInUser();
  const accounts = await getAccounts({userId: loggenIn.$id})

  if(!accounts) return;

  const accountsData = accounts?.data
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  const account = await getAccount({appwriteItemId})
  
  
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
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts = {accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
       user={loggenIn}
       transactions={accounts?.transactions}
       banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home