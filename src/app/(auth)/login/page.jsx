'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'


export default function page() {
  const router = useRouter();
  async function handleLoginForm(loginForm) {
    const userInfo = {
      email: loginForm.get('email'),
      password: loginForm.get("password")
    }
    const res = await signIn('credentials', {
      redirect: false,
      ...userInfo
    })
   
   if(res.ok == true){
    router.push("../todo-list")
   } 

  }
  return (
    <div className='w-full h-screen p-[100px] '>
      <Image src="/assets/icons/logo.svg" width={300} height={400} alt='logo' />

      <div className='p-16 flex flex-row  h-full justify-between items-center'>

        <div className='w-[700px] h-[700px]   '>
          <div class="  bg-gray-100  flex flex-col justify-center items-center ">

            <di v class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div class=" w-[600px]  py-8 px-4 sm:px-10">
                <form class="space-y-6" action={handleLoginForm} method="POST">
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div class="mt-1">
                      <input id="email" name="email" type="email" autocomplete="email" required
                        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your email address" />
                    </div>
                  </div>

                  <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div class="mt-1">
                      <input id="password" name="password" type="password" autocomplete="current-password" required
                        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your password" />
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="flex items-center ">
                      Don't have any account?

                    </div>
                    <Link href='/' className='text-blue-600'>Register</Link>


                  </div>

                  <div>
                    <button type="submit"
                      class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Sign in
                    </button>
                  </div>
                </form>
                <div class="mt-6">

                  <div class="relative">
                    <div class="my-12 border-b text-center">
                      <div
                        class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                        Or sign up with e-mail
                      </div>
                    </div>

                  </div>

                  <div class="mt-6 grid grid-cols-3 gap-3">
                    <div>
                      <a href="#"
                        class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img class="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                          alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="#"
                        class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img class="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                          alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="#"
                        class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img class="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                          alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </di>
          </div>
        </div>
        <div className='w-[700px] h-[700px]  flex justify-center items-center'>
          <Image src="/assets/icons/login.svg"
            width={500} height={1000} />
        </div>

      </div>


    </div>
  )
}
