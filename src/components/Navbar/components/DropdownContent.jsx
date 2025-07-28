import React from 'react'
import { useNavigate } from 'react-router-dom'

const Column = ({
  title,
  columnChildren,
  columnUrl,
  columnOpenUrl,
  columnGroups
}) => {
  const navigate = useNavigate()

  if (columnGroups) {
    return (
      <div className='space-y-4 min-w-[300px]'>
        {columnGroups.map((group, idx) => (
          <div key={idx}>
            <div
              className={`px-2 py-1 rounded-md font-semibold text-primary-600 text-sm ${
                group.url ? 'cursor-pointer hover:bg-primary-100' : ''
              }`}
              onClick={group.url ? () => navigate(group.url) : undefined}
            >
              {group.groupTitle}
            </div>
            <div className='space-y-1 text-sm max-w-[280px]'>
              {group.children.map((item, index) => (
                <div
                  key={index}
                  className='px-5 py-1 rounded-md cursor-pointer hover:bg-primary-100'
                  onClick={() => (item.url ? navigate(item.url) : undefined)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Trường hợp hiển thị cột bình thường
  return (
    <div className='min-w-[300px]'>
      <div
        className={`px-2 py-1 rounded-md font-semibold text-primary-600 text-sm ${
          columnUrl || columnOpenUrl
            ? 'cursor-pointer hover:bg-primary-100'
            : ''
        }`}
        onClick={
          columnUrl
            ? () => navigate(columnUrl)
            : columnOpenUrl
            ? () => (window.location.href = columnOpenUrl)
            : undefined
        }
      >
        {title}
      </div>
      <div className='space-y-1 text-sm max-w-[280px]'>
        {columnChildren?.map((item, index) => (
          <div
            key={index}
            className='px-5 py-1 rounded-md cursor-pointer hover:bg-primary-100'
            onClick={item.url ? () => navigate(item.url) : undefined}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}

const DropdownContent = ({ columnData, flexDirection, image }) => {
  return (
    <div className='flex flex-row gap-6 min-w-[800px] justify-between '>
      <div
        className={`flex ${
          flexDirection === 'column' ? 'flex-col' : 'flex-row'
        } gap-4`}
      >
        {columnData?.map((item, index) => (
          <Column
            key={index}
            title={item.columnTitle}
            columnChildren={item.children}
            columnUrl={item.url}
            columnOpenUrl={item.openUrl}
            columnGroups={item.columnGroups}
          />
        ))}
      </div>
      {image && (
        <img src={image} className='w-[50%] max-h-[300px] rounded-md m-4' />
      )}
    </div>
  )
}

export default DropdownContent
