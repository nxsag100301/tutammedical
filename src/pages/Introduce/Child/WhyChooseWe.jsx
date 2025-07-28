import CustomBreadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import React from 'react'

const WhyChooseWe = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Giới thiệu', url: '/introduce' },
    { title: 'Tại sao chọn Từ Tâm Medical?', url: null }
  ]
  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Reveal initialY={50} delay={0.2}>
        <div className='px-6 lg:px-20 my-8 space-y-4'>
          <div className='font-bold text-2xl uppercase text-center text-primary-600'>
            Tại sao chọn Từ Tâm Medical?
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
            <div className='text-justify space-y-2'>
              <div class='space-y-4 text-sm leading-relaxed'>
                <div>
                  <h3 class='text-base font-semibold'>
                    1. Chăm sóc sức khỏe từ trái tim – không chỉ từ chuyên môn
                  </h3>
                  <p>
                    Từ Tâm Medical không đơn thuần là một phòng khám – đó là nơi
                    người bệnh được lắng nghe, thấu hiểu và đồng hành lâu dài,
                    với tinh thần y khoa nhân bản. Chúng tôi đặt “từ tâm” làm
                    nền tảng cho mọi hành động.
                  </p>
                </div>

                <div>
                  <h3 class='text-base font-semibold'>
                    2. Mô hình tích hợp tiện lợi – khám bệnh và nhà thuốc tại
                    chỗ
                  </h3>
                  <p>
                    Không cần đi xa, không mất thời gian chờ đợi, bệnh nhân có
                    thể khám – nhận thuốc – theo dõi điều trị ngay trong một địa
                    điểm duy nhất, tiết kiệm thời gian và tối ưu hiệu quả chăm
                    sóc.
                  </p>
                </div>

                <div>
                  <h3 class='text-base font-semibold'>
                    3. Cá nhân hóa điều trị – mỗi người là một kế hoạch riêng
                  </h3>
                  <p>
                    Không có bệnh nhân nào giống nhau. Từ Tâm Medical xây dựng
                    lộ trình khám, điều trị và theo dõi riêng biệt cho từng
                    người, dựa trên tình trạng sức khỏe và nhu cầu cụ thể.
                  </p>
                </div>

                <div>
                  <h3 class='text-base font-semibold'>
                    4. Bác sĩ giỏi – công nghệ hiện đại – kết nối xuyên suốt
                  </h3>
                  <p>
                    Đội ngũ y bác sĩ tại Từ Tâm là những người vừa có chuyên môn
                    vững, vừa có y đức sáng, luôn sẵn sàng kết nối với bệnh nhân
                    trước – trong – sau quá trình điều trị.
                  </p>
                  <p>
                    Công nghệ máy móc hiện đại, hỗ trợ tầm soát các chỉ dấu ung
                    thư, phát hiện sớm – theo dõi đúng – điều trị kịp thời là
                    chìa khóa để nâng cao chất lượng sống và giảm thiểu biến
                    chứng cho người bệnh.
                  </p>
                </div>

                <div>
                  <h3 class='text-base font-semibold'>
                    5. Hiểu cộng đồng – gắn bó bền vững
                  </h3>
                  <p>
                    Chúng tôi lựa chọn đặt phòng khám trong khu dân cư, đô thị,
                    vùng ven, để luôn ở gần người dân khi họ cần nhất – và trở
                    thành một phần trong cộng đồng đó, không chỉ là nơi đến khi
                    bệnh.
                  </p>
                </div>
              </div>
            </div>
            <img src='/images/introduce2.jpg' className='rounded-md' />
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default WhyChooseWe
