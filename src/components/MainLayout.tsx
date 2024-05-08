'use client'

import styled from '@emotion/styled'
import { FC } from 'react'

const MainBox = styled('main')({
  margin: '0 auto'
})

interface Props {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return <MainBox>{children}</MainBox>
}

export default MainLayout
