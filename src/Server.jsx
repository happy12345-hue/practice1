import axios from "axios"
import {useState,useEffect} from "react";


 const api=axios.create({
        baseURL:"https://jsonplaceholder.typicode.com"
    })

const Server=()=>{
   const[posts,setPosts]=useState([]);
   const[loading,setLoading]=useState(true);
   const[error,setError]=useState(null);

   const[title,setTitle]=useState("");
   const[body,setBody]=useState("");
   const[message,setMessage]=useState("");


    useEffect(()=>{
      const fetchData=async()=>{
    try{
        setLoading(true);
  const res = await api.get("/posts");
  setPosts(res.data);
    }catch(error){
        setError(error.message || "any error");
    }finally{
setLoading(false);
    }}
fetchData();
    },[])
   
  async function handleSubmit(e){
    e.preventDefault();

    if(!title.trim() || !body.trim()){
        setMessage("Please Add TITLE and BODY");
        return ;
    }

    const newData={
        title:title,
        body:body,
        userId:1
    }

    const res = await api.post("/posts",newData);

    setTitle("");
setBody("");
setMessage("succeessFully");

    const postToAdd={
        ...res.data,
        id:Date.now(),
        title,
        body,
    }

setPosts((pre)=>[
    postToAdd,
    ...pre,
]);

  }


  if(loading) return <p>Loading......</p>
  if(error) return <p>Errror....</p>




    return(
        <>
    <form onSubmit={handleSubmit}>
  <input
    placeholder="Add title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <input
    placeholder="Add body"
    value={body}
    onChange={(e) => setBody(e.target.value)}
  />

  <button type="submit">Add post</button>
</form>
{message && <p>{message}</p>}



        {
            posts.map((user)=>(
              <div key={user.id}>
        <h1>{user.id}</h1>
        <h2>{user.title}</h2>
        <p>{user.body}</p>

              </div>
            ))
        }
        
        </>
    )
}


export default Server;


