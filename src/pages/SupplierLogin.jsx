import { Coronavirus, Medication } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'

const SupplierLogin = () => {
    const [show, setshow] = useState(false)

    const toggle=() => {
        setshow(!show)
    }
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
                <div>
                  Patient
                  <Coronavirus/>
                </div>
              </item2>
              <item3 class="text-xl px-3 flex flex-col justify-center ">
              <div>
                  Doctor
                  <Medication/>
                </div>
              </item3>
            </div>
          </div>
        </div>
      </navbar>

      <div class="bg-supplier h-screen w-screen bg-cover bg-center ">
       <div class="w-full h-full backdrop-blur-sm"> 
        <span class="grid grid-cols-2 ">
          <div></div>
          <div class=" flex flex-col justify-center h-screen font-serif text-center ">
            { (show === false)? 
                <div>              
                    <div>
                        <div class="text-4xl m-9 font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to-cyan-700">Login as Supplier</div>
                        <div class="flex flex-col">
                            <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='mHealth ID'/>
                            <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='Password'/>
                        </div>
                        <button class="rounded-full p-2 m-2  mx-auto w-fit bg-gradient-to-tr via-slate-100 font-bold hover:text-sky-900 hover:ring-sky-600 from-cyan-500 to-cyan-500 ring-1 ring-cyan-400  ">Let's Go</button>
                    </div>
                    <div onClick={toggle} class="text-lg hover:underline underline-offset-2 my-3">  
                         Don't have an Account ? Lets Create New One 
                    </div>
                </div>:
                <div>
                    <div class="flex flex-col">  
                        <div class="text-4xl m-9 font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to-cyan-700">Register as Supplier</div>           
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='Full Name'/>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='98765432XX'/>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='you@gmail.com'/>
                        <select class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  "
                        >
                            
                            <option>Hariom Medical</option>
                            <option>Wecare Medical</option>
                            <option>Hope Medical</option>
                            <option>Blessed Medical</option>
                        </select>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='Address'/>
                        <button class="rounded-full p-2 m-2  mx-auto w-fit bg-gradient-to-tr via-slate-100 font-bold hover:text-sky-900 hover:ring-sky-600 from-cyan-500 to-cyan-500 ring-1 ring-cyan-400  ">Let's Go</button>          
                    </div>
                    <div onClick={toggle} class="text-lg hover:underline underline-offset-2 my-3">
                      Login Instead 
                    </div>      
                </div>
            }  
          </div>
        </span>
       </div>
      </div>

    </div>
  )
}

export default SupplierLogin