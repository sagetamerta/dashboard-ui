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
    <div className={clsx('flex flex-row gap-2')}>
      <div
        className={clsx(
          'flex flex-row',
          'border-2 border-border-gray rounded-xl'
        )}
      >
        {data.map((date, index) => {
          return (
            <Button
              key={index}
              variant={selectedDate === date.value ? 'contained' : 'text-only'}
              className={clsx(
                'px-4 py-2',
                'border-border-gray rounded-none',
                index === 0
                  ? 'border-r-2 rounded-l-lg'
                  : index === data.length - 1
                  ? 'border-r-0 rounded-r-lg'
                  : 'border-r-2'
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
