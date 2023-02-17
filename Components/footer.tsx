import logo from '../assets/logo2.png'
import { BsInstagram } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import {ChangeRouter} from '../feature/main/mainSlice'
const Footer = () => {
    const Lang=useSelector((state:any)=>state.main.Lang)
    const dispatch=useDispatch()
    const f={cat:"Femme"}
    const h={cat:"Homme"}
    const e={cat:"Enfant"}
    return ( 
        <div className="h-max bg-[rgba(77,77,129,1)] p-[45px] py-[28px]  max-lg:py-[15px] max-lg:px-[25px] text-white max-[550px]:px-[20px] max-[550px]:py-[10px] " >
        <Link href={`/`} className="flex items-center gap-2  "  onClick={()=>dispatch(ChangeRouter('Home'))} >
            <img src={logo.src} alt="" className='rounded-full h-[50px] w-[50px] cursor-pointer max-lg:w-[40px] max-lg:h-[40px] max-[550px]:h-[35px] max-[550px]:w-[35px]  ' />
            <h1 className=' font-[600] text-[26px] cursor-pointer max-lg:text-[22px] max-sm:text-[18px] max-[550px]:text-[17px] ' >Clair’optique</h1>
        </Link>
        <div className="flex justify-between ">
        <div className='flex flex-col max-w-[320px] mt-3 text-[20px] gap-[15px] max-lg:text-[18px] max-sm:text-[14px] max-[550px]:text-[13px] max-sm:max-w-[150px] max-[425px]:text-[11px] 
      max-[425px]:max-w-[100px]    ' >
            <div  className='flex gap-2 items-center ' >
            <BsInstagram className='text-2xl max-sm:text-xl max-[425px]:text-lg ' ></BsInstagram> @clairoptique1
            </div>
            <div>
            <h1  className='text-[18px] font-[600]  max-lg:text-[16px] max-sm:text-[14px] max-[550px]:text-[13px] max-[425px]:text-[11px] ' >{Lang.Footer.Addresse}</h1> 
            <p  className='text-[16px] font-[400] max-lg:text-[12px] max-sm:text-[10px] max-[550px]:text-[9px] max-[425px]:text-[8px] ' > {Lang.Footer.Addressep}</p>
            </div>
          
            </div>

            <div className="flex gap-12 translate-y-[-8%] max-sm:translate-y-[-4%] max-sm:gap-5 ">
                <div  className='flex flex-col gap-3 max-sm:max-w-max '>
                    <h1   className='text-[22px] font-[600] max-lg:text-[18px] max-sm:text-[16px] max-[550px]:text-[14px] max-[425px]:text-[12px]' > {Lang.Footer.Page}</h1>
                   <ul className="flex flex-col gap-3  max-sm:text-[14px] max-[550px]:text-[12px] max-[425px]:text-[10px] ">
                    <Link href={'/'}  className='cursor-pointer'  onClick={()=>dispatch(ChangeRouter('Home'))}  >{Lang.Accueil}</Link>
                    <Link href={'/Produits'}  className='cursor-pointer'  onClick={()=>dispatch(ChangeRouter('Products'))} >{Lang.Produits} </Link>
                   </ul>
                </div>
                <div className='flex flex-col gap-3 '>
                    <h1 className='text-[22px] font-[600] max-lg:text-[18px] max-sm:text-[16px] max-[550px]:text-[14px] max-[425px]:text-[12px] ' >{Lang.Footer.Categorie}</h1>
                    <ul className="flex flex-col gap-3  max-sm:text-[14px] max-[550px]:text-[12px] max-[425px]:text-[10px] ">
                    <Link href={{
    pathname: `/Produits`,
    query: f, // the data
  }}><li className='cursor-pointer' onClick={()=>dispatch(ChangeRouter('Products'))}  >{Lang.Footer.Femme}</li></Link>
                    <Link href={{
    pathname: `/Produits`,
    query: h, // the data
  }}><li  className='cursor-pointer' onClick={()=>dispatch(ChangeRouter('Products'))}>{Lang.Footer.Homme}</li></Link>
                    <Link href={{
    pathname: `/Produits`,
    query: e, // the data
  }}><li  className='cursor-pointer' onClick={()=>dispatch(ChangeRouter('Products'))} >{Lang.Footer.Enfants}</li></Link>
                   </ul>
                </div>
                <div className='flex gap-5 max-lg:flex-col max-lg:gap-1 '>
                    <h1 className='text-[22px] font-[600] gap-3 max-lg:text-[18px] max-sm:text-[16px] max-[550px]:text-[14px] max-[425px]:text-[12px] ' >{Lang.Footer.Map}</h1>
             <iframe className='h-[170px] w-[150px] max-[550px]:h-[120px] max-[550px]:w-[100px] max-[425px]:w-[80px] max-[425px]:h-[90px] ' 
             src="https://maps.google.com/maps?q=36.259459,2.755519&t=&z=19&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
            </div>
        </div>
      
          <p className='w-full text-center  text-[18px] max-sm:text-[16px]  max-[425px]:text-[14px] ' >Copyright ©2023  by OneClick Agency. </p>
        </div>
     );
}
 
export default Footer;