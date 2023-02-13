import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import img from "../assets/img.png"

interface props{
  id: number,
  nom: String,
  prix: number,
  img: String,
  promotion: number,
  frais_livraison: number,
  Qte: number
}

const CheckoutCard:React.FC<props>=(props) =>{
  const Translation=useSelector((state:any)=>state.main.Lang.Pannier)
  const currency=useSelector((state:any)=>state.main.Lang.Money)
  return (
    <div className='bg-white flex gap-2 w-full p-2 rounded-lg'>
        <div className="img w-28 sm:w-32 md:w-36 lg:w-40 "><img className='w-full rounded-tl-[40px] rounded-br-[40px]' src={img.src} alt="" /></div>
        <div className="text basis-[70%]">
            <h3 className='font-bold text-[18px] lg:text-[30px] text-[#4D4D81]'>{props.nom}</h3>
           <div className='flex w-full justify-between'>
            <div className='flex flex-col gap-2  py-2 text-[#4D4D81]'>
                    <h4 className='text-[16px] lg:text-[20px]'>{Translation.Card.Qte}  {props.Qte}</h4>
                    {props.frais_livraison>0 && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-[15px] lg:text-lg rounded-lg sm:px-2 py-[1px]">{Translation.Card.Livraison.NotFree}</p>}
                    {props.frais_livraison == 0 && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-[16px] lg:text-lg rounded-lg px-3 py-[1px]">{Translation.Card.Livraison.Free}</p>}
                        {/* {props.freeShiping && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-[16px] lg:text-lg rounded-lg px-3 py-[1px]">{Translation.Card.Livraison.Free}</p>} */}
                </div>
                <div className="flex flex-col gap-2 py-2 text-[16px] lg:text-lg text-[#4D4D81] font-semibold ">
                        <h4>{Translation.Card.price}</h4>
                        <p >{props.prix * props.Qte} {currency} </p>
                </div>
           </div>

        </div>
    </div>
  )
}
export default CheckoutCard