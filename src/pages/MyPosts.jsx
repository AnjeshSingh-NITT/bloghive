import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function MyPosts() {
  const [posts, setPosts] = useState([])
  const userData = useSelector(state => state.auth.userData)

  useEffect(() => {
    if (!userData) return

    appwriteService.getPosts([
      Query.equal("userId", userData.$id)
    ]).then((response) => {
      if (response?.rows) {
        setPosts(response.rows)
      } else {
        setPosts([])
      }
    })
  }, [userData])

  if (!userData) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold text-gray-400">
            Login to see your posts
          </h1>
        </Container>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold text-gray-400">
            You haven’t created any posts yet
          </h1>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default MyPosts
