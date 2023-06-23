import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
  const {page , totalPages , handlePageChange} = useContext(AppContext);
  return (
    <div className='bg-bg-secondary  text-text-primary shadow-md w-screen h-[3rem] fixed bottom-0 border-t border-t-[#ccc] flex justify-center ' >
      <div className='flex justify-between items-center mx-auto w-11/12 max-w-2xl'>
        <div className=' flex justify-between gap-x-2'>
          {/* Not Showing the previous button at Page 1 */}
          {page!==1 && (
            <button className='border-2 rounded-md p-1 pr-2 shadow-sm font-semibold text-sm'
            onClick={()=>{handlePageChange(page-1)}}
            >Previous</button>
            )}

          {/* Not Showing the next button at Last Page */}
          {page!==totalPages && (
            <button className='border-2 rounded-md p-1 pl-2 shadow-sm font-semibold text-sm'
            onClick={()=>{handlePageChange(page+1)}}
            >Next</button>
            )}
        </div>
        <div className='font-bold text-sm pr-6'>
            {`page ${page} of ${totalPages} `}
        </div>
      </div>
    </div>
  )
}

export default Footer