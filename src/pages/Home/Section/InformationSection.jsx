import NewsCard from '@/components/NewsCard'
import { Button } from '@/components/ui/button'

const InformationSection = () => {
  return (
    <div className='mt-6 md:mt-10 px-6 lg:px-20'>
      <p className='text-xl font-bold text-primary-500 text-center'>
        Thông tin - Khám phá
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-6'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className='flex justify-center'>
        <Button variant='outline'>Xem thêm</Button>
      </div>
    </div>
  )
}

export default InformationSection
