import { AddAPhoto, ArrowCircleLeft, ArrowCircleRight, Medication, Sell } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'

const PatientLogin = () => {
  const [show, setshow] = useState(false)
  const [next, setnext] = useState(false)

  const toggle = () => {
    setshow(!show)
  }
  const tog = () => {
    setnext(!next)
  }
  return (
    <div>
        <navbar class="flex flex-row bg-dna bg-right-top  ">
        <div class="flex justify-between  w-full bg-gradient-to-r  from-white via-blue-50 to-transparent">  
        <div class="flex-row flex justify-between w-full pl-8">
            <logo class="cursor-pointer text-4xl bg-logobg bg-cover h-24 w-24 px-2">
              <div class="mx-16 my-7 font-bold font-serif">  
                <div class="cursor-pointer "><sup class="text-2xl">M</sup>Health</div>
              </div>
            </logo>

            <div class="flex justify-between py-4 px-4 ">
              <item2 class="text-xl px-3 flex flex-col justify-center ">
                <div class="backdrop-blur-sm from-white via-white to-rose-50 py-2 px-3 rounded-full text-zinc-600">
                  <Medication class="w-7 h-7 fill-white cursor-pointer"/>
                </div>
              </item2>
              <item3 class="text-xl px-3 flex flex-col justify-center ">
              <div class="backdrop-blur-sm from-white via-white to-rose-50 py-2 px-3 rounded-full text-zinc-600">
                  <Sell class="w-7 h-7 fill-white cursor-pointer"/>
                </div>
              </item3>
            </div>
          </div>
        </div>
      </navbar>
      <hr class="border border-slate-300"/>

      <div class="bg-patient h-screen w-screen bg-cover bg-center ">
       <div class="w-full h-full backdrop-blur-sm"> 
        <span class="grid grid-cols-2 ">
          <div></div>
          <div class="flex flex-col justify-center h-screen font-serif text-center ">
            {(show === false)?
              <div>
                <div>  
                  <div class="cursor-default text-4xl m-9 font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-fuchsia-900">Login as Patient</div>
                  <div class="flex flex-col">  
                    <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuhsiaaccent-fuchsia-600-600 bg-rose-50 ring-1 ring-red-400  " placeholder='mHealth ID'/>
                    <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuhsiaaccent-fuchsia-600-600 bg-rose-50 ring-1 ring-red-400  " placeholder='Password'/>
                  </div>
                  <button class="rounded-full p-2 m-2  mx-auto w-fit bg-gradient-to-tr via-rose-100 font-bold hover:text-fuchsia-900 hover:ring-fuchsia-600 from-red-400 to-red-400 ring-1 ring-red-400 shadow-lg active:shadow-inner ">Let's Go</button>
                </div>
                <div onClick={toggle} class="cursor-pointer text-lg hover:underline underline-offset-2"> 
                     Don't have an Account ? Lets Create New One 
                </div>
              </div>
              :<div>
                <div class="flex flex-col">  
                  <div class="cursor-default text-4xl m-9 font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-fuchsia-900">Register as Patient</div>           
                  {(next===false)?
                    <div>  
                      <div class="flex flex-col">  
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-slate-50 ring-1 ring-red-400  " placeholder='Full Name'/>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-slate-50 ring-1 ring-red-400  " placeholder='98765432XX'/>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-slate-50 ring-1 ring-red-400  " placeholder='you@gmail.com'/>
                        <div class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-slate-50 ring-1 ring-red-400  ">   
                          <select class="bg-opacity-0 w-full bg-slate-50 "
                          >
                            <option disabled selected>Blood Group</option>
                              <option>A +ve</option>
                              <option>B +ve</option>
                              <option>AB +ve</option>
                              <option>O +ve</option>
                              <option>A -ve</option>
                              <option>B -ve</option>
                              <option>AB -ve</option>
                              <option>O -ve</option>
                          </select>
                        </div>
                        <div class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-slate-50 ring-1 ring-red-400  ">   
                          <select class="bg-opacity-0 w-full bg-slate-50 "
                          >
                            <option disabled selected>Gender</option>
                              <option>Female</option>
                              <option>Male</option>
                              <option>Transgender</option>
                          </select>
                        </div>
                      </div>
                      <div>
                      <ArrowCircleRight onClick={tog} class="cursor-pointer w-7 h-7 mx-auto fill-fuchsia-100 shadow-lg active:shadow-inner "/>    
                      </div>
                    </div>:
                    <div>
                      <div class="flex flex-col">
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-slate-50 ring-1 ring-red-400  " placeholder='Address'/>
                        <input class="rounded-full p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-slate-50 ring-1 ring-red-400  " placeholder='Any Permanent Disease'/>
                        <div class="text-sm">*if any Upload Reports</div>
                        <div class="relative rounded-full flex p-2 m-2 pl-6 mx-auto w-1/2 bg-opacity-50 placeholder-neutral-600 accent-fuchsia-600 bg-slate-50 ring-1 ring-red-400">  
                          <input type='file' />                
                        <AddAPhoto class="h-7 w-7 absolute right-3 pb-1"/>
                        </div>  
                        <div>
                        <ArrowCircleLeft onClick={tog} class="cursor-pointer w-7 h-7 mx-auto fill-fuchsia-100 shadow-lg active:shadow-inner "/>          
                        </div>                            
                        <button class="rounded-full p-2 m-2  mx-auto w-fit bg-gradient-to-tr via-slate-100 font-bold hover:text-fuchsia-900 hover:ring-fuchsia-600 from-red-400 to-red-400 ring-1 ring-red-400 shadow-lg active:shadow-inner ">Create Profile</button>          
                      </div>
                      
                    </div>
                  }  
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

export default PatientLogin