import { AddAPhoto, Medication, Sick } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'

const SupplierLogin = () => {
    const [show, setshow] = useState(false)

    const toggle=() => {
        setshow(!show)
    }
  return (
    <div>
         <navbar class="flex flex-row bg-dna bg-right-top  ">
        <div class="flex justify-between  w-full bg-gradient-to-r  from-white via-blue-50 to-transparent">  
        <div class="flex-row flex justify-between w-full pl-8">
            <logo class="cursor-pointer text-4xl bg-logobg bg-cover h-24 w-24 px-2">
              <div class="mx-16 my-7 font-bold font-serif">  
                <div class="cursor-pointer"><sup class="text-2xl">M</sup>Health</div>
              </div>
            </logo>

            <div class="flex justify-between py-4 px-4 ">
              <item2 class="text-xl px-3 flex flex-col justify-center ">
                <div class="backdrop-blur-sm from-white via-white to-rose-50 py-2 px-3 rounded-full text-zinc-600">
                  <Medication class="cursor-pointer w-7 h-7 fill-white"/>
                </div>
              </item2>
              <item3 class="text-xl px-3 flex flex-col justify-center ">
              <div class="backdrop-blur-sm from-white via-white to-rose-50 py-2 px-3 rounded-full text-zinc-600">
                  <Sick class="cursor-pointer w-7 h-7 fill-white"/>
                </div>
              </item3>
            </div>
          </div>
        </div>
      </navbar>
      <hr class="border border-slate-300"/>

      <div class="bg-supplier h-screen w-screen bg-cover bg-center ">
       <div class="w-full h-full backdrop-blur-sm"> 
        <span class="grid grid-cols-2 ">
          <div></div>
          <div class=" flex flex-col justify-center h-screen font-serif text-center ">
            { (show === false)? 
                <div>              
                    <div>
                        <div class="cursor-default text-4xl m-9 font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to-cyan-700">Login as Supplier</div>
                        <div class="flex flex-col">
                            <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='mHealth ID'/>
                            <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='Password'/>
                        </div>
                        <button class="rounded-full p-2 m-2  mx-auto w-fit bg-gradient-to-tr via-slate-100 font-bold hover:text-sky-900 hover:ring-sky-600 from-cyan-500 to-cyan-500 ring-1 ring-cyan-400  ">Let's Go</button>
                    </div>
                    <div onClick={toggle} class="cursor-pointer text-lg hover:underline underline-offset-2 my-3">  
                         Don't have an Account ? Lets Create New One 
                    </div>
                </div>:
                <div>
                    <div class="flex flex-col">  
                        <div class="cursor-default text-4xl m-9 font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to-cyan-700">Register as Supplier</div>           
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='Full Name'/>
                        <div class="relative rounded-full flex p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400">  
                          <input type='file' />
                        
                        <AddAPhoto class="h-7 w-7 absolute right-3 pb-1"/>
                        </div>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='98765432XX'/>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='you@gmail.com'/>
                        <div class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  ">   
                          <select class="bg-opacity-0 w-full bg-slate-50 "
                          >
                            <option disabled selected>Medical Store</option>
                              <option>Hariom Medical</option>
                              <option>Wecare Medical</option>
                              <option>Hope Medical</option>
                              <option>Blessed Medical</option>
                          </select>
                        </div>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-cyan-600 bg-slate-50 ring-1 ring-cyan-400  " placeholder='Address'/>
                        <button class="rounded-full p-2 m-2  mx-auto w-fit bg-gradient-to-tr via-slate-100 font-bold hover:text-sky-900 hover:ring-sky-600 from-cyan-500 to-cyan-500 ring-1 ring-cyan-400 shadow-lg active:shadow-inner ">Let's Go</button>          
                    </div>
                    <div onClick={toggle} class="cursor-pointer text-lg hover:underline underline-offset-2 my-3">
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