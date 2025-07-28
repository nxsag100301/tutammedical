import CustomBreadcrumb from '@/components/Breadcrumb'
import React from 'react'

const CoreValues = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giới thiệu', url: '/introduce' },
    { title: 'Giá trị cốt lõi', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <div className='px-6 lg:px-20 my-8 space-y-4'>
        <div className='font-bold text-2xl uppercase text-center text-primary-600'>
          Giá trị cốt lõi
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='text-justify space-y-2'>
            <div class='space-y-4 text-sm leading-relaxed'>
              <div>
                <h3 class='text-lg font-semibold'>Từ Tâm</h3>
                <p>
                  Chúng tôi đặt trái tim người bệnh làm trung tâm, mọi quyết
                  định đều bắt đầu từ lòng nhân ái và sự thấu hiểu.
                </p>
              </div>

              <div>
                <h3 class='text-lg font-semibold'>Chính Trực</h3>
                <p>
                  Trung thực trong chuyên môn, minh bạch trong dịch vụ. Uy tín
                  là nền tảng tạo nên niềm tin và sự gắn bó lâu dài.
                </p>
              </div>

              <div>
                <h3 class='text-lg font-semibold '>Cá Nhân Hóa</h3>
                <p>
                  Mỗi người bệnh là một câu chuyện riêng. Chúng tôi lắng nghe và
                  thiết kế hành trình chăm sóc phù hợp với từng người.
                </p>
              </div>

              <div>
                <h3 class='text-lg font-semibold'>Kết Nối Liên Tục</h3>
                <p>
                  Không chỉ là một lần khám – mà là cả một hành trình đồng hành.
                  Công nghệ và con người cùng phối hợp để giữ liên lạc xuyên
                  suốt giữa bác sĩ và bệnh nhân.
                </p>
              </div>

              <div>
                <h3 class='text-lg font-semibold'>Tiện Lợi – Gần Gũi</h3>
                <p>
                  Phòng khám và nhà thuốc nằm ngay trong khu dân cư, thuận tiện
                  cho mọi người dân tiếp cận y tế “Gần đây – Tình làng nghĩa
                  xóm”.
                </p>
              </div>
            </div>
          </div>
          <img src='/images/introduce2.jpg' className='rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default CoreValues
