import React from 'react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

const CustomBreadcrumb = ({ data, image }) => {
  return (
    <div className='h-[150px] sm:h-[250px] md:h-[300px] w-full relative'>
      <img
        src={image || '/images/banner5.png'}
        className='w-full h-full object-cover'
        alt='Banner'
      />

      <div className='absolute top-1/2 ml-6 lg:ml-20 -translate-y-1/2 w-[70%] lg:w-[50%] max-w-screen-xl bg-[#00000080] backdrop-blur-sm text-white px-4 md:px-8 py-2 sm:py-4 rounded-lg shadow-md'>
        <div className='text-xl md:text-3xl font-bold mb-2'>
          {data?.[data.length - 1]?.title || 'Tiêu đề'}
        </div>

        <Breadcrumb>
          <BreadcrumbList className='flex flex-wrap items-center gap-x-2 text-sm md:text-base'>
            {data?.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.url ? (
                    <BreadcrumbLink href={item.url}>
                      {item.title}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbLink>{item.title}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < data.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default CustomBreadcrumb
