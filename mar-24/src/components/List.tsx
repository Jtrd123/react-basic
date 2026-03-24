import React from 'react'

interface ListProps<T>{
  items: T[]
  render: (item: T) => React.ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{render(item)}</div>
      ))}
    </div>
  )
}

export default List