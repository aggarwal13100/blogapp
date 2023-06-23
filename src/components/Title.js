import React from 'react'
import { useNavigate } from 'react-router-dom'

const Title = ({title}) => {
    const navigate = useNavigate();
    return (
        <div className=' flex items-center pl-8'>
            <button  className='border h-fit text-text-primary bg-bg-secondary p-1 px-2 rounded-lg text-sm font-semibold'
            onClick = {() => navigate(-1)}
            >
            Back
            </button>
            <h2 className='font-bold text-text-primary text-xl pl-2'>{title}</h2> 
        </div>
    )
}

export default Title