'use client'

import BalanceCard, {
  primaryColors,
  secondaryColors
} from '@/components/BalanceCard'
import Button from '@/components/Button'
import Header from '@/components/Header'
import IconButton from '@/components/IconButton'
import MainLayout from '@/components/MainLayout'
import Sidebar from '@/components/Sidebar'
import { currencyIDR } from '@/utils/helper'
import styled from '@emotion/styled'
import {
  IconBrandMastercard,
  IconDotsVertical,
  IconRadar
} from '@tabler/icons-react'
import clsx from 'clsx'
import Image from 'next/image'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const dataBaru = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: '#004EEB'
    },
    {
      label: 'Dataset 2',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: '#2970FF'
    },
    {
      label: 'Dataset 3',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: '#84ADFF'
    }
  ]
}

const DashboardContainer = styled('div')({
  display: 'grid'
})

const ContentContainer = styled('div')({
  padding: '20px'
})

interface ChipItemProps {
  imageUrl: string
  title: string
  description: string
  dataValue: {
    is_positive: boolean
    value: string
  }
}

const ChipItem = ({
  imageUrl,
  title,
  description,
  dataValue
}: ChipItemProps) => (
  <div
    className={clsx(
      'flex flex-col justify-between items-start',
      'py-4',
      'md:flex-row md:items-center'
    )}
  >
    <div className={clsx('flex flex-row items-center gap-3')}>
      <figure
        className={clsx('w-16 p-2 border-2 border-border-gray rounded-md')}
      >
        <Image src={imageUrl} width={48} height={100} alt="logo" />
      </figure>
      <div>
        <p>{title}</p>
        <p className={clsx('text-[#697586]')}>{description}</p>
      </div>
    </div>
    <p
      className={clsx(
        dataValue.is_positive ? 'text-green-500' : 'text-red-500'
      )}
    >
      {dataValue.is_positive ? <span>+</span> : ''}
      <span>{dataValue.value}</span>
    </p>
  </div>
)

const depositData = [
  {
    imageUrl: 'vercel.svg',
    title: 'Visa',
    description: '**** **** **** 1234',
    value: -500000
  },
  {
    imageUrl: 'vercel.svg',
    title: 'Mastercard',
    description: '**** **** **** 5678',
    value: 1000000
  },
  {
    imageUrl: 'vercel.svg',
    title: 'Visa',
    description: '**** **** **** 1234',
    value: -500000
  },
  {
    imageUrl: 'vercel.svg',
    title: 'Mastercard',
    description: '**** **** **** 5678',
    value: 1000000
  },
  {
    imageUrl: 'vercel.svg',
    title: 'Visa',
    description: '**** **** **** 1234',
    value: -500000
  },
  {
    imageUrl: 'vercel.svg',
    title: 'Mastercard',
    description: '**** **** **** 5678',
    value: 1000000
  },
  {
    imageUrl: 'vercel.svg',
    title: 'Visa',
    description: '**** **** **** 1234',
    value: -500000
  },
  {
    imageUrl: 'vercel.svg',
    title: 'Mastercard',
    description: '**** **** **** 5678',
    value: 1000000
  }
]

