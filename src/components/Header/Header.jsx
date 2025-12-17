import React from 'react'
import { Container, LogoutBtn, Logo } from '../index'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'My Posts',
      slug: "/my-posts",
      active: authStatus,
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]

  return (
  <header className="py-3 shadow-md bg-[#0f0a1b] border-b border-purple-900/40">
    <Container>
      <nav className="flex items-center">
        <div className="mr-6">
          <Link to="/">
            <Logo width="100px" />
          </Link>
        </div>

        <ul className="flex ml-auto items-center gap-2">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="
                    inline-block px-5 py-2 rounded-full
                    text-gray-200
                    hover:bg-purple-600/20 hover:text-purple-300
                    transition duration-200 cursor-pointer
                  "
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}

          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>
)}

export default Header