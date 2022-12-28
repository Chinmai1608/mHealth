import React from 'react';

const Navbar = () => {
  return (
    <div>
      <navbar class="flex flex-row bg-slate-200">
        <div class="flex justify-between py-4 px-4 w-full">  
        <div class="flex-row flex justify-between w-full">
            <logo class="text-3xl ">LOGO</logo>
            <div class="flex justify-between ">
              <item2 class="text-xl px-3">aboutus</item2>
              <item3 class="text-xl px-3">features</item3>
            </div>
          </div>
        </div>
      </navbar>
    </div>
  )
}

export default Navbar