'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import { registerService } from '@/app/service/login.service';
export default function register() {


  const router = useRouter();
  async function handleRegisterForm(registerForm) {

    const data = {
      firstname: registerForm.get('fname'),
  lastname: registerForm.get('lname'),
  gender: registerForm.get('gender'),
  profile_url: registerForm.get('moblie'),
  email: registerForm.get('email'),
  password: registerForm.get('password')
    }
    console.log("fname",registerForm.get('fname'));
    const res = await registerService(data);
    console.log(res);
  }
  return (

    <div className='w-full h-screen p-[80px] '>
      <Image src="/assets/icons/logo.svg" width={300} height={400} />

      <div className='p-16 flex flex-row  h-full justify-between items-center'>
        <div className='w-[750px] h-[750px]  flex justify-center items-center ' >
          <form action={handleRegisterForm} method='POST' className=' grid grid-cols-2 gap-10 w-full '>
            <div>
              <label for='fname' className='text-xl'>First Name</label>
              <input type="text" name='fname' id='fname' class="appearance-none rounded-md h-[50px] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-slate-100" placeholder="Frist Name" />
            </div>

            <div>
              <label className='text-xl'>Last Name</label>
              <input type="text" name='lname' class="appearance-none bg-slate-100 rounded-md h-[50px] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
            </div>

            <div>
              <label className='text-xl'>Email</label>
              <input type="email" name='email' class="appearance-none rounded-md relative bg-slate-100  h-[50px] block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder='example@gmail.com' />
            </div>

            <div>
              <label className='text-xl'>Mobile No:</label>
              <input type="password" name='mobile' class="appearance-none rounded-md bg-slate-100 h-[50px] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder='+91-98596 58000' />
            </div>

            <div>
              <label className='text-xl'>Password</label>
              <input type="password" name='password' class="appearance-none rounded-md bg-slate-100 h-[50px] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder='xxxxxxxx' />
            </div>

            <div>
              <label className='text-xl'>Confirm Password</label>
              <input type="password" name='cPassword' class="appearance-none h-[50px] bg-slate-100 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder='xxxxxxxx' />
            </div>
            <div className=' col-span-2'>
              <button type="submit" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold w-44 py-2 px-4 rounded span">
                Sign Up
              </button>
            </div>

          </form>
        </div>
        <div className='w-[750px] h-[750px]  flex justify-center items-center '>
          <Image src="/assets/icons/sign-up.svg"
            width={500} height={1000} />
        </div>
      </div>
    </div>
  )
}