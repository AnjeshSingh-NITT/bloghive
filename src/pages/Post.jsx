import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    const formattedDate = post? new Date(post.$createdAt).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        })
    : "";

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl max-w-175 max-h-100 w-full h-auto object-contain"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <button 
                            className="inline-block px-5 py-2 rounded-full
                            bg-pink-600/20 text-white
                            border border-purple-500/30
                            hover:bg-red-600/30 hover:text-white
                            transition duration-200" 
                            onClick={deletePost}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>

                    <p className="mt-1 text-sm text-gray-400">
                        By{" "}
                        <span className="text-purple-400">
                        {post.authorName || "Unknown author"}
                        </span>{" "}
                        · {formattedDate}
                    </p>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}