import { app } from "./firebase";
import { getDatabase,ref,set ,push,onValue} from "firebase/database";
import { useEffect, useState } from "react";


export const AddBlog = (blog) =>{
    const db = getDatabase();
    const blogRef = ref(db,"mustafablog");
    const newBlogRef = push(blogRef);
    set((newBlogRef),{
        user : blog.user,
        title: blog.title,
        imageUrl : blog.imageUrl,
        content: blog.content,
        date : blog.date
    })
}

export const useFetch = () =>{
    const [databaseBlog,setDatabaseBlog] = useState();
    useEffect(() =>{
        const db = getDatabase();
        const blogRef = ref(db,"mustafablog");
        onValue(blogRef, (snapshot) => {
            const data = snapshot.val();
            const arr = [];
            for (const id in data) {
                arr.push({id,...data[id]});
            }
    
            setDatabaseBlog(arr);
          });


    },[])
    return {databaseBlog}
}