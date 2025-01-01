import React from 'react'
import _ from 'lodash'

interface Props{
    rows: any[]
    renderItem: (item: any, index: number) => JSX.Element
}

export default function CustomTable(props:Props) {
  const renderRow = (item: any, index: number) => {
    return (
      <div key={index}>
        {props.renderItem(item, index)}
      </div>
    )
  }

  return (
    <>
      {props.rows.map(renderRow)}
    </>
  )
}

interface ObjectPropertiesTable {
  item: object
  title?: string  // Optional title for the table
}

export function ObjectPropertiesTable(props: ObjectPropertiesTable) {
  const keys = Object.keys(props.item)

  const renderRow = (key: string, index: number) => {
    return (
      <div key={index} className='flex flex-row py-2 border-b border-gray-200 last:border-0'>
        <div className='w-1/3 font-medium text-gray-600'>{key}</div>
        <div className='w-2/3 ml-5'>{JSON.stringify(_.get(props.item, key))}</div>
      </div>
    )
  }

  return (
    <div className='bg-white rounded-lg shadow p-4'>
      {props.title && (
        <h3 className='text-lg font-semibold mb-4'>{props.title}</h3>
      )}
      <div className='divide-y divide-gray-200'>
        <CustomTable rows={keys} renderItem={renderRow} />
      </div>
    </div>
  )
}

interface ArrayTableProps {
  items: object[]
  title?: string
}

export function ArrayTable(props: ArrayTableProps) {
  const renderItem = (item: object, index: number) => {
    return (
      <div key={index} className='mb-4 last:mb-0'>
        <ObjectPropertiesTable 
          item={item} 
          title={`Item ${index + 1}`} 
        />
      </div>
    )
  }

  return (
    <div>
      {props.title && (
        <h2 className='text-xl font-bold mb-4'>{props.title}</h2>
      )}
      <CustomTable 
        rows={props.items} 
        renderItem={renderItem}
      />
    </div>
  )
}