import React from 'react'
import { Link } from 'react-router-dom'
import { ContentCard } from './ContentCard'
import '../../styles/content.css'

export const Content = ({ items }) => {
  return (
    <>
      <section className='main'>
        <div className='container'>
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
