/* eslint-disable no-sequences */
import { app } from "./firebase";
import { getDatabase,ref,set ,push,onValue, remove,update} from "firebase/database";
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

export const DeleteBlog =(id) =>{
    const db = getDatabase();
    remove(ref(db,"mustafablog/" + id))
}


export const EditBlog = (updateBlog) =>{
    const db = getDatabase();
    const updates = {};
    updates['mustafablog/'+updateBlog.id] = updateBlog;
    return update(ref(db), updates);

}

