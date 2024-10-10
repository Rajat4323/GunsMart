"use client";
import Loader from "@/helpers/loader";
import React, { useState, useEffect } from "react";
import CheckoutPage from "@/app/checkout/checkoutpage";
import convertToSubcurrency from "@/helpers/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from 'next/navigation';
import "./checkout.css" ;
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const saleTotal = query.get('saleTotal');
    if (saleTotal) {
      setAmount(Number(saleTotal));
    }
  }, []);
  if(!amount){
    return <Loader/>
  }
  return (
    <main className="w-full h-[100vh]  px-[10%] py-[5%] text-white text-center border  rounded-md bg-[#b5865d]">
      <div className="mb-10 bg-[#b5865d]">
        <h1 className="text-4xl font-extrabold mb-2 bg-[#b5865d] ">Gunsmart</h1>
        <h2 className="text-2xl bg-[#b5865d]">
          has requested
          <span className="font-bold  bg-[#b5865d] "> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
