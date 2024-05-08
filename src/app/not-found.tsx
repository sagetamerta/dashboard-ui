import Button from '@/components/Button'
import MainLayout from '@/components/MainLayout'
import { IconHome } from '@tabler/icons-react'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <MainLayout className={clsx('min-h-screen')}>
      <div className="flex flex-col items-center justify-center text-center h-screen">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-3xl mt-4 text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist.
        </p>
        <div
          className={clsx('mt-4', 'flex flex-col justify-center items-center')}
        >
          <p className="text-gray-500 mb-2">Please return to the home page.</p>
          <Link href="/">
            <Button startIcon={<IconHome />}>Go Home</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default NotFoundPage
