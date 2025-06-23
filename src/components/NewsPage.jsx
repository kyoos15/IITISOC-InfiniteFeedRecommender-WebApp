import React, { useState } from 'react';
import { ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect } from 'react';
import { axiosInstance } from '../context/NewsContext';
import { useParams } from 'react-router-dom';
import { response } from 'express';

const NewsPage = () => {

    const { id } = useParams();
    const assetMongoDBId = id;
    const [foundedNews, setFoundedState] = useState({});
    useEffect(() => {
        console.log("id: ", id);
        
        const  findAssetById = async () => {
            const response = await axiosInstance.get(`/asset/getassetbyid/${assetMongoDBId}`);
            console.log("the response of newsPage is: ", response);
            setFoundedState(response.data.data);            
        }
        findAssetById();
    }, []);
    useEffect(() => {
        console.log("The updated asset is:", foundedNews);
    }, [foundedNews]);

    // remove this shit
    const blog = {
        title: "Build a Real-Time News AI Agent Using LangChain!",
        description: `
      <p>In the rapidly evolving landscape of artificial intelligence, AI agents have emerged as one of the most practical and powerful applications of large language models.</p>
      <p>Today, we’ll explore how to build a sophisticated real-time news AI agent that can fetch current events, perform web searches, and engage in meaningful conversations, all while running locally on your machine.</p>
      <h2>Understanding AI Agents</h2>
      <p>AI agents leverage LLMs like GPT to interpret tasks, generate responses, and use tools such as web search, calculators, and APIs autonomously.</p>
    `,
        createdAt: new Date().toISOString(),
        User: { username: "Harsh Anand" },
    };

    const name = blog.User.username || "?";
    const date = new Date(blog.createdAt);
    const formattedDate = `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = async () => {
        if (newComment.trim() === '') return; // return some toast etc here not just empty return;
        setComments([
            {
                id: Date.now(),
                text: newComment,
                likes: 0,
                liked: false,
                replyOpen: false,
                replies: [],
                replyText: ''
            },
            ...comments
        ]);
        setNewComment('');

        const commenterId = null // do something to fill this up.
        const sessionIsFor = "User"; // add this in context api and fill this up 
        if(sessionIsFor == "User") {
            const response = await axiosInstance.get(`/user/postcommentonasset/${commenterId}/${id}`);
        }
        if(response.ok == false){
            // some toast etc ..
            return;
        }
        console.log("response on creating comment is: ", response);
        // some toast etc ....

    };

    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
        }
    };

    const handleCommentLikeToggle = (id) => {
        setComments(comments.map(comment =>
            comment.id === id
                ? { ...comment, likes: comment.liked ? comment.likes - 1 : comment.likes + 1, liked: !comment.liked }
                : comment
        ));
    };

    const toggleReplyField = (id) => {
        setComments(comments.map(comment =>
            comment.id === id ? { ...comment, replyOpen: !comment.replyOpen } : comment
        ));
    };

    const handleReplySubmit = (id) => {
        setComments(comments.map(comment => {
            if (comment.id === id && comment.replyText.trim()) {
                return {
                    ...comment,
                    replies: [...comment.replies, { text: comment.replyText, id: Date.now() }],
                    replyText: '',
                    replyOpen: false,
                };
            }
            return comment;
        }));
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
            <h1 className="font-serif text-4xl font-bold mb-2 text-gray-800">{blog.title}</h1>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://avatar.vercel.sh/harsh" alt={name} />
                                <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="bg-white border shadow-lg rounded-md p-1">
                            <DropdownMenuItem className="cursor-pointer">View Profile</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Message</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600 cursor-pointer">Report</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-gray-700 font-medium">{name}</span>
                </div>
                <span>{formattedDate}</span>
            </div>

            <div className="flex items-center mb-6 space-x-2">
                <Button
                    variant="outline"
                    onClick={handleLike}
                    className="flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-800 cursor-pointer"
                >
                    <ThumbsUp className="w-4 h-4" />
                    {liked ? 'Liked' : 'Like'}
                </Button>
                <span className="text-sm text-gray-600">{likes} {likes === 1 ? 'like' : 'likes'}</span>
            </div>

            <div className="prose max-w-none mb-8 text-gray-800" dangerouslySetInnerHTML={{ __html: blog.description }} />

            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>
                <div className="mb-4">
                    <Textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write your comment here..."
                        rows={4}
                    />
                    <Button onClick={handleAddComment} className="mt-2 bg-violet-500 hover:bg-violet-600 text-white cursor-pointer">
                        Post Comment
                    </Button>
                </div>

                <div className="space-y-6">
                    {comments.length === 0 ? (
                        <p className="text-gray-500">No comments yet. Be the first!</p>
                    ) : (
                        comments.map((comment) => (
                            <div key={comment.id} className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Avatar className="cursor-pointer mt-1">
                                            <AvatarImage src={`https://avatar.vercel.sh/u${comment.id}`} alt="User" />
                                            <AvatarFallback>U</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="bg-white border shadow-md rounded-md p-1">
                                        <DropdownMenuItem className="cursor-pointer">View Profile</DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">Message</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600 cursor-pointer">Report</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-1">
                                        <span className="font-semibold text-gray-900">User {comment.id % 100}</span>
                                        <span className="text-sm text-gray-500 sm:ml-2">
                                            {new Date(comment.id).toLocaleDateString(undefined, {
                                                month: 'short', day: 'numeric', year: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    <p className="text-gray-800 text-sm mb-2">{comment.text}</p>

                                    <div className="flex items-center text-gray-500 text-sm gap-4">
                                        <button
                                            onClick={() => handleCommentLikeToggle(comment.id)}
                                            className={`inline-flex items-center gap-1 hover:text-blue-600 ${comment.liked ? 'text-blue-600' : ''} cursor-pointer`}
                                        >
                                            <ThumbsUp className="w-4 h-4" /> {comment.likes}
                                        </button>
                                        <button onClick={() => toggleReplyField(comment.id)} className="hover:text-blue-600 cursor-pointer">
                                            Reply
                                        </button>
                                    </div>

                                    {comment.replyOpen && (
                                        <div className="mt-2">
                                            <Textarea
                                                rows={2}
                                                value={comment.replyText}
                                                onChange={(e) => setComments(comments.map(c => c.id === comment.id ? { ...c, replyText: e.target.value } : c))}
                                                placeholder="Write a reply..."
                                            />
                                            <Button onClick={() => handleReplySubmit(comment.id)} className="mt-1 bg-violet-400 hover:bg-violet-500 text-white cursor-pointer">
                                                Submit Reply
                                            </Button>
                                        </div>
                                    )}

                                    {comment.replies.length > 0 && (
                                        <div className="mt-3 space-y-3 ml-4 border-l pl-4">
                                            {comment.replies.map(reply => (
                                                <div key={reply.id} className="flex items-start space-x-3">
                                                    <Avatar className="mt-1">
                                                        <AvatarImage src={`https://avatar.vercel.sh/r${reply.id}`} alt="Reply User" />
                                                        <AvatarFallback>R</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 bg-gray-100 p-3 rounded-lg">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="font-semibold text-gray-900 text-sm">User {reply.id % 100}</span>
                                                            <span className="text-xs text-gray-500">
                                                                {new Date(reply.id).toLocaleDateString(undefined, {
                                                                    month: 'short', day: 'numeric', year: 'numeric'
                                                                })}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-gray-800">{reply.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
