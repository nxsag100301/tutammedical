import React from 'react'

const NewsCard = ({ id, image, title, subTitle }) => {
  return (
    <div className='rounded-xl shadow-lg border space-y-2 cursor-pointer'>
      <img
        src='/images/card.webp'
        className='h-[220px] w-full object-cover rounded-tl-xl rounded-tr-xl'
      />
      <div className='px-3 space-y-2 pb-4'>
        <p className='text-primary-400 font-bold line-clamp-2'>
          Bộ Y Tế: Sáp nhập địa giới hành chính, quyền lợi khám chữa bệnh BHYT
          vẫn luôn được đảm bảo
        </p>
        <p className='text-gray-400 line-clamp-3'>
          SKĐS - Bộ Y tế đang phối hợp với Bảo hiểm xã hội Việt Nam cập nhật
          danh mục cơ sở khám chữa bệnh trong hệ thống dữ liệu, bảo đảm người
          dân không bị gián đoạn quyền lợi khám chữa bệnh do thay đổi địa giới
          hành chính.
        </p>
      </div>
    </div>
  )
}

export default NewsCard
