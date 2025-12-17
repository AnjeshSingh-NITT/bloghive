import React from "react"
import { Container } from "../components"

function Contact() {
  return (
    <div className="min-h-screen bg-[#0f0a1b] text-gray-200 py-12">
      <Container>
        <div className="max-w-2xl mx-auto">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-2">
            Contact
          </h1>
          <p className="text-center text-gray-400 mb-8">
            Have a question, feedback, or just want to say hi?
          </p>

          {/* Card */}
          <div className="
            bg-[#120d22]
            border border-purple-500/20
            rounded-2xl
            p-8
            shadow-lg
          ">
            <form className="space-y-4">

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full px-3 py-2 rounded-lg
                    bg-[#0f0a1b] text-gray-200
                    border border-purple-500/30
                    outline-none
                    focus:border-purple-400
                    transition
                  "
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="
                    w-full px-3 py-2 rounded-lg
                    bg-[#0f0a1b] text-gray-200
                    border border-purple-500/30
                    outline-none
                    focus:border-purple-400
                    transition
                  "
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="
                    w-full px-3 py-2 rounded-lg
                    bg-[#0f0a1b] text-gray-200
                    border border-purple-500/30
                    outline-none
                    focus:border-purple-400
                    transition
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full mt-2
                  px-4 py-2 rounded-full
                  bg-purple-600/70 text-white
                  border border-purple-500/30
                  hover:bg-purple-600/30 hover:text-purple-200
                  transition
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Contact
