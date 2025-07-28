import CustomBreadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import React from 'react'

const Vision = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giới thiệu', url: '/introduce' },
    { title: 'Tầm nhìn', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Reveal initialY={50} delay={0.2}>
        <div className='px-6 lg:px-20 my-8 space-y-4'>
          <div className='font-bold text-2xl uppercase text-center text-primary-600'>
            Tầm nhìn
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='text-justify'>
              Chúng tôi hướng đến xây dựng một hệ sinh thái y tế{' '}
              <strong>gần gũi và nhân văn</strong>, nơi mỗi người dân đều có thể
              tiếp cận dịch vụ chăm sóc sức khỏe chất lượng cao{' '}
              <strong>gngay gần nhà</strong>, được đồng hành trọn đời bởi đội
              ngũ bác sĩ tận tâm và công nghệ hiện đại. Với nền tảng là{' '}
              <strong>Tập đoàn Y khoa Quốc tế Từ Tâm</strong>, chúng tôi không
              ngừng mở rộng mạng lưới phòng khám - nhà thuốc “Gần Đây” khắp các
              khu dân cư, đô thị và vùng ven, từng bước hiện thực hóa giấc mơ{' '}
              <strong>chăm sóc sức khỏe bằng trái tim, lan tỏa từ tâm</strong>.
            </div>
            <img src='/images/introduce2.jpg' className='rounded-md' />
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Vision
