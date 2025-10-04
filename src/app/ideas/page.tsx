import { RootLayout } from '@/components/Layout/RootLayout'
import BottomNavigation from '@/components/Navigation/BottomNavigation'
import React from 'react'

const IdeasPage = () => {
  return (
    <RootLayout>
        <div className='container'>
            ideas
        </div>
        <BottomNavigation/>
    </RootLayout>
  )
}

export default IdeasPage