'use client'

import styled from '@emotion/styled'
import {
  IconCheckbox,
  IconFlag,
  IconGraph,
  IconHome,
  IconLifebuoy,
  IconSettings,
  IconStackMiddle,
  IconUsers
} from '@tabler/icons-react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const Box = styled('div')({})

const LinkButton = styled('button')({
  padding: '12px',
  border: 'none',
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: '#F8FAFC'
  }
})

const DividerBottom = styled('hr')({
  border: 'none',
  borderBottom: '1px solid #E3E8EF'
})

const sidebarItems = [
  {
    name: 'Home',
    path: '/',
    icons: <IconHome color="#697586" />
  },
  {
    name: 'Statistics',
    path: '/stats',
    icons: <IconGraph color="#697586" />
  },
  {
    name: 'Stack',
    path: '/stack',
    icons: <IconStackMiddle color="#697586" />
  },
  {
    name: 'Checklist',
    path: '/checklist',
    icons: <IconCheckbox color="#697586" />
  },
  {
    name: 'Flag',
    path: '/flag',
    icons: <IconFlag color="#697586" />
  },
  {
    name: 'Users',
    path: '/users',
    icons: <IconUsers color="#697586" />
  }
]

const sidebarProfile = [
  {
    name: 'help',
    path: '/help',
    icons: <IconLifebuoy color="#697586" />
  },
  {
    name: 'Settings',
    path: '/settings',
    icons: <IconSettings color="#697586" />
  }
]

const Sidebar = () => {
  return (
    <Box
      className={clsx(
        'flex flex-col justify-between',
        'min-h-screen',
        'border-x-[1px] border-[#E3E8EF]'
      )}
    >
      <Box className={clsx('flex flex-col gap-2', 'pt-8 px-4')}>
        {sidebarItems.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <LinkButton>{item.icons}</LinkButton>
            </Link>
          )
        })}
      </Box>
      <Box className={clsx('flex flex-col gap-6', 'px-4 pb-6')}>
        <Box className={clsx('flex flex-col gap-2')}>
          {sidebarProfile.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <LinkButton>{item.icons}</LinkButton>
              </Link>
            )
          })}
        </Box>

        <DividerBottom />

        {/* User Profile */}
        <Box className={clsx('flex flex-col items-center')}>
          <Link href="/profile">
            <figure className="">
              <Image
                width={48}
                height={48}
                src="next.svg"
                alt="profile"
                className={clsx('w-12 h-12', 'p-1', 'rounded-full bg-gray-200')}
              />
            </figure>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
