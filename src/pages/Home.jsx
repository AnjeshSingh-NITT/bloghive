import React from "react";
import { Container, Button } from "../components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


function Home() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="bg-linear-to-b from-[#0f0a1b] via-[#120c22] to-[#0f0a1b] text-gray-200">
      
      {/* HERO SECTION */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Write your <span className="text-green-400">thoughts</span> <br />
              Share your <span className="text-green-400">stories...</span>
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              A simple and beautiful place to write blogs, add images,
              and share what matters to you.
            </p>


            <div className="mt-8 flex gap-4">
              {authStatus ? (
                <Button onClick={() => navigate("/add-post")}>
                  Start Writing
                </Button>
              ) : (
                <Button onClick={() => navigate("/signup")}>
                  Get Started
                </Button>
              )}

              <button
                className="
                  inline-block px-5 py-2 rounded-full
                  bg-green-500/15 text-green-300
                  border border-green-500/30
                  hover:bg-green-500/25 hover:text-green-200
                  transition duration-200
                "
                onClick={() => navigate("/all-posts")}
              >
                Explore Posts
              </button>

            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 border-t border-purple-900/30">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            
            <FeatureCard
              title="Simple Writing"
              desc="Create posts easily with a clean editor that lets you focus on your words."
            />

            <FeatureCard
              title="Add Images"
              desc="Upload images to bring your stories to life."
            />

            <FeatureCard
              title="Your Space"
              desc="View all your posts in one place and manage them effortlessly."
            />

          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 border-t border-purple-900/30">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Ready to <span className="text-green-400">start writing</span>?
            </h2>

            <p className="mt-4 text-gray-400">
              Start writing your first post in under a minute.
            </p>

            <div className="mt-6">
              <Button onClick={() => navigate(authStatus ? "/add-post" : "/signup")}>
                Write Your First Post
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default Home;

/* Small helper component */
function FeatureCard({ title, desc }) {
  return (
    <div className="
      p-6 rounded-xl
      bg-purple-500/10
      border border-purple-500/20
      hover:bg-purple-500/20
      transition
    ">

      <h3 className="text-xl font-semibold text-purple-300">
        {title}
      </h3>
      <p className="mt-3 text-gray-400">
        {desc}
      </p>
    </div>
  );
}
