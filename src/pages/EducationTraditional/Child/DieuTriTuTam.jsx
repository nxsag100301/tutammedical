import CustomBreadcrumb from '@/components/Breadcrumb'
import React from 'react'

const DieuTriTuTam = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giáo dục truyền thống', url: '/educationtraditional' },
    { title: 'Điều trị Từ Tâm', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <div className='px-6 lg:px-20 my-8 space-y-4'>
        <div className='font-bold text-2xl uppercase text-center text-primary-600'>
          Điều trị Từ Tâm - Nâng tầm Y Đức
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            Câu này muốn nói rằng: Phương pháp điều trị bệnh không chỉ dừng lại
            ở kiến thức chuyên môn hay kỹ thuật, mà còn phải xuất phát từ lòng
            nhân ái, sự thấu hiểu và trách nhiệm của người thầy thuốc ("Từ
            Tâm"). Khi đó, đạo đức nghề nghiệp của ngành y tế (Y Đức) sẽ được
            nâng cao, thể hiện sự tôn trọng và coi trọng bệnh nhân.
          </div>
          <img src='/images/introduce2.jpg' />
        </div>
      </div>
    </div>
  )
}

export default DieuTriTuTam
