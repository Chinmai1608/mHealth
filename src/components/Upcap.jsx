import React from 'react'
import { Add, Star, StarBorder } from '@material-ui/icons'
import { useState } from 'react'

const Upcap = () => {
    const [rate5, setrate5] = useState(false)
    const [rate4, setrate4] = useState(false)
    const toggle = () => {
    setrate5(!rate5)
    }
    const four = () => {
        setrate4(!rate4)
    }
    return (
    
    <div>
        <div class="flex">
            <div class="border border-cyan-200 m-1 py-2 bg-blue-200 text-center font-bold">PAST APPOINMENTS:-</div>
            <Add class="w-6 h-6 flex justify-end border border-cyan-200 bg-blue-200"/>
        </div>
         <table class="table-auto w-full border border-separate border-cyan-200 mt-2 p-1">
                {/* <thead><tr><th>PAST APPOINMENTS</th></tr></thead> */}
                <thead>
                    <tr>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">SrNo.</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">Problem</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">Doctor</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">ID</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">Medicine</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">additional task</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">Checkup Fees</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">Medicine Bill</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">Total Bill</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200 w-28">Payment</th>
                        <th class="border border-cyan-200 m-1 py-2 bg-blue-200">Make a Reveiw</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">1</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Common Cold</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Charvi Patil</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">D101</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Cipla</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Gargling with salted water</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.75/-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.120/-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.195/-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-gradient-to-b from-red-500 to-red-300 hover:to-red-400 cursor-pointer rounded-lg  ">Pay Now</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50">
                            <div class="flex justify-center">
                            {(rate4 === false)? <div>
                                    <StarBorder onClick={four} class="h-5 w-5"/>
                                </div>:
                                <div class="flex">
                                <Star class="h-5 w-5 fill-yellow-500"/>
                                <Star class="h-5 w-5 fill-yellow-500"/>
                                <Star class="h-5 w-5 fill-yellow-500"/>
                                <Star onClick={four} class="h-5 w-5 fill-yellow-500"/>
                                <StarBorder class="h-5 w-5"/>
                                </div>
                                
                                }
                               {(rate5 === false)? <div class="flex">
                                <StarBorder onClick={toggle} class="h-5 w-5"/>
                               </div>:
                               <div class="flex">
                                <Star class="h-5 w-5 fill-yellow-500"/>
                                <Star class="h-5 w-5 fill-yellow-500"/>
                                <Star class="h-5 w-5 fill-yellow-500"/>
                                <Star onClick={four} class="h-5 w-5 fill-yellow-500"/>
                                <Star onClick={toggle} class="h-5 w-5 fill-yellow-500"/>
                               </div>
                            }
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">2</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Migraine</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Avinash Chaudhari</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">D106</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Nise</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Reduce Screen Time</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.60/-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.100/-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.160/-</td>
                        <td class="border border-cyan-200 text-center py-0 bg-gradient-to-b from-green-600 to-green-300 hover:to-green-400 cursor-pointer rounded-lg text-sm">Payment Successful</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50">
                            <div class="flex justify-center">
                                <StarBorder class="h-5 w-5"/>
                            <StarBorder class="h-5 w-5"/>
                            <StarBorder class="h-5 w-5"/>
                            <StarBorder class="h-5 w-5"/>
                            <StarBorder class="h-5 w-5"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">3</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Fever</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Fatima</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">D103</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Paracetamol </td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.40/-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.125/-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50 cursor-default">Rs.165/-</td>
                        <td class="border border-cyan-200 text-center py-2 bg-gradient-to-b from-red-500 to-red-300 hover:to-red-400 cursor-pointer rounded-lg  ">Pay Now</td>
                        <td class="border border-cyan-200 text-center py-2 bg-sky-50">
                            <div class="flex justify-center">
                                <StarBorder class="h-5 w-5"/>
                            <StarBorder class="h-5 w-5"/>
                            <StarBorder class="h-5 w-5"/>
                            <StarBorder class="h-5 w-5"/>
                            <StarBorder class="h-5 w-5"/>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
    </div>
  )
}

export default Upcap