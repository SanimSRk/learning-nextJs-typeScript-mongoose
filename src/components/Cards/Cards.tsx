import Link from 'next/link'
import React from 'react'
// interface cardProps {
//     albumId: number;
//     id: number;
//     title:string
//     url: string;
//     thumbnailUrl:string
//   }
const Cards= ({produc}) => {
  return (
    <div className='rounded-lg p-4 grid items-end shadow-lg bg-slate-300 '>
      <img src={produc.url} alt="" />
      <h2 className='my-3'>{produc.title}</h2>
    <Link href={`Product/${produc.id}`}>
    <button className='w-full bg-green-400 text-white p-3'>View deatils</button>
    </Link>
    </div>
  )
}

export default Cards
