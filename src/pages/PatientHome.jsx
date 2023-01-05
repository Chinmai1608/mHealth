import React from 'react'
import Upcap from '../components/Upcap'

const PatientHome = () => {
  return (
    <div class="bg-gradient-to-r from-slate-300 via-blue-50 to-slate-300 mt-0">      
        <div class="h-1/3 m-4 flex flex-row ">
            <div class="w-1/4"><img class="m-2 "/></div>
            <div class="w-3/4 flex flex-col">
                <div class="flex"><p class="font-bold mx-2">Name :</p> Dwayn Johnson</div>
                <div class="flex"><p class="font-bold mx-2">Contact :</p> 8961234XXX</div>
                <div class="flex"><p class="font-bold mx-2">Email :</p> Johnsond34@gmail.com</div>
                <div class="flex"><p class="font-bold mx-2">Address :</p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dignissimos!</div>
                <div class="flex"><p class="font-bold mx-2">mHealth ID :</p> P101</div>

            </div>
        </div>
        <div>
            <div class="grid grid-cols-3 mx-20 my-10 font-bold font-serif">
                <div class="m-auto w-64 text-center shadow-md shadow-slate-700 flex flex-row justify-center h-72 bg-center rounded-3xl bg-dvisit">
                    <div class="bg-slate-50 bg-opacity-60 h-full w-full mx-5 flex flex-col justify-center text-3xl cursor-pointer">
                        <div class="text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-cyan-700 to-slate-900">VISIT DOCTOR</div>
                    </div>
                </div>
                <div class="m-auto w-64 text-center shadow-md shadow-slate-700 flex flex-row justify-center h-72 bg-center rounded-3xl bg-svisit">
                    <div class="bg-slate-50 bg-opacity-60 h-full w-full mx-5 flex flex-col justify-center text-3xl cursor-pointer">
                        <div class="text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-cyan-700 to-slate-900">VISIT SUPPLIER</div>
                    </div>
                </div>
                <div class="m-auto w-64 text-center shadow-md shadow-slate-700 flex flex-row justify-center h-72 bg-center rounded-3xl bg-hr">
                    <div class="bg-slate-50 bg-opacity-60 h-full w-full mx-5 flex flex-col justify-center text-3xl cursor-pointer">
                        <div class="text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-cyan-700 to-slate-900">CHECK MY HEART RATE</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 px-16">
           <Upcap/>
        </div>

      
    </div>
  )
}

export default PatientHome