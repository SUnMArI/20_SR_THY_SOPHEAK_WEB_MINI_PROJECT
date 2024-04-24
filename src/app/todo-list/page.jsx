import NavbarComponent from '@/components/NavbarComponent'
import React from 'react'
import Image from 'next/image'
import SidebarComponent from '@/components/SidebarComponent'
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent'
function todoList() {
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
              <div className='h-[150px] relative rounded-md bg-amber-400 flex p-3 items-center justify-between' >

                <div className='flex gap-3 items-center justify-center '>

                 <div className='h-24 bg-white   w-24 rounded-xl flex flex-col justify-center items-center'>
                    <p className='text-2xl text-red-800'>Mon</p>
                    <p className='text-3xl '> 18</p>
                 </div>
                 <div>
                 <h3>Slack Integration</h3>
                  <p> Add a field int the poratal to let the user connent their Slack account</p>
                 </div>
                </div>
                
                <button className='bg-white rounded-lg h-10 absolute bottom-0 right-0 m-3 w-20 '>
                  Hello
                </button>
            
              </div>

            </div>

            <div className='  col-span-5'>
              <MonthlyStatisticsComponent/>
            </div>
          </div>




        </div>

      </div>
    </div>
  )
}
export default todoList



