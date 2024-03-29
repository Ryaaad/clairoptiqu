import { AiFillStar } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {AddItem} from '../feature/Shoping/ShopingSlice'
import {ClickerPannier} from '../feature/main/mainSlice'
import { useEffect, useState} from "react";
import Link from "next/link";
interface props{
    id:number,
    nom:string,
    promotion:number,
    prix:number,
    img:String,
    img1:String,
    img2:String,
    img3:String,
    frais_livraison:any,
    description:String,
    rate:number,
}

const UperProductPage:React.FC<props> = (props) => {
    const direction=useSelector((state:any)=>state.main.dir) 
    console.log(props)
    const currency=useSelector((state:any)=>state.main.Lang.Money)
    const ProductID=useSelector((state:any)=>state.main.Lang.ProductID)
    const dispatch=useDispatch()
    const Lang=useSelector((state:any)=>state.main.Lang.Landing.Card.Livraison)
    const [Qte, setQte] = useState(1)
    const [Item,setItem]=useState({
        id:-1,
        nom:'String',
        promotion:0,
        prix:0,
        frais_livraison:false,
     img:'',
    Qte:0
})
    useEffect(() => {  
      setItem({id:props.id,nom:props.nom,promotion:props.promotion,prix:props.prix,frais_livraison:props.frais_livraison,img:props.img as string,Qte})   
    },[Qte,props])  
    const AddMinus=(type:string)=>{    
    if(type=='Minus'){
         Qte>1 && setQte(prev=>prev-1);
    } else setQte(prev=>prev+1)
    }
    
    const AddToPannier=()=>{
        dispatch(ClickerPannier())
        dispatch(AddItem(Item))
    }
   const [CurrentImg, setCurrentImg] = useState<any>(null)
   useEffect(() => {  
    setQte(1) 
    setCurrentImg(props.img)
  },[props]) 
   const handelImg=(Data:any)=>{
   setCurrentImg(Data)
   console.log(Data)
   }
    let arr:number[]=[]
    for(let i=0 ; i<props.rate ; i++){
        arr.push(1)
     }
    return ( 
        <div>
            <div className="hidden sm:flex bg-white gap-6 p-4 py-4 rounded-lg mb-4">
       <div className="img flex flex-col gap-4">
        <div className="sm:w-[400px] sm:h-[380px] lg:w-[530px] lg:h-[500px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]">
            {!CurrentImg  && <img src={props.img as string} alt="Mainimg"  className="rounded-tl-[40px] rounded-br-[40px] w-full h-full" />}
            {CurrentImg  && <img src={CurrentImg as string} alt="Mainimg"  className="rounded-tl-[40px] rounded-br-[40px] w-full h-full" />}
        </div>
        <div className="imgs flex justify-between">
            <div className="sm:w-[100px] lg:w-[125px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]"><img src={props.img as string} alt="p1" className="rounded-tl-[40px] cursor-pointer rounded-br-[40px] w-full h-full object-cover" onClick={()=>handelImg(props.img)} /></div>
            <div className="sm:w-[100px] lg:w-[125px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]"><img src={props.img1 as string} alt="p2" className="rounded-tl-[40px] cursor-pointer  rounded-br-[40px] w-full h-full object-cover" onClick={()=>handelImg(props.img1)} /></div>
            <div className="sm:w-[100px] lg:w-[125px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]"><img src={props.img2 as string} alt="p3" className="rounded-tl-[40px] cursor-pointer rounded-br-[40px] w-full h-full object-cover" onClick={()=>handelImg(props.img2)} /></div>
            <div className="sm:w-[100px] lg:w-[125px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]"><img src={props.img3 as string} alt="p4" className="rounded-tl-[40px] cursor-pointer rounded-br-[40px] w-full h-full object-cover" onClick={()=>handelImg(props.img3)} /></div>
        </div>
       </div>
       <div className="text w-full">
            <h3 className="text-[#4D4D81] text-4xl lg:text-5xl font-bold pt-1 pb-4 lg:pb-10">{props.nom}</h3>
            <div className="flex gap-1 text-[#FFC107]">
                {/* <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar> */}
                {
                arr.map(ele=>{
                    return  <AiFillStar key={Math.random()} className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                })
                }
            </div>
            <div className="liv flex gap-2 py-2 text-transparent">
                    {props.frais_livraison == 'false'  && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-lg lg:text-xl rounded-lg px-3 ">{Lang.NotFree}</p>}
                    {props.frais_livraison == false  && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-lg lg:text-xl rounded-lg px-3 ">{Lang.NotFree}</p>}
                    {props.frais_livraison == 'true'  && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-lg lg:text-xl rounded-lg px-3 ">{Lang.Free}</p>}
                    {props.frais_livraison === true  && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-lg lg:text-xl rounded-lg px-3 ">{Lang.Free}</p>}
            </div>
            <div className="flex gap-2 items-center ">
                    <p className="text-[#4D4D81] text-2xl lg:text-3xl font-bold">{+props.prix} {currency} </p>
                    {props.promotion>0 && <p className="text-[#4D4D8199] font-semibold text-lg lg:text-xl line-through">{(+props.prix + (+props.promotion * +props.prix) / 100).toFixed(2) } {currency} </p>}
                    {props.promotion>0 && direction &&<p className="bg-[#ff343748] text-[#E00409] font-semibold text-lg lg:text-xl rounded-lg px-2">-{props.promotion}%</p>}
                    {props.promotion>0 && !direction &&<p className="bg-[#ff343748] text-[#E00409] font-semibold text-lg lg:text-xl rounded-lg px-2">{props.promotion}%-</p>}
            </div>
            <div className="text-[#4D4D81]  py-2">
                <h3 className="text-xl lg:text-2xl font-bold">{ProductID.Description}</h3>
                <p className="text-sm lg:text-xl">{props.description}</p>
            </div>
            <div className="flex gap-1 text-[#4D4D81] items-center">
                <h3 className="text-lg lg:text-xl font-bold">{ProductID.Quantité}</h3> 
               <button className="text-[16px] lg:text-lg font-semibold bg-[#E4F4FC] w-[30px] h-[30px] rounded-full"  onClick={()=>AddMinus('Add')} >+</button>
               <p className="text-[16px] lg:text-lg font-semibold">{Qte}</p>
               <button className="text-[16px] lg:text-lg font-semibold bg-[#E4F4FC] w-[30px] h-[30px] rounded-full" onClick={()=>AddMinus('Minus')} >-</button>
            </div>
            <div className="text-[13px] lg:text-lg font-semibold flex gap-4 items-center justify-end my-2">
              <Link href= {`/checkout`}    onClick={()=>  dispatch(AddItem(Item))} className="text-[#E00409] border-[2px] border-[#E00409] px-3 py-2 rounded-lg" >{ProductID.Acheter_maintenant}</Link>
                <button className="bg-[#E00409] border-[2px] border-[#E00409] text-white px-3 py-2 rounded-lg flex gap-1 items-center" 
    onClick={()=>AddToPannier()}
                >{!direction && <HiOutlineShoppingCart></HiOutlineShoppingCart>} {ProductID.Ajouter_au_panier} {direction && <HiOutlineShoppingCart></HiOutlineShoppingCart>} </button>
            </div>
        </div>
    </div> 
    {/* <---------------------------------------------------------> */}

        <div className="sm:hidden flex flex-col bg-white gap-6 pl-5 py-2 rounded-lg ">
        <div className="img flex flex-col gap-4">
            <div className="w-[320px] border-[#4D4D81] rounded-tl-[40px] rounded-br-[40px] border-[1px]">
                {!CurrentImg  && <img src={props.img as string} alt="Mainimg"  className="rounded-tl-[40px] object-cover rounded-br-[40px] w-full h-full" />}
            {CurrentImg  && <img src={CurrentImg as string} alt="Mainimg"  className="rounded-tl-[40px] rounded-br-[40px] w-full h-full object-cover" />}
            </div>
            <div className="flex gap-3">
                <div className="w-[70px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]"  onClick={()=>handelImg(props.img)}><img src={props.img as string}  alt="pos1" className="rounded-tl-[40px] rounded-br-[40px] w-full h-full object-cover"/></div>
                <div className="w-[70px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]" onClick={()=>handelImg(props.img1)}><img src={props.img1 as string}  alt="pos2" className="rounded-tl-[40px] rounded-br-[40px] w-full h-full object-cover"/></div>
                <div className="w-[70px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]" onClick={()=>handelImg(props.img2)}><img src={props.img2 as string}  alt="pos3" className="rounded-tl-[40px] rounded-br-[40px] w-full h-full object-cover"/></div>
                <div className="w-[70px] rounded-tl-[40px] rounded-br-[40px] border-[1px] border-[#4D4D81]" onClick={()=>handelImg(props.img3)}><img src={props.img3 as string}  alt="pos3" className="rounded-tl-[40px] rounded-br-[40px] w-full h-full object-cover"/></div>
            </div>
        </div>
            <div className="text w-full">
                    <h3 className="text-[#4D4D81] text-xl font-bold">{props.nom}</h3>
                    <div className="flex gap-1 text-[#FFC107]">
                        {/* <AiFillStar className="text-[20px]"></AiFillStar>
                        <AiFillStar className="text-[20px]"></AiFillStar>
                        <AiFillStar className="text-[20px]"></AiFillStar>
                        <AiFillStar className="text-[20px]"></AiFillStar>
                        <AiFillStar className="text-[20px]"></AiFillStar> */}
                        {
                arr.map(ele=>{
                    return  <AiFillStar key={Math.random()} className="text-[20px]"></AiFillStar>
                })
                }
                    </div>
                    <div className="liv flex py-2 text-transparent">
                            {props.frais_livraison =='false' && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-lg rounded-lg px-2">{Lang.NotFree}</p>}
                            {props.frais_livraison ==false && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-lg rounded-lg px-2">{Lang.NotFree}</p>}
                            {props.frais_livraison =='true' || props.frais_livraison === true && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-lg rounded-lg px-2 ">{Lang.Free}</p>}
                            {props.frais_livraison === true && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-lg rounded-lg px-2 ">{Lang.Free}</p>}
                    </div>
                    <div className="flex gap-2 items-center ">
                            <p className="text-[#4D4D81] text-xl font-bold">{+props.prix} {currency} </p>
                            {+props.promotion>0 && <p className="text-[#4D4D8199] font-semibold text-lg line-through">{(+props.prix + (+props.promotion * +props.prix) / 100).toFixed(2) } {currency} </p>}
                            {+props.promotion>0 && direction && <p className="bg-[#ff343748] text-[#E00409] font-semibold text-lg rounded-lg px-2">-{props.promotion}%</p>}
                            {+props.promotion>0 && !direction && <p className="bg-[#ff343748] text-[#E00409] font-semibold text-lg rounded-lg px-2">{props.promotion}%-</p>}
                    </div>
                    <div className="text-[#4D4D81]  py-2">
                        <h3 className="text-xl font-bold">{ProductID.Description}</h3>
                        <h5 className="text-[16px] ">{props.description}</h5>
                    </div>
                    <div className="flex gap-1 text-[#4D4D81] items-center">
                        <h3 className="text-lg font-bold">{ProductID.Quantité}</h3> 
                    <button className="text-[16px] flex items-center justify-center font-semibold bg-[#E4F4FC] w-[20px] h-[20px] rounded-full" onClick={()=>AddMinus('Add')}>+</button>
                    <p className="text-[16px] font-semibold">{Qte}</p>
                    <button className="text-[16px] flex items-center justify-center font-semibold bg-[#E4F4FC] w-[20px] h-[20px] rounded-full" onClick={()=>AddMinus('Minus')}>-</button>
                    </div>
                    <div className="text-[12px] font-bold flex gap-4 items-center justify-end pt-4 px-2">
                    <Link href= {`/checkout`}    onClick={()=> dispatch(AddItem(Item))} className="text-[#E00409] border-[2px] border-[#E00409] px-2 py-2 rounded-lg">{ProductID.Acheter_maintenant}</Link>
                        <button className="bg-[#E00409] border-[2px] border-[#E00409] text-white px-2 py-2 rounded-lg flex gap-2 items-center"
                           onClick={()=>AddToPannier()}
                        >  {!direction && <HiOutlineShoppingCart></HiOutlineShoppingCart>} {ProductID.Ajouter_au_panier} {direction && <HiOutlineShoppingCart></HiOutlineShoppingCart>} </button>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
export default UperProductPage;