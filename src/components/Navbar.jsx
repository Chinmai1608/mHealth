import React from 'react';
import { ContactPage, Feed } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div>
      <navbar class="flex flex-row bg-dna bg-right-top  ">
        <div class="flex justify-between  w-full bg-gradient-to-r  from-white via-blue-50 to-transparent">  
        <div class="flex-row flex justify-between w-full pl-8">
            <logo class="text-4xl bg-logobg bg-cover h-24 w-24 px-2">
              <div class="mx-16 my-7 font-bold font-serif">  
                <div class=" "><sup class="text-2xl">M</sup>Health</div>
              </div>
            </logo>

            <div class="flex justify-between py-4 px-4 ">
              <item2 class="text-xl px-3 flex flex-col justify-center ">
                <div class="backdrop-blur-sm from-white via-white to-rose-50 py-2 px-3 rounded-full text-zinc-600">
                  <Feed class="w-7 h-7 fill-white cursor-pointer"/>
                </div>
              </item2>
              <item3 class="text-xl px-3 flex flex-col justify-center ">
              <div class="backdrop-blur-sm from-white via-white to-rose-50 py-2 px-3 rounded-full text-zinc-600">
                  <ContactPage class="w-7 h-7 fill-white cursor-pointer"/>
                </div>
              </item3>
            </div>
          </div>
        </div>
      </navbar>
      <hr class="border border-slate-300"/>
    </div>
  )
}

export default Navbar