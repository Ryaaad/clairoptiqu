import { useDispatch, useSelector } from "react-redux";
import CardP from "./CardPannier";
import {ClickerPannier,} from '../../feature/main/mainSlice'
import {GetTotal} from '../../feature/Shoping/ShopingSlice'

import {FiX } from "react-icons/fi";
import Link from "next/link";
import { useEffect } from "react";


const Pannier = () => {
  const ShopedItems=useSelector((state:any)=>state.Shop.ShopedItems)
  const Total=useSelector((state:any)=>state.Shop.Total)
  const LangPannier=useSelector((state:any)=>state.main.Lang.Pannier)
  const currency=useSelector((state:any)=>state.main.Lang.Money)
  const dir=useSelector((state:any)=>state.main.dir)
  const dispatch=useDispatch()
  useEffect(() => {
    
    dispatch(GetTotal())
  }, [])
  
    return ( 
        <div  className=" bg-[#F5F5F5] relative h-max w-[65vw] p-4 px-5 max-xl:w-[80vw] max-lg:w-[90vw] max-lg:px-2 max-md:px-1 " >
          <h1  className=" text-center font-[600] text-[35px] text-[#E00409] max-md:text-[25px] max-sm:text-[20px] " > {LangPannier.Title}</h1>
          <FiX  className=" text-[#e00408b0] text-4xl  cursor-pointer hover:text-[#E00409] absolute right-[2%] top-[8%] translate-y-[-50%] max-md:text-3xl max-sm:text-2xl  " 
          onClick={()=>dispatch(ClickerPannier())} ></FiX>
    <div className={`grid h-[290px] px-2 max-md:h-[220px] max-md:px-1 ${ShopedItems.length>3 && 'overflow-y-scroll' } `}>
      {ShopedItems.map((Item:any)=>{
        return  Item.id!=-1 && <CardP key={Item.id} {...Item} ></CardP>
      })  
      }
    </div> 
    <div  className= {`text-[22px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[12px]  text-[rgba(77,77,129,1)] font-[600] text-end  my-2 ${dir ? ' translate-x-[-5%]':'  translate-x-[5%]' } `} >{LangPannier.Total} {Total} {currency}</div>
     <div className="flex justify-between text-[20px] max-lg:text-[18px] max-md:text-[16px] max-md:px-2 max-sm:text-[12px] ">
     <button   className=" rounded-[10px] p-2 px-3 border-solid border-[rgba(77,77,129,1)] border-[2px] text-[rgba(77,77,129,1)] max-md:px-3 max-md:p-1  " 
     onClick={()=>dispatch(ClickerPannier())}>{LangPannier.return}</button>
       <Link 
          onClick={()=>dispatch(ClickerPannier())}
       href= {`${ShopedItems.length>1 ? "/checkout" : "/Produits"}`} className=" bg-[rgba(77,77,129,1)] rounded-[10px] p-2 px-4 text-white max-md:px-3 max-md:p-1  " >{LangPannier.BuyButton}</Link>
     </div>
        </div>
     );
}
 
export default Pannier;
