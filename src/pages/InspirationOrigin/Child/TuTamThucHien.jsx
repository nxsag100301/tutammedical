import CustomBreadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import React from 'react'

const TuTamThucHien = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Khởi nguồn cảm hứng', url: '/inpirationorigin' },
    { title: 'Từ Tâm mà thực hiện', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Reveal initialY={50} delay={0.2}>
        <div className='px-6 lg:px-20 my-8 space-y-4'>
          <h1 className='font-bold text-2xl uppercase text-center text-primary-600'>
            "Từ Tâm mà Thực hiện" - Con đường tới Mục tiêu
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <p>
                <strong>Chất lượng và sự chuyên nghiệp:</strong> "Thực hiện từ
                tâm" đòi hỏi phải đặt ra những tiêu chuẩn chất lượng cao nhất
                trong mọi khía cạnh: Từ đội ngũ y bác sĩ, quy trình khám chữa
                bệnh, đến cơ sở vật chất và công nghệ. Sự tận tâm phải thể hiện
                qua từng hành động cụ thể, dù là nhỏ nhất.
              </p>
              <p>
                <strong>Kiên trì và vượt qua thách thức:</strong> Hành trình xây
                dựng một tập đoàn y tế lớn, đặc biệt là vươn ra quốc tế, sẽ gặp
                vô vàn khó khăn. "Từ tâm mà thực hiện" nghĩa là giữ vững niềm
                tin, không ngừng học hỏi, thích nghi và kiên trì theo đuổi mục
                tiêu, ngay cả khi đối mặt với áp lực.
              </p>
              <p>
                <strong>Trách nhiệm xã hội:</strong> Thể hiện qua việc cung cấp
                dịch vụ y tế công bằng, có trách nhiệm, và luôn hướng tới những
                giải pháp bền vững cho cộng đồng.
              </p>
            </div>
            <img src='/images/introduce1.jpg' />
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default TuTamThucHien
