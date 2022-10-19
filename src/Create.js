import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('Mario');
    const [isLoading,setIsLoading]=useState(false);
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};

        setIsLoading(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("Blog added");
            setIsLoading(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                 type="text" 
                 required
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                 />
                <label>Blog Content:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;