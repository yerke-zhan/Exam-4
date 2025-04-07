import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function BookDetail() {
  let { id } = useParams()
  const [book, setBook] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  let filteredBook;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books`)
        setBook(response.data)
        setIsLoading(false)
      } catch (err) {
        console.error(err.message)
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  if(book){
    filteredBook = book.find(kitap=> kitap.id == id)
  }

  if (isLoading) return <h3>Loading...</h3>
  if (error) return <h3 style={{ color: 'red' }}>Error: {error}</h3>

  return (
    <div className='main'>
      <div className='image-box'>
        <img
          className='poster'
          src={filteredBook.image || 'https://via.placeholder.com/300x450'}
          alt='book cover'
        />
      </div>

      <div className='detailed-info'>
        <h1>{filteredBook.title} <span>({filteredBook.author})</span></h1>
        
        <p>{filteredBook.description}</p>

        
         
         
        </div>

        
        </div>
     
   
  )
}
