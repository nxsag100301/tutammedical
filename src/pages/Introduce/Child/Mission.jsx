import CustomBreadcrumb from '@/components/Breadcrumb'
import React from 'react'

const Mission = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giới thiệu', url: '/introduce' },
    { title: 'Sứ mệnh', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <div className='px-6 lg:px-20 my-8 space-y-4'>
        <div className='font-bold text-2xl uppercase text-center text-primary-600'>
          Sứ mệnh
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='text-justify space-y-2'>
            <div>
              Chúng tôi mang trong mình sứ mệnh{' '}
              <strong>
                kết nối người dân với dịch vụ chăm sóc sức khỏe tận tâm, liên
                tục và cá nhân hóa
              </strong>
              , thông qua mô hình phòng khám - nhà thuốc tích hợp, đặt ngay
              trong cộng đồng.
            </div>
            <div>
              Với triết lý <strong>“y tế từ tâm”</strong>, chúng tôi:
            </div>
            <div>
              <ul className='list-disc pl-4'>
                <li>
                  Đồng hành cùng bệnh nhân trong suốt hành trình chăm sóc sức
                  khỏe - từ dự phòng, chẩn đoán đến điều trị và theo dõi lâu
                  dài.
                </li>
                <li>
                  Tận dụng công nghệ để kết nối bác sĩ và bệnh nhân một cách
                  liền mạch, không gián đoạn.
                </li>
                <li>
                  Phát triển mạng lưới phòng khám và nhà thuốc tiện lợi, gần
                  gũi, giúp mọi người được chăm sóc y tế chất lượng ngay nơi họ
                  sống và làm việc.
                </li>
              </ul>
            </div>
            <div>
              Chúng tôi tin rằng sự <strong>thấu hiểu và gần gũi</strong> là nền
              tảng để tạo nên một dịch vụ y tế nhân bản, bền vững và đáng tin
              cậy.
            </div>
          </div>
          <img src='/images/introduce1.jpg' className='rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default Mission
