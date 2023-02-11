import { AiFillStar } from "react-icons/Ai";
import img from "../assets/img2.png"
import pos1 from "../assets/pos1.png"
import pos2 from "../assets/pos2.png"
import pos3 from "../assets/pos3.png"
import img1 from "../assets/productCard1.jpg"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
interface props{
    id:Number,
    name:String,
    discount:GLfloat,
    price:GLfloat,
    freeShiping:boolean,
    details:String
}

const UperProductPage:React.FC<props> = (props) => {
    const currency=useSelector((state:any)=>state.main.Lang.Money)
    const Lang=useSelector((state:any)=>state.main.Lang.Landing.Card.Livraison)
    return ( 
        <div>
            <div className="hidden sm:flex bg-white gap-6 pl-8 py-2 rounded-lg mb-4">
       <div className="img flex flex-col gap-4">
        <div className="sm:w-[400px] lg:w-[530px] ">
            <img src={img.src} alt="img2"  className="rounded-tl-[40px] rounded-br-[40px] w-full" />
        </div>
        <div className="imgs flex justify-between">
            <div className="sm:w-[100px] lg:w-[125px]"><img src={img.src} alt="pos1" className="rounded-tl-[40px] rounded-br-[40px] w-full"/></div>
            <div className="sm:w-[100px] lg:w-[125px]"><img src={img.src} alt="pos2" className="rounded-tl-[40px] rounded-br-[40px] w-full"/></div>
            <div className="sm:w-[100px] lg:w-[125px]"><img src={img.src} alt="pos3" className="rounded-tl-[40px] rounded-br-[40px] w-full"/></div>
            <div className="sm:w-[100px] lg:w-[125px]"><img src={img.src} alt="pos3" className="rounded-tl-[40px] rounded-br-[40px] w-full"/></div>
        </div>
       </div>
       <div className="text">
            <h3 className="text-[#4D4D81] text-4xl lg:text-5xl font-bold pb-5 lg:pb-10">{props.name}</h3>
            <div className="flex gap-1 text-[#FFC107]">
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
                <AiFillStar className="sm:text-[25px] lg:text-[30px]"></AiFillStar>
            </div>
            <div className="liv flex py-2">
                    {!props.freeShiping && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-lg lg:text-xl rounded-lg px-3 ">{Lang.NotFree}</p>}
                    {props.freeShiping && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-lg lg:text-xl rounded-lg px-3 ">{Lang.Free}</p>}
            </div>
            <div className="flex gap-2 items-center ">
                    <p className="text-[#4D4D81] text-2xl lg:text-3xl font-bold">{props.price} {currency} </p>
                    {props.discount>0 && <p className="text-[#4D4D8199] font-semibold text-lg lg:text-xl line-through">{(props.price + (props.discount * props.price) / 100).toFixed(2) } {currency} </p>}
                    {props.discount>0 &&<p className="bg-[#ff343748] text-[#E00409] font-semibold text-lg lg:text-xl rounded-lg px-2">-{props.discount}%</p>}
            </div>
            <div className="text-[#4D4D81]  py-2">
                <h3 className="text-xl lg:text-2xl font-bold">Description:</h3>
                <p className="text-sm lg:text-xl">{props.details}</p>
            </div>
            <div className="flex gap-1 text-[#4D4D81] items-center">
                <h3 className="text-lg lg:text-xl font-bold">Quantité :</h3> 
               <button className="text-[16px] lg:text-lg font-semibold bg-[#E4F4FC] w-[30px] h-[30px] rounded-full">+</button>
               <p className="text-[16px] lg:text-lg font-semibold">1</p>
               <button className="text-[16px] lg:text-lg font-semibold bg-[#E4F4FC] w-[30px] h-[30px] rounded-full">-</button>
            </div>
            <div className="text-[14px] lg:text-lg font-semibold flex gap-4 items-center justify-end my-2">
                <button className="text-[#E00409] border-[3px] border-[#E00409] px-4 py-2 rounded-lg">Acheter maintenant</button>
                <button className="bg-[#E00409] border-[3px] border-[#E00409] text-white px-4 py-2 rounded-lg flex gap-1 items-center">Ajouter au panier <HiOutlineShoppingCart></HiOutlineShoppingCart></button>
            </div>
        </div>
    </div> 
    {/* <---------------------------------------------------------> */}

        <div className="sm:hidden flex flex-col bg-white gap-6 pl-5 py-2 rounded-lg ">
        <div className="img flex flex-col gap-4">
            <div className="w-[320px]">
                <img src={img.src} alt="img2"  className="rounded-tl-[40px] rounded-br-[40px] w-full" />
            </div>
            <div className="flex gap-3">
                <div className="w-[70px]"><img src={img.src} alt="pos1" className="rounded-tl-[40px] rounded-br-[40px] w-full"/></div>
                <div className="w-[70px]"><img src={img.src} alt="pos2" className="rounded-tl-[40px] rounded-br-[40px] w-full"/></div>
                <div className="w-[70px]"><img src={img.src} alt="pos3" className="rounded-tl-[40px] rounded-br-[40px] w-full"/></div>
                <div className="w-[70px]"><img src={img.src} alt="pos3" className="rounded-tl-[40px] rounded-br-[40px] w-full"/></div>
            </div>
        </div>
            <div className="text">
                    <h3 className="text-[#4D4D81] text-xl font-bold">{props.name}</h3>
                    <div className="flex gap-1 text-[#FFC107]">
                        <AiFillStar className="text-[20px]"></AiFillStar>
                        <AiFillStar className="text-[20px]"></AiFillStar>
                        <AiFillStar className="text-[20px]"></AiFillStar>
                        <AiFillStar className="text-[20px]"></AiFillStar>
                        <AiFillStar className="text-[20px]"></AiFillStar>
                    </div>
                    <div className="liv flex py-2">
                            {!props.freeShiping && <p className="bg-[#FFAA064D] text-[#CE8902] font-semibold text-lg rounded-lg px-2">{Lang.NotFree}</p>}
                            {props.freeShiping && <p className="bg-[#0BFF064D] text-[#02CE16] font-semibold text-lg rounded-lg px-2 ">{Lang.Free}</p>}
                    </div>
                    <div className="flex gap-2 items-center ">
                            <p className="text-[#4D4D81] text-xl font-bold">{props.price} {currency} </p>
                            {props.discount>0 && <p className="text-[#4D4D8199] font-semibold text-lg line-through">{(props.price + (props.discount * props.price) / 100).toFixed(2) } {currency} </p>}
                            {props.discount>0 &&<p className="bg-[#ff343748] text-[#E00409] font-semibold text-lg rounded-lg px-2">-{props.discount}%</p>}
                    </div>
                    <div className="text-[#4D4D81]  py-2">
                        <h3 className="text-xl font-bold">Description:</h3>
                        <h5 className="text-[16px] ">{props.details}</h5>
                    </div>
                    <div className="flex gap-1 text-[#4D4D81] items-center">
                        <h3 className="text-lg font-bold">Quantité :</h3> 
                    <button className="text-[16px] flex items-center justify-center font-semibold bg-[#E4F4FC] w-[20px] h-[20px] rounded-full">+</button>
                    <p className="text-[16px] font-semibold">1</p>
                    <button className="text-[16px] flex items-center justify-center font-semibold bg-[#E4F4FC] w-[20px] h-[20px] rounded-full">-</button>
                    </div>
                    <div className="text-[12px] font-bold flex gap-4 items-center justify-end pt-4 px-2">
                        <button className="text-[#E00409] border-[2px] border-[#E00409] px-2 py-2 rounded-lg">Acheter maintenant</button>
                        <button className="bg-[#E00409] border-[2px] border-[#E00409] text-white px-2 py-2 rounded-lg flex gap-2 items-center">Ajouter au panier <HiOutlineShoppingCart></HiOutlineShoppingCart></button>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
export default UperProductPage;