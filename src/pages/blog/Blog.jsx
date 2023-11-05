import React, { useEffect, useState } from 'react'
import Post from '../../components/Post/Post'
import styles from '../../styles/pages/blog/Blog.module.css'
import axios from 'axios'



const Blog = () => {

  const [blogs, setBlogs] = useState()

  const getData = async () => {
    const data = await axios('https://dummyjson.com/products')
    console.log(data.data.products);
    setBlogs(data.data.products)
    return data.data.products
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main className={styles.blog}>
      <div className={styles.blog_container}>
        {blogs?.map((blog) => (
          <Post key={blog.id} data={blog} />
        ))}
      </div>
    </main>
  )
}

export default Blog
