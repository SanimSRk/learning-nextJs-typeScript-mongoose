import Cards from '@/components/Cards/Cards';
import React from 'react'

const Products =async () => {
   interface pathos {
        albumId: number;
        id: number;
        title:string;
        url: string;
        thumbnailUrl:string
      }

    const product=await fetch('https://jsonplaceholder.typicode.com/photos')
    const data=await product.json()
   
  return (
    <div className='grid lg:grid-cols-4 gap-5'>
     {
        data.map((produc:pathos)=><Cards key={produc.id} produc={produc}></Cards>)
     }
    </div>
  )
}

export default Products
