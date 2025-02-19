import React, { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditBooks = () => {
  const [title,setTitle]=useState("")
  const[author,setAuthor]=useState('')
  const[publishYear,setPublishyear]=useState('')
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`https://localhost:5050/books${id}`)
    .then((res)=>{
      setAuthor(res.data.author)
      setTitle(res.data.title)
      setPublishyear(res.data.publishYear)
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  },[])
  const handleEditBook=()=>{
    const data={
      title,
      author,
      publishYear
    }
    setLoading(true)
    axios.put(`http://localhost:5050/books/${id}`,data)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {
        loading?<Spinner/>:""
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-44 text-gray-500'>Title</label>
          <input
          type='text'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-44 text-gray-500'>Author</label>
          <input
          type='text'
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-44 text-gray-500'>Publish Year</label>
          <input
          type='number'
          value={publishYear}
          onChange={(e)=>setPublishyear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-400 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBooks
