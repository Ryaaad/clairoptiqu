import React from 'react'
import GlassMen from '../assets/IMG_0705.jpg'
import { useDispatch, useSelector } from "react-redux";
import {ChangeRouter} from '../feature/main/mainSlice'
import Link from 'next/link';

export default function hero() {
    const Lang=useSelector((state:any)=>state.main.Lang.Hero)
    const dir=useSelector((state:any)=>state.main.dir)
    const dispatch=useDispatch()
  return (
    <div className='flex justify-end'>
            <div className="w-[1000px] h-[587px] flex justify-end gap-8 items-center text-white bg-[rgba(77,77,129,1)] rounded-tl-[40px] rounded-br-[40px]
            max-xl:w-[900px] max-xl:h-[575px] max-xl:gap-5 max-lg:w-[70vw] max-lg:h-[450px] max-lg:gap-10 relative max-sm:px-[20px] max-sm:items-start max-sm:pt-[10px] 
            max-sm:max-w-[65vw] max-sm:h-[210px] max-sm:rounded-tl-[20px] max-sm:rounded-br-[20px] max-md:max-h-[350px]  max-sm:justify-center 
            max-[550px]:max-w-[70vw]
            ">
            <img src={GlassMen.src} alt="" className={`rounded-tr-[40px] object-cover w-[55vw] h-[477px] max-xl:h-[460px] max-xl:w-[55vw] rounded-bl-[40px]  max-lg:w-[50vw] max-lg:h-[48vh]
            max-sm:absolute max-sm:bottom-[-50px] max-sm:w-[45vw]  ${dir ? 'max-sm:left-[-30%]' : 'max-sm:right-[-30%]'}  max-sm:max-h-[140px]  max-sm:rounded-tr-[30px]
            max-sm:rounded-bl-[30px] max-[550px]:bottom-[-60px] max-[550px]:left-[-25%]
            `}
            />
               <div className='max-xl:w-[45vw] pr-2 max-lg:w-[40vw] grid gap-3 max-sm:w-full max-sm:gap-1 '>
               <h1 className={`text-[45px] xl:leading-[56.07px] font-[700]  
                ${dir ? ' max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px] max-sm:text-[22px] max-[550px]:text-[18px]' 
                : ' max-xl:text-[42px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[25px] max-[550px]:text-[24px]'}  `}>{Lang.heroTitle}</h1>
                <p className={` w-[35vw] font-[400]  text-[20px]  max-lg:text-[15px] max-sm:w-[50vw] max-sm:text-[12px]  max-[550px]:text-[10px] 
                 ${dir ? 'max-lg:text-[15px] max-sm:text-[12px]  max-[550px]:text-[10px] ' 
                  : ' max-lg:text-[17px] max-sm:text-[15px] max-[550px]:text-[14px] '}
                `} >{Lang.heroP}</p>
                
                
                
                <Link href={'/Produits'}
onClick={()=>dispatch(ChangeRouter('Products'))} className={`text-[22px] h-[47px] px-2 font-[700] bg-[rgba(255,52,57,0.81)] rounded-[10px] max-sm:justify-self-end
                 max-lg:text-[18px]  max-lg:h-[40px]  max-md:text-[12px] max-sm:text-[10px] max-md:max-h-[48px] max-sm:max-h-[28px] max-sm:rounded-[5px] max-sm:mt-3 
                 hover:bg-[rgba(233,47,50,0.81)] max-[550px]:text-[9px] max-[550px]:h-[20px]
                  ${dir ? 'max-md:text-[12px] max-sm:text-[10px] max-[550px]:text-[9px]  w-[259px] max-lg:w-[250px] max-md:max-w-[170px] max-sm:max-w-[140px] max-[550px]:max-w-[120px]':
                  'max-md:text-[14px] max-sm:text-[13px] max-[550px]:text-[14px] w-[250px] max-lg:w-[240px] max-md:max-w-[140px] max-sm:max-w-[130px] max-[550px]:max-w-[110px]'}
                grid justify-center items-center  `} >{Lang.heroButton}</Link>
            
               </div>
            </div>
  </div>
  )
}
