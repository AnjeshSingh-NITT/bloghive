import React from 'react'
import { Link } from 'react-router'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-[#0f0a1b] border-t border-purple-900/40 p-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-12 justify-between">

          {/* Left: Logo + description */}
          <div className="max-w-sm">
            <Logo width="100px" />
            <p className="mt-4 text-sm text-gray-400">
              A simple blog platform where anyone can share thoughts, stories, and images.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} Anjesh Singh
            </p>
          </div>

          {/* Middle: Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-purple-400">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="text-gray-200 hover:text-purple-400 transition" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-200 hover:text-purple-400 transition" to="/all-posts">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="text-gray-200 hover:text-purple-400 transition" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Socials */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-purple-400">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/AnjeshSingh-NITT/bloghive/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:text-purple-400 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anjeshsingh-nitt/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:text-purple-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:singhanjesh2005@gmail.com"
                  className="text-gray-200 hover:text-purple-400 transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
