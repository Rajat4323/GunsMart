import React from 'react'
import Link from "next/link"
import Header from '../../helpers/header'
const EmptyCard = () => {
  return (
    <>
    <Header />
    <div className="bg-[#e4e4e4] h-[100vh] w-full pt-20"> 
    <div className="lg:w-[70%] md:w-[90%] w-[95%] lg:pl-36 md:px-10 px-4 pt-8 mr-4 ">
      <div className="h-44 bg-white p-6  ">
        <h1 className="md:text-3xl bg-white text-2xl text-[#287480] font-semibold border-b-[1px] border-black pb- ">Your Guns-Mart Cart is empty.</h1>
        <h1 className="text-xl pt-2 bg-white text-black float-right  ">0 items</h1>
      </div>
     <Link href="../mainpage" className="md:m-8 my-8 ml-2   text-blue-500 hover:underline hover:text-blue-800 ">Visit the mainpage to buy some guns .</Link>
    </div>
    </div> 
    </>
  )
}

export default EmptyCard ;
