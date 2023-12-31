import React from 'react'
import{AiOutlineSearch} from 'react-icons/ai'
import{AiOutlineCloseCircle } from 'react-icons/ai'
import{BsHouseDoor } from 'react-icons/bs'
import{CiLocationOn } from 'react-icons/ci'
const Search = () => {
  return (
    <div>
      <div className='search grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
        <form action="">

          <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bd white p-5 shadow-lg shadow-greyIsh-700'>
            
            <div className='flex gap-2 items-center'>
                <AiOutlineSearch className='text-[25px] icon' />
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here....'/>
                <AiOutlineCloseCircle  className='text-[30px] text-[#a5a6a6] hover:text-textcolor icon'/>
            </div>

            
            <div className='flex gap-2 items-center'>
                <BsHouseDoor  className='text-[25px] icon' />
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search For company....'/>
                <AiOutlineCloseCircle  className='text-[30px] text-[#a5a6a6] hover:text-textcolor icon'/>
            </div>

            
            <div className='flex gap-2 items-center'>
                <CiLocationOn className='text-[25px] icon' />
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Location....'/>
                <AiOutlineCloseCircle  className='text-[30px] text-[#a5a6a6] hover:text-textcolor icon'/>
            </div>

            <button className='bg-bluecolor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
          </div>

        </form>
        <div className='secDiv flex items-center gap-10 justify-center '>

          <div className='singlesearch flex items-center gap-2'>
            <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort By :</label>
            <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts With</option>
              <option value="">Contins</option>
              
            </select>

          </div>
          <div className='singlesearch flex items-center gap-2'>
            <label htmlFor="Type" className='text-[#808080] font-semibold'>Type:</label>
            <select name="" id="Type" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="">Full-Time</option>
              <option value="">Remoto</option>
              <option value="">Contract</option>
              <option value="">Part-Time</option>
              
            </select>

          </div>
          <div className='singlesearch flex items-center gap-2'>
            <label htmlFor="level" className='text-[#808080] font-semibold'>level:</label>
            <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="">Senier</option>
              <option value="">Brginner</option>
              <option value="">Intermidiate</option>
              <option value="">Advovate</option>
              
            </select>

          </div>
             <span className='text-[#alalal]'>Clear All</span>
        </div>


        

      </div>
    </div>
  )
}

export default Search
