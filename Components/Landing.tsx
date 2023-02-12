import Card from "./card";
import { HiArrowRight,HiArrowLeft } from "react-icons/hi";
import Hero from "./Hero";
import Items from "../items";
import {useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {ChangeRouter} from '../feature/main/mainSlice'
const Landing = () => {
    const index=[0,1,2,3,4,5,6,7]
    const Lang=useSelector((state:any)=>state.main.Lang.Landing)
    const direction=useSelector((state:any)=>state.main.dir)
    const dispatch=useDispatch()
    return ( 
    <div  className='px-[40px] mt-3 max-xl:px-5 max-sm:px-5 max-[550px]:px-3' >
  
      
        <Hero></Hero>
  <div>
    <h1  className='w-full my-[24px] font-bold text-center  text-[48px] text-[rgba(224,4,9,1)] max-sm:mt-[60px] max-lg:text-[32px] max-sm:text-[21px] 
    max-[550px]:mt-[100px] max-[550px]:text-[18px] '>{Lang.Title}</h1>
    <div className='grid place-content-center grid-cols-[repeat(4,22vw)] gap-[25px] gap-y-[40px] font-[700] max-lg:grid-cols-[repeat(3,28vw)]  
    max-sm:grid-cols-[repeat(2,30vw)] max-sm:gap-x-[50px] '>
        {index.map(i=>{
            return <Card key={i} {...Items[i]} ></Card>
        })}
    </div>
    <Link href={'/Produits'} className='bg-[rgba(77,77,129,1)] flex gap-[12px] w-[186px] font-[700] rounded-[10px] mx-auto text-[20px]
     h-[41px] text-white place-content-center place-items-center cursor-pointer my-[49px] max-lg:text-[18px] max-lg:w-[150px] max-lg:h-[38px] max-sm:text-[14px]
      max-sm:w-[110px] max-sm:h-[33px] max-sm:gap-2 hover:bg-[#434370]  '  onClick={()=>dispatch(ChangeRouter('Products'))}  >
  {Lang.button}
  { direction ?  <HiArrowRight className="text-lg" ></HiArrowRight> :  <HiArrowLeft className="text-lg" ></HiArrowLeft>  }
       </Link>
  </div>
    </div> );
}
 
export default Landing;