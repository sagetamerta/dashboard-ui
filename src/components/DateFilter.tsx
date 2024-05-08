import clsx from 'clsx'
import Button from './Button'
import React from 'react'
import { IconSquareRoundedX } from '@tabler/icons-react'

interface DateFilterProps {
  data: { label: string; value: number }[]
}

const DateFilter: React.FC<DateFilterProps> = ({ data }) => {
  const [selectedDate, setSelectedDate] = React.useState<number | null>(null)
  return (
    <div className={clsx('flex flex-row')}>
      <div className={clsx('flex flex-row')}>
        {data.map((date, index) => {
          return (
            <Button
              key={index}
              variant={selectedDate === date.value ? 'contained' : 'text-only'}
              className={clsx(
                'border border-border-gray rounded-none',
                index === 0 && 'rounded-l-lg',
                index === data.length - 1 && 'rounded-r-lg'
              )}
              onClick={() => setSelectedDate(date.value)}
            >
              {date.label}
            </Button>
          )
        })}
      </div>
      {selectedDate && (
        <Button
          variant="text-only"
          startIcon={<IconSquareRoundedX size={16} />}
          onClick={() => setSelectedDate(null)}
        ></Button>
      )}
    </div>
  )
}

export default DateFilter
