import React from 'react';
import { Message, Person } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div>
      <navbar class="flex flex-row bg-transparent">
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
                  Aboutus
                  <Person/>
                </div>
              </item2>
              <item3 class="text-xl px-3 flex flex-col justify-center ">
              <div>
                  Features
                  <Message/>
                </div>
              </item3>
            </div>
          </div>
        </div>
      </navbar>
    </div>
  )
}

export default Navbar