const cardList = [
  {
    title: 'BCA',
    description: '**** **** **** 1234',
    imageUrl: 'vercel.svg',
    value: 1000000
  },
  {
    title: 'BNI',
    description: '**** **** **** 5678',
    imageUrl: 'vercel.svg',
    value: 500000
  }
]

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
            className={clsx('grid grid-cols-1 gap-2', 'mt-8', 'lg:grid-cols-2')}
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
          <div
            className={clsx(
              'grid grid-cols-1 gap-6',
              'mt-8',
              'md:grid-cols-[40%_58%]'
            )}
          >
            <div className={clsx('p-6 border-2 border-[#E3E8EF] rounded-md')}>
              <div
                className={clsx('flex flex-row justify-between items-center')}
              >
                <p className={clsx('font-medium text-lg')}>Deposit Terakhir</p>
                <IconButton icon={<IconDotsVertical color="#9AA4B2" />} />
              </div>
              <div className={clsx('flex flex-col')}>
                {depositData.map((data, index) => {
                  const dataValue = {
                    is_positive: data.value > 0,
                    value: currencyIDR(data.value)
                  }
                  return (
                    <div key={index}>
                      <ChipItem
                        title={data.title}
                        description={data.description}
                        imageUrl={data.imageUrl}
                        dataValue={dataValue}
                      />
                      {index === depositData.length - 1 ? null : (
                        <hr
                          className={clsx(
                            'border-[1px] border-[#E3E8EF]',
                            'my-2'
                          )}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
              <Button variant="text-only">Show more</Button>
            </div>
            <div className={clsx('flex flex-col gap-6')}>
              <div className={clsx('p-4 border-2 border-[#E3E8EF] rounded-md')}>
                <div
                  className={clsx('flex flex-row justify-between items-center')}
                >
                  <p className={clsx('font-medium text-lg')}>
                    Balance sepanjang waktu
                  </p>
                  <IconButton icon={<IconDotsVertical color="#9AA4B2" />} />
                </div>
                <Bar data={dataBaru} options={options} />
              </div>
              <div className={clsx('border-2 border-[#E3E8EF] rounded-md')}>
                <div
                  className={clsx(
                    'p-4 flex flex-row justify-between items-center'
                  )}
                >
                  <p className={clsx('font-medium text-lg')}>Kartu Anda</p>
                  <IconButton icon={<IconDotsVertical color="#9AA4B2" />} />
                </div>
                <div
                  className={clsx(
                    'flex flex-row gap-6 overflow-auto',
                    'mx-4 mb-6'
                  )}
                >
                  {cardList.map((_, cardId) => {
                    return (
                      <div key={cardId} className={clsx('min-w-[360px]')}>
                        <div
                          className={clsx(
                            'rounded-3xl p-5 bg-blue-700 min-h-[200px]',
                            'flex flex-col justify-between'
                          )}
                        >
                          <div className={clsx('flex justify-between')}>
                            <p className={clsx('text-white')}>BCA</p>
                            <IconRadar color="#fff" />
                          </div>
                          <div className={clsx('flex flex-col')}>
                            <div
                              className={clsx(
                                'grid grid-cols-[1fr_35px_43px] items-center'
                              )}
                            >
                              <div
                                className={clsx(
                                  'text-sm text-white font-medium',
                                  'flex flex-row justify-between'
                                )}
                              >
                                <p>SAGET</p>
                                <p>04/27</p>
                              </div>
                              <div></div>
                              <div></div>
                            </div>
                            <div
                              className={clsx(
                                'grid grid-cols-[1fr_35px_43px] items-center'
                              )}
                            >
                              <div className={clsx('text-white')}>
                                <p
                                  className={clsx(
                                    'text-xl',
                                    'flex justify-between'
                                  )}
                                >
                                  <span>4821</span> <span>1234</span>{' '}
                                  <span>4821</span> <span>1234</span>
                                </p>
                              </div>
                              <div></div>
                              <div>
                                <IconBrandMastercard size={43} color="#fff" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={clsx('flex justify-between', 'mt-4')}>
                          <p>Pengeluaran bulan ini</p>
                          <p className={clsx('text-[#697586]')}>Rp2.190.000</p>
                        </div>
                        <div
                          className={clsx(
                            'w-full mt-2 h-2 rounded-md bg-[#EFF4FF]',
                            'relative overflow-hidden',
                            'after:absolute after:bg-[#004EEB] after:w-[15%] after:h-full after:rounded-md'
                          )}
                        ></div>
                      </div>
                    )
                  })}
                </div>
                <hr className={clsx('border-[1px] border-[#E3E8EF]', 'my-2')} />
                <div className={clsx('flex justify-end py-4 px-6')}>
                  <Button variant="outlined">Pengaturan kartu</Button>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </DashboardContainer>
    </MainLayout>
  )
}
