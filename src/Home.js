//import { useState } from 'react';
//import BlogList from './BlogList';
//const Home = () => {
  //const [blogs, setBlogs] = useState([
    //{title: 'My new website', body: 'lorem ipus...', author:'mario', id:1},
    ///{title: 'welcome party', body: 'lorem ipus...', author:'3bas', id:2},
    //{title: 'web dev top tips', body: 'lorem ipus...', author:'sh7at', id:3}
 // ]);


//return (
 //   <div className="home">
   //   <BlogList blogs={blogs}/>
      
 //</div>
// ) ;
//}




//export default Home;



//function Greeting(props){
 // return <h1>Hello, {props.name}!</h1>
//}
//function App(){
 // return <Greeting name= "Alice"/>
//}


//export default App;

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="count">
      <h2 className="num">{count}</h2>
      <button className="Button1" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

