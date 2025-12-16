import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")

  const login = async (data) => {
    setError("")
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(authLogin(userData))
          navigate("/")
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0a1b] px-4">
      <div className="w-full max-w-md bg-[#120d22] border border-purple-500/20 rounded-2xl p-8 shadow-lg">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo width="80px" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-200 mb-2">
          Sign in to your account
        </h2>

        <p className="text-center text-sm text-gray-400 mb-6">
          Don&apos;t have an account?{' '}
          <Link
            to="/signup"
            className="text-purple-400 hover:text-purple-300 transition"
          >
            Sign up
          </Link>
        </p>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-400 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(login)} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\S+@\S+\.\S+$/.test(value) || "Email address must be valid",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />

          <Button type="submit" className="w-full mt-2">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login