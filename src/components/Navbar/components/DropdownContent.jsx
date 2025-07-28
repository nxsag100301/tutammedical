import React from 'react'
import { useNavigate } from 'react-router-dom'

const Column = ({ title, columnChildren, columnUrl, columnOpenUrl }) => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <div
        className={`px-2 py-1 rounded-md font-semibold text-primary-600 text-sm ${
          columnUrl
            ? 'cursor-pointer hover:bg-primary-100'
            : columnOpenUrl
            ? 'cursor-pointer hover:bg-primary-100'
            : ''
        }`}
        onClick={
          columnUrl
            ? () => navigate(columnUrl)
            : columnOpenUrl
            ? () => (window.location.href = columnOpenUrl)
            : ''
        }
      >
        {title}
      </div>
      <div className='space-y-1  text-sm '>
        {columnChildren &&
          columnChildren.length > 0 &&
          columnChildren.map((item, index) => (
            <div
              key={index}
              className='px-5 rounded-md cursor-pointer py-1 hover:bg-primary-100'
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  )
}

const DropdownContent = ({ columnData }) => {
  return (
    <div className='grid grid-cols-1'>
      {columnData &&
        columnData.length > 0 &&
        columnData.map((item, index) => (
          <Column
            key={index}
            title={item.columnTitle}
            columnChildren={item.children}
            columnUrl={item?.url}
            columnOpenUrl={item?.openUrl}
          />
        ))}
    </div>
  )
}

export default DropdownContent
