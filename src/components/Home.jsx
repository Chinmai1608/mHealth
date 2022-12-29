import React from 'react'

const Home = () => {
  return (
    <div class="h-screen w-screen bg-doctor bg-cover bg-center  ">
        <container class="">
            <span class="backdrop-blur-sm grid grid-cols-3 h-full w-screen ">
            <div class="flex justify-center my-28 pl-44">
                <div class="flex flex-col justify-center bg-white shadow-2xl bg-opacity-60 h-auto w-56 rounded-full">
                    <img src="https://thumbs.dreamstime.com/b/d-people-doctor-stethoscope-red-heart-illustration-white-white-background-54055876.jpg" class="mx-4 shadow-2xl cursor-pointer scale-100 hover:scale-110 mt-4 rounded-t-full h-52 w-48 "/>
                    <div class="font-serif text-3xl justify-evenly flex my-4 h-36 w-48 bg-red-300 bg-opacity-30 rounded-b-full mx-4 mt-0 pt-6 cursor-pointer">DOCTOR</div>
                </div>
                </div>
                <div class="flex justify-center my-28">
                <div class="flex flex-col justify-center bg-white shadow-2xl bg-opacity-60 h-auto w-56 rounded-full">
                    <img src="https://thumbs.dreamstime.com/b/d-morph-man-hospital-bed-respirator-render-178294987.jpg" class="mx-4 shadow-2xl cursor-pointer scale-100 hover:scale-110 mt-4 rounded-t-full h-52 w-48 "/>
                    <div class="font-serif text-3xl justify-evenly flex my-4 h-36 w-48 bg-blue-300 bg-opacity-30 rounded-b-full mx-4 mt-0 pt-6 cursor-pointer">PATIENT</div>
                </div>
                </div>
                <div class="flex justify-center my-28 pr-44">
                <div class="flex flex-col justify-center bg-white shadow-2xl bg-opacity-60 h-auto w-56 rounded-full">
                    <img src="https://as1.ftcdn.net/v2/jpg/00/24/12/32/1000_F_24123297_CLDf1w3AilUzIttjrl05ekWMehQYCRfE.jpg" class="mx-4 shadow-2xl cursor-pointer scale-100 hover:scale-110 mt-4 rounded-t-full h-52 w-48 "/>
                    <div class="font-serif text-3xl justify-evenly flex my-4 h-36 w-48 bg-green-300 bg-opacity-30 rounded-b-full mx-4 mt-0 pt-6 cursor-pointer">SUPPLIER</div>
                </div>
                </div>
            </span>
        </container>
    </div>
  )
}

export default Home