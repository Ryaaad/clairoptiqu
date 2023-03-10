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
  return (
    <div className={`flex ${direction ? "flex-row" : "flex-row-reverse"}  gap-1 justify-end sm:gap-3 py-2 font-semibold text-[#4D4D81CC] w-[40%] sm:w-[300px] self-end items-center`}>
    <div className='bg-[#F9D9DA] p-2 sm:p-4 rounded-full group hover:bg-[#fcd2d4] hover:cursor-pointer' onClick={()=>{prev()}}><BsArrowLeft className='group-hover:text-black text-sm sm:text-lg'></BsArrowLeft></div>
    <div className='text-sm sm:text-xl flex gap-[2px]'>
       {pages.map(page=>{
        let k
        if(page === pages.length){
             k=<p key={Math.random()} className={`text-sm  sm:text-xl ${page === props.currentPage ? "text-black" : ""} hover:cursor-pointer`} onClick={()=>{props.setCurrentPage(page)}}>{page}</p>  
        }
       else{ k=<p key={Math.random()} className={`text-sm  sm:text-xl ${page === props.currentPage ? "text-black" : ""} hover:cursor-pointer`} onClick={()=>{props.setCurrentPage(page)}}>{page} , </p>  }
       return k
    
    }
        )}
    </div>
    <div className='bg-[#E0EFF6] p-2 sm:p-4 rounded-full group hover:bg-[#aee5ff] hover:cursor-pointer ease-in duration-800'  onClick={()=>{next()}}><BsArrowRight className='text-sm sm:text-lg group-hover:text-black'></BsArrowRight></div>
</div>
  )
}
export default Pagination;