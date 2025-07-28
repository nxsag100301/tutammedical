import CustomBreadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import React from 'react'

const ChamSocTuTam = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giáo dục truyền thống', url: '/educationtraditional' },
    { title: 'Chăm sóc Từ Tâm', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Reveal initialY={50} delay={0.2}>
        <div className='px-6 lg:px-20 my-8 space-y-4'>
          <div className='font-bold text-2xl uppercase text-center text-primary-600'>
            Chăm sóc Từ Tâm - Nâng tầm Giá trị
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              Câu này có ý nghĩa: Việc chăm sóc bệnh nhân, người thân hay những
              người cần giúp đỡ bằng sự quan tâm sâu sắc, tận tình và chân thành
              ("Từ Tâm") sẽ mang lại giá trị to lớn. Giá trị ở đây không chỉ là
              sự hài lòng của người bệnh, mà còn là sự tin tưởng, niềm hy vọng
              và sự an ủi, từ đó nâng cao ý nghĩa và hiệu quả của mọi hành động
              chăm sóc.
            </div>
            <img src='/images/introduce1.jpg' />
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default ChamSocTuTam
