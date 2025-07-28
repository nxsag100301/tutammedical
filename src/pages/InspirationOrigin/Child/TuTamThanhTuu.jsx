import CustomBreadcrumb from '@/components/Breadcrumb'
import React from 'react'

const TuTamThanhTuu = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Khởi nguồn cảm hứng', url: '/inpirationorigin' },
    { title: 'Từ Tâm mới thành tựu', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <div className='px-6 lg:px-20 my-8 space-y-4'>
        <div className='font-bold text-2xl uppercase text-center text-primary-600'>
          "Từ Tâm mới Thành tựu" - Ý nghĩa của Sự thành công đích thực
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <p>
              <strong>Thành tựu toàn diện:</strong> Thành tựu không chỉ là con
              số doanh thu, lợi nhuận, hay số lượng chi nhánh. Thành tựu lớn
              nhất chính là sự tin tưởng của bệnh nhân, sức khỏe được cải thiện
              của cộng đồng, và sự phát triển bền vững của một hệ thống y tế
              thực sự chất lượng.
            </p>
            <p>
              <strong>Giá trị trường tồn:</strong> Một thương hiệu được xây dựng
              trên nền tảng "từ tâm" sẽ có giá trị trường tồn, vượt qua mọi biến
              động thị trường. Niềm tin của bệnh nhân và uy tín của đội ngũ y
              bác sĩ là tài sản vô giá mà tiền bạc không thể mua được.
            </p>
            <p>
              <strong>Hấp dẫn nhân tài và nhà đầu tư:</strong> Khi một doanh
              nghiệp hoạt động với trái tim và cam kết về giá trị, nó sẽ thu hút
              được những con người tài năng, tận tâm và cả những nhà đầu tư có
              cùng tầm nhìn, mong muốn đóng góp vào một điều lớn lao hơn là chỉ
              lợi nhuận.
            </p>
          </div>
          <img src='/images/introduce2.jpg' />
        </div>
      </div>
    </div>
  )
}

export default TuTamThanhTuu
