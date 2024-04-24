import NavbarComponent from '@/components/NavbarComponent'
import React from 'react'
import SidebarComponent from '@/components/SidebarComponent'
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
function todoBoard() {
  return (

    <div className='w-full h-screen overflow-hidden '>
      <div className='  grid grid-cols-12  '>
        <div className='w-full h-full col-span-3    '>
          <SidebarComponent />
        </div>
        <div className='px-10 w-full h-full col-span-9 '>
          <NavbarComponent />

          <div className='py-10'>
            <ListBoardComponentHeader />
          </div>


          <div className=' grid grid-cols-12 gap-16'>
            <div className=' col-span-7  '>


              <div className='  bg-red-300'>
                <TodoCardComponent />
              </div>


              <div className='  bg-red-600'>

                <TodoCardComponent />
              </div>


            </div>

            <div className='  col-span-5'>
              <MonthlyStatisticsComponent />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default todoBoard



