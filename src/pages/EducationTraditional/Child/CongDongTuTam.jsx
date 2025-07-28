import CustomBreadcrumb from '@/components/Breadcrumb'
import React from 'react'

const CongDongTuTam = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giáo dục truyền thống', url: '/educationtraditional' },
    { title: 'Cộng đồng Từ Tâm', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <div className='px-6 lg:px-20 my-8 space-y-4'>
        <div className='font-bold text-2xl uppercase text-center text-primary-600'>
          Cộng đồng Từ Tâm - Nâng tầm Lan tỏa
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            Câu này nhấn mạnh: Khi một cộng đồng cùng nhau hành động với tinh
            thần nhân ái, sẻ chia và lòng trắc ẩn ("Từ Tâm"), thì những điều tốt
            đẹp, những giá trị nhân văn sẽ được phổ biến rộng rãi hơn, lan tỏa
            mạnh mẽ hơn trong xã hội. Điều này tạo nên một môi trường sống tích
            cực và đầy yêu thương.
          </div>
          <img src='/images/introduce1.jpg' />
        </div>
      </div>
    </div>
  )
}

export default CongDongTuTam
