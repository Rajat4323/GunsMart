"use client"
import React,{useEffect} from 'react';
import Data from './Data';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const CardSection:any = () => {
 const  router = useRouter();
 const handleClick =  async (d: any) =>
  {
    try {
      const response = await axios.post("../api/card", d )
      router.push(`/itempage/${d}`);
      
    } catch (error:any) {
      console.log("Process failed", error.message);
  } 
  }
     
  return (
    <div className="h-auto bg-black w-full flex md:py-32 py-0 xl:px-32 px-4 gap-6 justify-center flex-wrap ">
      {Data?.slice(0,6).map((x) => (
        <div key={x.id} onClick={() => handleClick(x.id)} className="w-[400px] h-[393px]
        hover:cursor-pointer bg-white border-white border-[1px] 
        mb-4 ">
          <h1 className='text-lg bg-black p-2'>{x.name}</h1>
          <Image
            src = {x.image}
            alt ={x.name}
            width={350}
            height={280}
            className="w-[350px] h-[299px] object-fill bg-center  bg-white "        />
          <div className="flex  bg-white  flex-row">
          <h1 
          className='text-2xl bg-black pl-4 p-2 text-[#b5865d] font-bold '>
          {x.salePrice}
          </h1>
          <h1 
          className='text-lg text-center pt-3 bg-black pl-2 p-2 pr-2 
          text-[#b5865d] font-bold line-through '>
            {x.retailPrice}
          </h1>
            </div>
        </div>
      ))}
    </div>
  )}