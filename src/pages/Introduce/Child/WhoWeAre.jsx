import CustomBreadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import React from 'react'

const WhoWeAre = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giới thiệu', url: '/introduce' },
    { title: 'Chúng tôi là ai', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Reveal initialY={50} delay={0.2}>
        <div className='px-6 lg:px-20 my-8 space-y-4'>
          <div className='font-bold text-2xl uppercase text-center text-primary-600'>
            Chúng tôi là ai?
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='text-justify space-y-2'>
              <div>
                <strong>Từ Tâm</strong> - không chỉ là tên của Tập đoàn Y khoa
                Quốc tế sáng lập nên dự án này, mà còn là kim chỉ nam cho mọi
                hoạt động của chúng tôi. Với tâm niệm “làm y bằng cái tâm trong
                sáng”, chúng tôi kiến tạo mô hình phòng khám chuyên khoa{' '}
                <strong>Y học Gia đình kết hợp Nhà thuốc</strong> mang thương
                hiệu cá nhân hóa{' '}
                <strong>“Gần Đây” - “Tình làng nghĩa xóm”</strong> một giải pháp
                y tế gần gũi, tiện lợi, và thấu hiểu người bệnh.
              </div>
              <div>
                Dự án ra đời với mong muốn mỗi người dân, dù ở khu dân cư, thành
                thị hay vùng ven, đều có thể tiếp cận{' '}
                <strong>dịch vụ y tế chất lượng cao ngay gần nhà</strong>. Không
                cần phải chờ đợi lâu, không cần đi xa, bệnh nhân vẫn nhận được
                sự chăm sóc toàn diện, lâu dài và mang tính cá nhân hóa, dưới sự
                đồng hành của đội ngũ y bác sĩ tận tâm và công nghệ hỗ trợ hiện
                đại.
              </div>
              <div>
                Chúng tôi tin rằng, khi y tế xuất phát từ “Từ Tâm”, từng trải
                nghiệm khám chữa bệnh sẽ trở nên nhẹ nhàng hơn, gần gũi hơn và
                xứng đáng với niềm tin mà người bệnh trao gửi.
              </div>
            </div>
            <img src='/images/introduce1.jpg' className='rounded-md' />
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default WhoWeAre
