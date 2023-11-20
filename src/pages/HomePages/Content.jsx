import React from 'react'
import { Link } from 'react-router-dom'
import { ContentCard } from './ContentCard'

export const Content = ({ items, title }) => {
  return (
    <>
      <section className='main'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>{title}</h1>
            <Link to='/'>View all</Link>
          </div>
          <div className='content'>
            {items.map((item) => (
                <Link key={item.id} to={`/${item.id}`}>
                  <ContentCard key={item.id} item={item} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
