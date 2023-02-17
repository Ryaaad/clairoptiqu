import { useSelector } from "react-redux";

const SideNav = (props: { category: (arg0: String) => void; }) => {
    const LangCategory=useSelector((state:any)=>state.main.Lang.SideNav)
    return ( 
    <div className="z-[2]" >
        <div className="hidden sm:block text-white bg-[#4D4D81]  sm:w-[160xp] lg:w-[200px] rounded-tl-2xl rounded-br-2xl min-h-[400px] h-[calc(100%-90px)] py-4 px-8">
            <h1 className="sm:text-xl lg:text-[25px] sm:mb-[20px] lg:mb-[30px] font-bold cursor-pointer" onClick={()=>{props.category("")}}>{LangCategory.Categorie}</h1>
            <ul className= "sm:text-[16px] sm:gap-4 lg:text-lg  flex flex-col lg:gap-8" >
                <li className="cursor-pointer" onClick={()=>{props.category("Homme")}}>{LangCategory.Homme} </li>
                <li className="cursor-pointer" onClick={()=>{props.category("Femme")}}>{LangCategory.Femme}</li>
                <li className="cursor-pointer" onClick={()=>{props.category("Enfant")}}>{LangCategory.Enfants}</li>
            </ul>
        </div>
        <div className="sm:hidden w-full flex items-center justify-center">
            <div>
            <h1 className="text-[20px] mb-2 font-bold text-[#4D4D81] " onClick={()=>{props.category("")}}>{LangCategory.Categorie}</h1>
            <ul className="text-[16px] flex text-white gap-2" >
                <li className="bg-[#4D4D81] flex items-center py-2 px-1 rounded-tl-md rounded-br-md" onClick={()=>{props.category('homme')}}>{LangCategory.Homme}</li>
                <li className="bg-[#4D4D81] flex items-center py-2 px-1 rounded-tl-md rounded-br-md" onClick={()=>{props.category('femme')}}>{LangCategory.Femme}</li>
                <li className="bg-[#4D4D81] flex items-center py-2 px-1 rounded-tl-md rounded-br-md" onClick={()=>{props.category('enfant')}}>{LangCategory.Enfants}</li>
            </ul>
            </div>
        </div>
    </div> );
}
 
export default SideNav;