'use client'

import BalanceCard, {
  primaryColors,
  secondaryColors
} from '@/components/BalanceCard'
import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'
import Sidebar from '@/components/Sidebar'
import styled from '@emotion/styled'
import clsx from 'clsx'

const DashboardContainer = styled('div')({
  display: 'grid'
})

const ContentContainer = styled('div')({
  padding: '20px'
})

export default function Home() {
  return (
    <MainLayout>
      <DashboardContainer
        className={clsx('grid-cols-1', 'md:grid-cols-[auto_1fr]')}
      >
        <Sidebar />
        <ContentContainer className={clsx('bg-[#FCFCFD]', 'md:p-8')}>
          <Header />
          <div
            className={clsx('grid grid-cols-1 gap-2', 'mt-8', 'md:grid-cols-2')}
          >
            <BalanceCard
              title="Akun Utama"
              balance={51000000}
              percentage={7.2}
              colors={primaryColors}
              arrayData={[12, 19, 3, 5]}
            />
            <BalanceCard
              title="Akun Sampingan"
              balance={250600}
              percentage={-20}
              colors={secondaryColors}
              arrayData={[12, 19, 3, 5]}
            />
          </div>
        </ContentContainer>
      </DashboardContainer>
    </MainLayout>
  )
}
