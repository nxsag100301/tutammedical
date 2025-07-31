import React from 'react'
import { Link } from 'react-router-dom'

const ListPage = ({ columnData }) => {
  return (
    <div className='w-full max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20 pt-10'>
      <div className='grid grid-cols-1 text-center sm:text-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {columnData.map((col, colIndex) => (
          <div key={colIndex}>
            {/* Column Title có url nội bộ */}
            {col.url && (
              <h3 className='font-bold text-base md:text-lg mb-2'>
                <Link to={col.url} className='hover:underline'>
                  {col.columnTitle}
                </Link>
              </h3>
            )}

            {/* Column Title có url ngoài */}
            {col.openUrl && (
              <h3 className='font-bold text-base md:text-lg mb-2'>
                <a
                  href={col.openUrl}
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {col.columnTitle}
                </a>
              </h3>
            )}

            {/* Column Title không có url */}
            {!col.url && !col.openUrl && col.columnTitle && (
              <h3 className='font-bold text-base md:text-lg mb-2'>
                {col.columnTitle}
              </h3>
            )}

            {/* Nếu có nhóm con (groupTitle) */}
            {col.columnGroups?.map((group, groupIndex) => (
              <div key={groupIndex} className='mb-4'>
                <h3 className='font-bold text-base md:text-lg mb-2'>
                  <Link
                    to={group.url || '#'}
                    className='hover:underline inline-block'
                  >
                    {group.groupTitle}
                  </Link>
                </h3>
                <ul className='mt-1 space-y-1'>
                  {group.children?.map((child, childIndex) => (
                    <h4>
                      <li key={childIndex}>
                        <Link
                          to={child.url || '#'}
                          className='hover:underline inline-block'
                        >
                          {child.title}
                        </Link>
                      </li>
                    </h4>
                  ))}
                </ul>
              </div>
            ))}

            {/* Nếu có children khác columnTitle */}
            {col.children?.length > 0 && (
              <ul className='space-y-1'>
                {col.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <Link
                      to={child.url || '#'}
                      className='hover:underline inline-block'
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPage
