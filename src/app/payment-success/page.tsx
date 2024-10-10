export default function PaymentSuccess({
    searchParams: { amount },
  }: {
    searchParams: { amount: string };
  }) {
    return (
      <main className="w-full h-[100vh] px-[10%] py-[5%] text-white text-center border  rounded-md bg-[#b5865d]">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">You successfully paid</h2>
  
          <div className="bg-[#b5865d] p-2 rounded-md text-white mt-5 text-4xl font-bold">
            ${amount}
          </div>
        </div>
      </main>
    );
  }