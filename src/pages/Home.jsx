import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import BooksCard from '../components/BooksCard'
import BooksTable from '../components/BooksTable'
import MdOutlineAddBox from "react-icons"

function Home() {
    const [books,setBooks]=useState([])
    const [loading,setLoading]=useState(false)
    const [showType,setShowType]=useState('table')

    useEffect(()=>{
      setLoading(true)
      axios.get("http://localhost:5050/books")
      .then((res)=>{
        console.log("connected")
          setBooks(res.data.data)
          console.log(res.data.data)
          setLoading(false)
      })
      .catch((error)=>{
          console.log(error)
          setLoading(false)
      })
  },[])
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={()=>setShowType('table')}
        >
        </button>
        <button
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={()=>setShowType('card')}
        >
        </button>
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='books/create'>
        <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading?(<Spinner/>):(
       <BooksTable books={books}/>
      )
      }
    </div>
  )
}
// const showbook=async()=>{
//     try {
//         const response=await fetch("http://localhost:5050/books")
//         const data=await response.json()
//         console.log("api conneceted")
//     } catch (error) {
//      console.log("error in conneceting")   
//     }
// }

export default Home
