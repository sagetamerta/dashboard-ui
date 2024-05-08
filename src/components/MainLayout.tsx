'use client'

import styled from '@emotion/styled'
import { FC } from 'react'

const MainBox = styled('main')({
  margin: '0 auto'
})

interface Props {
  children: React.ReactNode
  className?: string
}

const MainLayout: FC<Props> = ({ children, className }) => {
  return <MainBox className={className}>{children}</MainBox>
}

export default MainLayout
