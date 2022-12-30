import { Medication, Sell } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'

const PatientLogin = () => {
 // const [register, setregister] = useState(false)
 // register={
 //   
 // }
  return (
    <div>
        <navbar class="flex flex-row bg-gradient-to-tr from-white via-white to-rose-100">
        <div class="flex justify-between  w-full">  
        <div class="flex-row flex justify-between w-full pl-8">
            <logo class="text-4xl bg-logobg bg-cover h-24 w-24 px-2">
              <div class="mx-16 my-7 font-bold font-serif">  
                <div class=" bg-clip-text bg-gradient-to-b from-red-700 to-red-600 "><sup class="text-2xl">M</sup>Health</div>
              </div>
            </logo>

            <div class="flex justify-between py-4 px-4 ">
              <item2 class="text-xl px-3 flex flex-col justify-center ">
                <div class="bg-gradient-to-b from-white via-white to-rose-50 py-2 px-3 rounded-full text-zinc-600">
                  Doctor 
                  <Medication/>
                </div>
              </item2>
              <item3 class="text-xl px-3 flex flex-col justify-center ">
              <div>
                  Supplier
                  <Sell/>
                </div>
              </item3>
            </div>
          </div>
        </div>
      </navbar>

      <div class="bg-patient h-screen w-screen bg-cover bg-center ">
       <div class="w-full h-full backdrop-blur-sm"> 
        <span class="grid grid-cols-2 ">
          <div></div>
          <div class="flex flex-col justify-center h-screen font-serif text-center ">
            <div class="text-4xl m-9 font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-fuchsia-900">Login as Patient</div>
            <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-rose-50 ring-1 ring-red-400  " placeholder='mHealth ID'/>
            <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-rose-50 ring-1 ring-red-400  " placeholder='Password'/>
            <button class="rounded-full p-2 m-2  mx-auto w-fit bg-gradient-to-tr via-rose-100 font-bold hover:text-fuchsia-900 hover:ring-fuchsia-600 from-red-400 to-red-400 ring-1 ring-red-400  ">Let's Go</button>
            <div class="text-lg hover:underline underline-offset-2"> Don't have an Account ? 
            Lets Create New One </div>
            <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-rose-50 ring-1 ring-red-400  " placeholder=''/>
            <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-rose-50 ring-1 ring-red-400  " placeholder=''/>
            <button></button>
          </div>
        </span>
       </div>
      </div>
    </div>
  )
}

export default PatientLogin