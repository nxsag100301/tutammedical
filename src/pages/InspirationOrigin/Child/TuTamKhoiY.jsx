import CustomBreadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import React from 'react'

const TuTamKhoiY = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Khởi nguồn cảm hứng', url: '/inpirationorigin' },
    { title: 'Từ Tâm mà Khởi ý', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Reveal initialY={50} delay={0.2}>
        <div className='px-6 lg:px-20 my-8 space-y-4'>
          <h1 className='font-bold text-2xl uppercase text-center text-primary-600'>
            "Từ Tâm mà Khởi ý" - Nguồn gốc của Tầm nhìn
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <p>
                <strong>Đạo đức và Y đức làm nền tảng:</strong> Ngành y tế khác
                với các ngành kinh doanh thông thường. Khởi ý từ "tâm" nghĩa là
                xuất phát điểm của mọi dự án, mọi dịch vụ đều phải đặt lợi ích,
                sức khỏe và sự an toàn của bệnh nhân lên hàng đầu. Đây là yếu tố
                then chốt để xây dựng niềm tin - tài sản quý giá nhất trong y
                tế.
              </p>
              <p>
                <strong>Giá trị cộng đồng:</strong> Ý tưởng về một hệ thống y tế
                "GẦN ĐÂY" tiện lợi, cá nhân hóa, và một Trung tâm Đa khoa hàng
                đầu xuất phát từ mong muốn thực sự cải thiện chất lượng sống và
                tiếp cận dịch vụ y tế cho mọi người dân. Nó không chỉ là về lợi
                nhuận, mà còn là về một sứ mệnh cao cả hơn.
              </p>
            </div>
            <img src='/images/introduce1.jpg' />
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default TuTamKhoiY
