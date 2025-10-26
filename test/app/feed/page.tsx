"use client"
import { useState } from "react";

interface Post {
  name: string;
  text: string;
  likes: number;
}

export default function Feed() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [posts, setPosts] = useState<Post[]>([]); 
    
    const SubmitPost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) return;
        const newPost: Post = {
            name: name.trim(),
            text: text.trim(),
            likes: 0,
        };
        setPosts([newPost, ...posts]); 
        setName(""); 
        setText(""); 
    };
    const addLike = (index: number) => {
        const updatedPosts = [...posts]; 
        updatedPosts[index].likes += 1;  
        setPosts(updatedPosts);           
    };
return (
    <>
        <h1 className="text-center text-4xl font-bold mt-5 mb-5">Mini Social Feed</h1>
        <form onSubmit={SubmitPost} className="ml-110 mb-5">
            <input type="text" placeholder="Name.." className="text-xl w-75" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
        <form onSubmit={SubmitPost} className="ml-110">
            <input type="text" placeholder="Post..." className="text-xl w-75"  value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit" className="text-center text-2xl border-1 border-black w-30 rounded-full ml-15">Post</button>
       </form>
       <div className="flex flex-col items-center mt-10">
        {posts.map((post, index) => (
            <div key={index} className="p-5  text-center">
                <h2 className="text-2xl">{post.name}</h2>
                <p className="text-2xl">{post.text}</p>
                <button className="text-2xl" onClick={() => addLike(index)}>❤️ </button>
                <span className="text-2xl">{post.likes} Likes</span>
            </div>
        ))}
      </div>
    </>
  );
}