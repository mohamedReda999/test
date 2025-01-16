import { useState} from 'react';
const Home = () =>{
  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipus...", author:'mario', id:1},
    {title: "welcome party", body: "lorem ipus...", author:'3bas', id:2},
    {title: "web dev top tips", body: "lorem ipus...", author:'sh7at', id:3}
  ]);


  return (
    <div className="home">
  {blogs.map((blog) =>(
    <div className="blog-preview" key={blog.id}>
      <h2>{blog.title}</h2>
      <p>Written by {blog.author}</p>
    </div>
  ))}

    </div>
  ) ;
}

export default Home;