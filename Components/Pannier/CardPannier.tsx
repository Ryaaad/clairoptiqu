import img from '../../assets/IMG_0705.jpg'
import {FiX } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import {MinusQte,AddQte,Delete} from '../../feature/Shoping/ShopingSlice'

interface props{
    id:number,
    nom:string,
    prix:number,
    img:string,
    frais_livraison:any,
    Qte:number
}
const CardP:React.FC<props> = (props) => {
    const currency=useSelector((state:any)=>state.main.Lang.Money)
    const dispatch=useDispatch()
    const dir=useSelector((state:any)=>state.main.dir)
    const LangPannier=useSelector((state:any)=>state.main.Lang.Pannier.Card)
    return (
        <div style={{boxShadow: "rgba(17,17,26,0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}} 
         className="flex relative items-center gap-4 my-4 bg-white h-fit rounded-[10px] p-2 max-w-full max-md:my-2 max-md:px-1 max-sm:gap-2  " >
        <img src={props.img} alt=""  className="h-[100px] w-[110px] rounded-tl-[40px] rounded-br-[40px] object-cover max-lg:w-[100px] max-sm:h-[70px] max-sm:w-[80px] " />
        <div className='flex relative items-center gap-4 max-w-full max-sm:gap-2  flex-wrap ' >

        </div>
          <div>
            <h1  className="text-[24px] font-bold text-[rgba(77,77,129,1)] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] max-[500px]:text-[11px] " > {props.nom}  </h1>
        
             <div className={` flex place-content-center text-transparent px-2 max-sm:px-1 rounded-[10px] max-lg:rounded-[5px] ${props.frais_livraison=='true' ? 'bg-[rgba(11,255,6,0.3)]': 'bg-[rgba(255,170,6,0.3)]'} `}>
          {!props.frais_livraison && <p className='text-[#CE8902] font-[600] text-[18px] max-xl:text-[14px] max-lg:text-[12px] max-sm:text-[10px] max-[550px]:text-[8px]' >{LangPannier.Livraison.NotFree}</p> }
          {props.frais_livraison == true && <p className='text-[rgba(2,206,22,1)] font-[600] text-[18px] max-xl:text-[14px] max-lg:text-[12px] max-sm:text-[10px] max-[500px]:text-[8px]' >{LangPannier.Livraison.Free}</p> }
          {props.frais_livraison == 'false' && <p className='text-[#CE8902] font-[600] text-[18px] max-xl:text-[14px] max-lg:text-[12px] max-sm:text-[10px] max-[550px]:text-[8px]' >{LangPannier.Livraison.NotFree}</p> }
          {props.frais_livraison == 'true' && <p className='text-[rgba(2,206,22,1)] font-[600] text-[18px] max-xl:text-[14px] max-lg:text-[12px] max-sm:text-[10px] max-[500px]:text-[8px]' >{LangPannier.Livraison.Free}</p> }
           </div>
  
          </div >
          <div className=" flex items-center gap-2 text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[11px] max-[500px]:text-[9px] text-[rgba(77,77,129,1)] 
          font-bold max-sm:gap-1 " >
          {LangPannier.Qte} 
          <div className="flex max-[500px]:flex-col gap-[2px] items-center  ">
          <span className="rounded-full bg-[rgba(217,240,251,1)] w-[28px] h-[28px] grid place-content-center cursor-pointer max-lg:w-[25px] max-lg:h-[25px]  max-md:w-[22px]
           max-md:h-[22px] max-sm:h-[20px]  max-sm:w-[20px] max-[500px]:w-[15px]  max-[500px]:h-[15px]"
           onClick={()=>{dispatch(AddQte(props.id));}} >+</span> 
          {props.Qte} 
          <span className="rounded-full grid place-content-center bg-[rgba(217,240,251,1)] w-[28px] h-[28px] cursor-pointer max-lg:w-[25px] max-lg:h-[25px]
           max-sm:h-[20px] max-sm:w-[20px] max-[500px]:w-[15px]  max-[500px]:h-[15px] " 
          onClick={()=>dispatch(MinusQte(props.id))} >-</span>
          </div>
          
          </div>
          <span  className="text-[19px] max-lg:text-[17px] max-md:text-[14px] max-sm:text-[10px] max-[500px]:text-[8px] text-[rgba(77,77,129,1)] mx-4 font-bold max-md:mx-0" >  {LangPannier.price} {props.prix} {currency}  </span>
        <div className={`rounded-full text-[#e00408b0]  border-[2px] border-[#e00408b0] border-solid p-1 text-xl grid place-content-center cursor-pointer
         hover:text-[#E00409] hover:border-[#E00409] absolute  top-[50%] translate-y-[-50%] max-md:text-lg max-md:top-[15%] max-md:p-0 max-md:border-0 
         ${dir ? ' right-[2%]':'left-[2%]' } max-sm:text-[12px] `} 
         onClick={()=>dispatch(Delete(props.id))}>
          <FiX  className="" ></FiX>
        </div>
        </div> 
     );
}
 
export default CardP;