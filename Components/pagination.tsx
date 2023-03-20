import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
const Pagination=(props:any)=> {

    const direction=useSelector((state:any)=>state.main.dir)
    let pages = [];

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pages.push(i);
    }
    const prev=()=>{
        if(props.currentPage>1) props.setCurrentPage(props.currentPage - 1)
    }
    const next=()=>{
        if(props.currentPage<pages.length) props.setCurrentPage(props.currentPage + 1)
    }
      const Set=(Current:number)=>{
      props.setCurrentPage(Current)
    }
  return (
  <div className={`flex ${direction ? "flex-row" : "flex-row-reverse"} gap-1 h-max m-5 self-end`} >
   
 <div className='bg-[#F9D9DA] p-2 sm:p-4 rounded-full group hover:bg-[#fcd2d4] hover:cursor-pointer h-[50px] w-[50px] flex items-center justify-center' onClick={()=>{prev()}}>
    <BsArrowLeft className='group-hover:text-black text-sm sm:text-lg'></BsArrowLeft>
</div>
    
{  props.currentPage>2 && <>
    { props.currentPage==pages.length && <>
 <div  className={`text-lg    rounded-[10px] w-[50px] h-[50px]  grid items-center justify-center cursor-pointer font-semibold text-[#4D4D81CC]] `}  onClick={()=>Set(props.currentPage-3)}>
        {props.currentPage-3}
 </div>       
    <div  className={`text-lg  rounded-[10px] w-[50px] h-[50px]  grid items-center justify-center cursor-pointer font-semibold text-[#4D4D81CC] `}  onClick={()=>Set(props.currentPage-2)} >
        {props.currentPage-2}
         </div> 
 </>
}
</>

}

{ props.currentPage>2 && <>
    { props.currentPage==pages.length-1 &&  <div  className={`text-lg    rounded-[10px] w-[50px] h-[50px]  grid items-center justify-center cursor-pointer font-semibold text-[#4D4D81CC]`} 
onClick={()=>Set(props.currentPage-2)} >
        {props.currentPage-2}
         </div> 
}
</>

}
{
    pages.map(page=>{
      return  <div key={page}  className={`text-lg    rounded-[10px] w-[50px] h-[50px] grid items-center justify-center cursor-pointer font-semibold 
      ${page==props.currentPage ? "text-black" : "text-[#4D4D81CC]"} ${page>props.currentPage+2 && "hidden"} ${page<props.currentPage-1 && "hidden"} `} 
   onClick={()=>Set(page)}   >
        {page} ,
         </div> 
    })
}
 { pages.length>3 && <>
 
 { props.currentPage==1 && <div  className={`text-lg    rounded-[10px] w-[50px] h-[50px] grid items-center justify-center cursor-pointer font-semibold text-[#4D4D81CC] `}
 onClick={()=>Set(props.currentPage+3)} >
         {props.currentPage+3}
          </div> 
 }
 </> }

     <div className='bg-[#E0EFF6] p-2 sm:p-4 rounded-full group hover:bg-[#aee5ff] hover:cursor-pointer ease-in duration-800 h-[50px] w-[50px] flex items-center justify-center'  onClick={()=>{next()}}>
        <BsArrowRight className='text-sm sm:text-lg group-hover:text-black'></BsArrowRight>
    </div>

  </div>
  )
}
export default Pagination;