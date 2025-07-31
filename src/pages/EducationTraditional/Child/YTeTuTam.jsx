import CustomBreadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import React from 'react'

const YTeTuTam = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giáo dục truyền thống', url: '/educationtraditional' },
    { title: 'Y Tế Từ Tâm', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Reveal initialY={50} delay={0.2}>
        <div className='px-6 lg:px-20 my-8 space-y-4'>
          <h1 className='font-bold text-2xl uppercase text-center text-primary-600'>
            Y tế Từ Tâm - Nâng tầm Sức khỏe
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              Câu này có nghĩa là: Khi dịch vụ y tế được thực hiện bằng cả tấm
              lòng, sự tận tâm và lòng trắc ẩn ("Từ Tâm"), thì chất lượng chăm
              sóc và kết quả điều trị sẽ được cải thiện đáng kể, từ đó nâng cao
              và cải thiện trình độ sức khỏe của cộng đồng lên một tầm cao mới.
              Đây không chỉ là việc chữa bệnh mà còn là chăm sóc toàn diện với
              sự đồng cảm.
            </div>
            <img src='/images/introduce2.jpg' />
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default YTeTuTam
