import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen bg-[#0f0a1b] text-gray-200">
      <div className="w-full flex flex-col min-h-screen">
        
        <Header />

        <main className="grow px-4 py-8">
          <Outlet />
        </main>

        <Footer />

      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0a1b] text-gray-400">
      Loading...
    </div>
  )
}

export default App
