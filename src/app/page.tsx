'use client'

import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'
import Sidebar from '@/components/Sidebar'
import styled from '@emotion/styled'

const DashboardContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr'
})

const ContentContainer = styled('div')({
  padding: '32px'
})

export default function Home() {
  return (
    <MainLayout>
      <DashboardContainer>
        <Sidebar />
        <ContentContainer>
          <Header />
        </ContentContainer>
      </DashboardContainer>
    </MainLayout>
  )
}
