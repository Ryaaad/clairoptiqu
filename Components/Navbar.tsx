import logo from '../assets/logo2.png'
import { MdLanguage } from "react-icons/md";
import { FaShoppingCart } from "react-icons/Fa";
import {ClickerPannier} from '../feature/main/mainSlice'
import { useDispatch, useSelector } from "react-redux";
import Burger from '../assets/Burger.png'
import { useState } from 'react';
import {ChangeLang,ChangeRouter} from '../feature/main/mainSlice'
import Link from 'next/link';


const Navbar= () => {
  const dispatch=useDispatch()
   const Lang=useSelector((state:any)=>state.main.Lang)  
   const Home=useSelector((state:any)=>state.main.Home)  
   const Language=useSelector((state:any)=>state.main.Language) 
   
   const dir=useSelector((state:any)=>state.main.dir)
  const [NavMenu, setNavMenu] = useState(false)
  const [LangMenu, setLangMenu] = useState(false)

    return (  
      <>
        <div  className="h-[81px] flex px-[57px] pr-[73px] items-center justify-between text-[rgba(224,4,9,1)] bg-white
        max-lg:px-[46px] max-md:px-[35px] max-sm:hidden  ">
          <Link href={`/`} className="flex items-center gap-2"  onClick={()=>dispatch(ChangeRouter('Home'))} >
            <img src={logo.src} alt="" className='rounded-full h-[50px] object-cover w-[50px] cursor-pointer max-lg:h-[40px] max-lg:w-[40px] max-md:h-[35px] max-md:w-[35px] ' />
            <h1 className=' font-[700] text-[26px] cursor-pointer max-lg:text-[22px] max-md:text-[20px] ' >Clair’optique</h1>
          </Link>
          <ul className="flex text-[24px] font-[400] gap-[12px] max-lg:text-[18px] max-md:text-[16px] ">
          <Link href={`/`}  className='cursor-pointer' onClick={()=>dispatch(ChangeRouter('Home'))} >
          <li className={` ${Home && 'underline  font-[600] '} `} >{Lang.Accueil}</li>
          </Link>
         <Link href={'/Produits'}  className='cursor-pointer '   onClick={()=>dispatch(ChangeRouter('Products'))}  >
         <li className={` ${!Home && 'underline  font-[600] '} `} >{Lang.Produits}</li>
         </Link>
          </ul>
          <div className=' flex items-center relative gap-[12px] text-[16px] max-lg:text-[14px]  max-md:text-[12px] ' >
           { LangMenu && <div style={{boxShadow: "rgba(17,17,26,0.05) 0px 4px 16px, rgba(17, 17, 26, 0.2) 0px 8px 32px"}} 
           className="absolute bottom-[-450%] w-[150px] z-10 left-[-50%] p-2 px-3 grid gap-2 bg-white text-[#4D4D81] font-[600] text-center  ">
              <h1 className={` cursor-pointer ${Language=='FR' && 'text-[red]' } `}  
              onClick={()=>{dispatch(ChangeLang('Fr'));setLangMenu(prev=>prev=!prev)}} >Français</h1>
              <h1  className={` cursor-pointer ${Language=='EN' && 'text-[red]' } `}  
              onClick={()=>{dispatch(ChangeLang('En'));setLangMenu(prev=>prev=!prev)}}>English</h1>
              <h1  className={` cursor-pointer ${Language=='AR' && 'text-[red]' } `}   
               onClick={()=>{dispatch(ChangeLang('Ar'));setLangMenu(prev=>prev=!prev)}}>العربية</h1>
            </div>}
            <div className='flex items-center cursor-pointer font-[600] gap-[6px] ' onClick={()=>setLangMenu(prev=>prev=!prev)} >
            <MdLanguage className='text-[24px]  max-md:text-[20px]  ' ></MdLanguage> 
            {Language} 
            </div>
            <FaShoppingCart className='text-[24px] cursor-pointer  max-md:text-[20px]' onClick={()=>dispatch(ClickerPannier())} ></FaShoppingCart>
          </div>
        </div>


        <div  className="h-[80px] relative flex px-[15px] items-center justify-between text-[rgba(224,4,9,1)] sm:hidden bg-white  ">
          <div className='flex gap-2' >
          <img src={Burger.src} alt="" className='cursor-pointer' onClick={()=>setNavMenu(prev=>prev=!prev)} />
          <div className="flex items-center gap-2">
            <img src={logo.src} alt="" className='rounded-full h-[30px] w-[30px] cursor-pointer' />
            <h1 className=' font-[700] text-[22px] cursor-pointer '  >Clair’optique</h1>
          </div>
          </div>
   {  NavMenu && <ul className="absolute bottom-[-80%] h-[70px] bg-white z-10 p-2 text-[25px] max-lg:text-[18px] max-md:text-[16px] text-[#4D4D81] font-[400] "> 
      
    <Link href={`/`}  className='cursor-pointer' onClick={()=>dispatch(ChangeRouter('Home'))} >
          <li className={` ${Home && 'underline text-[rgba(224,4,9,1)] font-[600] '} `} >{Lang.Accueil}</li>
          </Link>
         <Link href={'/Produits'}  className='cursor-pointer '   onClick={()=>dispatch(ChangeRouter('Products'))}  >
         <li className={` ${!Home && 'underline text-[rgba(224,4,9,1)] font-[600] '} `} >{Lang.Produits}</li>
         </Link>
  </ul>}
   
   
         
          <div className=' flex items-center gap-[12px] text-[16px] '>
            <div className='flex relative items-center cursor-pointer font-[600] gap-[6px] ' onClick={()=>setLangMenu(prev=>prev=!prev)}  >
                      { LangMenu && <div style={{boxShadow: "rgba(17,17,26,0.05) 0px 4px 16px, rgba(17, 17, 26, 0.2) 0px 8px 32px"}} 
           className="absolute bottom-[-450%] w-[120px] z-10 left-[-50%] p-2 px-3 grid gap-2 bg-white text-[#4D4D81] font-[600] text-center  ">
              <h1 className={` cursor-pointer ${Language=='FR' && 'text-[red]' } `}  
              onClick={()=>{dispatch(ChangeLang('Fr'));setLangMenu(prev=>prev=!prev)}} >Français</h1>
              <h1  className={` cursor-pointer ${Language=='EN' && 'text-[red]' } `}  
              onClick={()=>{dispatch(ChangeLang('En'));setLangMenu(prev=>prev=!prev)}}>English</h1>
              <h1  className={` cursor-pointer ${Language=='AR' && 'text-[red]' } `}   
               onClick={()=>{dispatch(ChangeLang('Ar'));setLangMenu(prev=>prev=!prev)}}>العربية</h1>
            </div>}
            <MdLanguage className='text-[24px]    '  ></MdLanguage>     {Language} 
            </div>
            <FaShoppingCart className='text-[24px] cursor-pointer ' onClick={()=>dispatch(ClickerPannier())} ></FaShoppingCart>
          </div>
        </div>
      </>
      
     );
}
 
export default Navbar;