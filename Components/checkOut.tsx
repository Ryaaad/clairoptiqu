import React from 'react'
import CheckoutCard from './checkoutCard';
import Link from 'next/link';

const checkOut=()=> {
  return (
    <div className={`bg-[#FDFDFD] mb-2 `}>
    <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-4">Checkout</h1>
    <div className="flex flex-col-reverse md:flex-row gap-5 bg-white p-2 md:p-4 lg:p-10">
        <div className="flex basis-[45%] flex-col gap-4 items-center justify-center p-2">
            <h3 className="self-start font-bold text-[20px] lg:text-[30px] text-[#4D4D81] pb-3">Détails de paiement</h3>
            <form action="" className="flex flex-col gap-10">
                <input className="py-2 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none" type="text" name="Nom" id="" placeholder="Nom" />
                <input className="py-2 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" name="" id="" placeholder="Prénom" />
                <input className="py-2 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" name="" id="" placeholder="Adresse" />
                <input className="py-2 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" name="" id="" placeholder="Numéro de téléphone" />
                <div className="pl-2 pt-5 flex gap-4 font-semibold text-[15px] lg:text-[22px]">
                   <Link href="http://localhost:3000"> <button className="text-[#4D4D81] border-2 px-4 py-1 lg:py-2 border-[#4D4D81] outline-none rounded-md">Back</button></Link>
                    <button className="text-white bg-[#4D4D81] px-[3px] py-2 lg:px-3 sm:py-2 border-2 border-[#4D4D81] outline-none rounded-md">Confirmer le paiement : 7253.21 DA</button>
                </div>
            </form>
        </div>
        <div className="rounded-lg flex flex-col items-center gap-5 bg-[#4D4D81] p-2 w-full sm:p-4 sm:basis-[56%]">
                <div className='flex flex-col items-center gap-5 w-full'>
                    {[1,2,3].map(card=>{
                        return <CheckoutCard/>
                    })}
                </div>
                <h3 className='text-white  lg:text-[36px] font-bold self-end'>Total : 7253.21 DA</h3>
        </div>   
     </div>
</div>
  )
}
export default checkOut