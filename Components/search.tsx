import {  AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return ( 
    <div className="p-2">
        <div className="h-[33px] sm:h-[50px] bg-[#F3F4F7] text-[#00000050] w-full flex items-center rounded-3xl p-2  sm:p-4 justify-between">
            <input type="text" className="w-[100%] bg-transparent outline-none " placeholder="search"/>
            <AiOutlineSearch className="text-[#E00409] h-[21px] w-[21px]"></AiOutlineSearch>
        </div>
    </div> );
}
 
export default Search;