import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = ({post}) => {
    const {title , author , date  , tags , content , id , category } = post;
  return (
    <div className='border rounded-xl p-3 my-4 px-4 shadow-lg bg-bg-secondary'>
        <NavLink to={`/blog/${id}`}>
            <p className='font-semibold text-text-primary text-lg italic'>{title}</p>
        </NavLink>
        <div className='flex justify-between  text-text-primary text-sm my-1'>
            <span className='font-semibold text-text-primary '>{`By ${author} on `}
                <NavLink className={`underline font-bold italic`} to = {`/categories/${category}`}>{category}</NavLink>
            </span>
            <span className='font-semibold italic text-text-primary text-xs border rounded-md shadow-md px-1'>{date}</span>
        </div>
        <p className='text-sm py-2 font-[400] text-text-secondary leading-5'>
            {content}
        </p>
        <div className='flex gap-x-2 text-sky-600 underline flex-wrap font-semibold text-xs pb-2'>
            {tags.map((tag,index) => (
                <div key={index}>
                    <NavLink to = {`/tags/${tag}`}>{`#${tag}`}</NavLink>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Card