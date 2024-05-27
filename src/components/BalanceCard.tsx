import { currencyIDR } from '@/utils/helper'
import clsx from 'clsx'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import {
  IconArrowDown,
  IconArrowUp,
  IconDotsVertical
} from '@tabler/icons-react'
import IconButton from './IconButton'

ChartJS.register(ArcElement, Tooltip, Legend)

export const primaryColors = ['#2970FF', '#528BFF', '#84ADFF', '#D1E0FF']
export const secondaryColors = [
  '#4B5565',
  '#697586',
  '#9AA4B2',
  '#CDD5DF',
  '#EEF2F6'
]

const data = (colors = primaryColors, arrayData: number[]) => {
  return {
    datasets: [
      {
        label: '',
        data: arrayData,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }
    ]
  }
}

interface BalanceCardProps {
  title: string
  balance: number
  percentage: number
  colors?: string[]
  arrayData: number[]
}

const BalanceCard = ({
  title,
  balance,
  percentage,
  colors,
  arrayData
}: BalanceCardProps) => {
  const currentBalance = currencyIDR(balance)
  const isUpPercent = percentage > 0

  return (
    <div
      className={clsx(
        'p-4 border-2 border-[#E3E8EF] rounded-md',
        'grid grid-cols-[minmax(120px,1fr)] gap-6',
        'md:grid-cols-[120px_1fr]',
        'xl:grid-cols-[160px_1fr]'
      )}
    >
      <div className={clsx('w-full')}>
        <Doughnut
          data={data(colors, arrayData)}
          options={{
            cutout: '80%'
          }}
        />
      </div>
      <div className={clsx('flex flex-col justify-between')}>
        <div className={clsx('flex justify-between')}>
          <p className={clsx('font-medium xl:text-xl')}>{title}</p>
          <IconButton icon={<IconDotsVertical color="#9AA4B2" />} />
        </div>
        <div className={clsx('flex flex-col gap-2')}>
          <p className={clsx('text-[#697586] text-sm')}>Saldo saat ini</p>
          <div
            className={clsx(
              'flex flex-col items-start gap-2',
              'xl:flex-row xl:justify-between xl:items-center'
            )}
          >
            <p
              className={clsx(
                'text-xl font-medium text-ellipsis',
                'md:text-2xl',
                'xl:text-3xl'
              )}
            >
              {currentBalance}
            </p>
            <div
              className={clsx(
                'text-xs font-medium',
                'px-2 py-1 rounded-3xl',
                'flex items-center gap-1',
                isUpPercent
                  ? 'bg-[#E3FCEF] text-green-800'
                  : 'bg-[#FEECED] text-red-800'
              )}
            >
              {isUpPercent ? (
                <IconArrowUp color="#2ECC71" size={12} />
              ) : (
                <IconArrowDown color="#FF4757" size={12} />
              )}
              <p>
                <span>{percentage}</span>
                <span>%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceCard
