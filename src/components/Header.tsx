import styled from '@emotion/styled'
import {
  IconCalendar,
  IconCurrencyDollar,
  IconFilter
} from '@tabler/icons-react'
import clsx from 'clsx'
import React from 'react'
import Button from './Button'
import DateFilter from './DateFilter'

const Box = styled('div')({})

const Heading = styled('h1')({
  color: '#121926',
  fontSize: '30px',
  fontWeight: 500,
  letterSpacing: '-0.5px',
  lineHeight: 1.2
})

const Paragraph = styled('p')({
  color: '#697586',
  fontSize: '16px'
})

const dateList = [
  {
    label: '12 Bulan',
    value: 365
  },
  {
    label: '30 hari',
    value: 30
  },
  {
    label: '7 hari',
    value: 7
  },
  {
    label: '24 jam',
    value: 1
  }
]

const Header = () => {
  return (
    <Box>
      <Box
        className={clsx('flex flex-col justify-between gap-2', 'md:flex-row')}
      >
        <Box>
          <Heading>Dashboard Finansialmu</Heading>
          <Paragraph>Welcome back, Bro!</Paragraph>
        </Box>
        <Box className={clsx('flex flex-row gap-3 items-start')}>
          <Button variant="outlined" startIcon={<IconCurrencyDollar />}>
            Deposit
          </Button>
          <Button variant="contained">Kirim Uang</Button>
        </Box>
      </Box>
      <Box
        className={clsx(
          'mt-6',
          'flex flex-col justify-between gap-2',
          'md:flex-row'
        )}
      >
        <DateFilter data={dateList} />
        <Box className={clsx('flex flex-row gap-3')}>
          <Button variant="outlined" startIcon={<IconCalendar />}>
            Pilih tanggal
          </Button>
          <Button variant="outlined" startIcon={<IconFilter />}>
            Filter
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
