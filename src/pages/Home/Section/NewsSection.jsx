import NewsCard from '@/components/NewsCard'
import React from 'react'

const NewsSection = () => {
  return (
    <div className='mt-6 md:mt-10 px-6 lg:px-20'>
      <p className='text-xl font-bold text-primary-500 text-center'>
        Tin tức - Sự kiện
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default NewsSection
