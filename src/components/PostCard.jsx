import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router'

function PostCard({ $id, title, featuredImage }) {
  // const previewUrl = appwriteService.getFilePreview(featuredImage);
  // console.log("featuredImage:", featuredImage);
  // console.log("previewUrl:", previewUrl);

  return (
    <Link to={`/post/${$id}`}>
      <div className="
        w-full rounded-xl p-4
        bg-[#0f0a1b]
        border border-purple-500/20
        hover:border-purple-400/40
        transition duration-200
      ">
        <div className="w-full mb-4 overflow-hidden rounded-xl">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="
              w-full h-48 object-cover
              rounded-xl
              hover:scale-105
              transition duration-300
            "
          />
        </div>

        <h2 className="text-lg font-semibold text-gray-200">
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard
