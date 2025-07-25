import React from 'react'

const NewsCard = ({ id, image, title, subTitle }) => {
  return (
    <div className='rounded-xl shadow-lg border space-y-2 cursor-pointer'>
      <img
        src='/images/card.jpg'
        className='h-[220px] w-full object-cover rounded-tl-xl rounded-tr-xl'
      />
      <div className='px-3 space-y-2 pb-4'>
        <p className='text-primary-400 font-bold line-clamp-2'>
          Thương mại điện tử (E-Commerce) HIU - “Bộ não vận hành” của mọi giao
          dịch online
        </p>
        <p className='text-gray-400 line-clamp-3'>
          Trong thời đại kinh tế số phát triển bùng nổ, ngành Thương mại điện tử
          HIU đang trở thành lựa…
        </p>
      </div>
    </div>
  )
}

export default NewsCard
