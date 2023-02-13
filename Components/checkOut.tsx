import React from 'react'
import CheckoutCard from './checkoutCard';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const checkOut=()=> {
    const direction=useSelector((state:any)=>state.main.dir)
    const Translation=useSelector((state:any)=>state.main.Lang.Checkout)
    const TranslationTotal=useSelector((state:any)=>state.main.Lang.Pannier.Total)
    const Shpoped=useSelector((state:any)=>state.Shop.ShopedItems)
    const Total=useSelector((state:any)=>state.Shop.Total)
    const currency=useSelector((state:any)=>state.main.Lang.Money)

  return (
    <div className={`bg-[#FDFDFD] mb-2 `} >
    <h1 className="text-[#E00409] text-[32px] font-semibold text-center p-4">{Translation.Title}</h1>
    <div className={`flex flex-col-reverse ${direction ? "md:flex-row" : "md:flex-row-reverse"} gap-5 bg-white p-2 md:p-4 lg:p-10`}>
        <div className="flex basis-[45%] flex-col gap-4 items-center justify-center p-2">
            <h3 className="self-start font-bold text-[20px] lg:text-[30px] text-[#4D4D81] pb-3">{Translation.Détails}</h3>
            <form action="" className="flex flex-col gap-10">
                <input className="py-2 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none" type="text" placeholder={Translation.Nom} name ="Nom" />
                <input className="py-2 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" placeholder={Translation.Prenom}  name="Prénom" />
                <input className="py-2 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" placeholder={Translation.Adresse} name="Adresse" />
                <input className="py-2 text-[#4D4D81C9] border-b-[1px] border-b-[#4D4D81] outline-none " type="text" placeholder={Translation.Phone} name="Numéro de téléphone" />
                <div className="pl-2 pt-5 flex gap-4 font-semibold text-[15px] lg:text-[22px]">
                   <Link href="http://localhost:3000"> <button className="text-[#4D4D81] border-2 px-4 py-1 lg:py-2 border-[#4D4D81] outline-none rounded-md">{Translation.Return}</button></Link>
                    <button className="text-white bg-[#4D4D81] px-[3px] py-2 lg:px-3 sm:py-2 border-2 border-[#4D4D81] outline-none rounded-md">{Translation.ConfirmBTN} 7253.21 DA</button>
                </div>
            </form>
        </div>
        <div className="rounded-lg flex flex-col items-center gap-5 bg-[#4D4D81] p-2 w-full sm:p-4 sm:basis-[56%]">
                <div className='flex flex-col items-center gap-5 w-full'>
                    {Shpoped.map((Shpoped:any)=>{
                        return Shpoped.id!=-1 && <CheckoutCard/>
                    })}
                </div>
                <h3 className='text-white  lg:text-[36px] font-bold self-end'>{TranslationTotal} {Total} {currency}</h3>
        </div>   
     </div>
</div>
  )
}
export default checkOut