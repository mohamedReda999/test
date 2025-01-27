

import Navbar from './Navbar'
import Home from './Home';
import Button from './Button'
import Card from  './Card'
import Student from  './Student'
import List from './List'
import Counter from './Counter'
import MyComponent from './MyComponent'
import ColorPicker from './ColorPicker'
import TypingSpeed from './TypingSpeed'
function App() {
  return (
  <>
<Navbar/>
<Home/>
<Card />
<Button/>
<Student name="sponhebob" age={22} isStudent={true}/>
<Student name="3bas" age={30} isStudent={true}/>
<Student name="Sha3pan" age={44} isStudent={true}/>
<Student />
<List />
<Counter />
<MyComponent/>
<ColorPicker/>
<TypingSpeed/>




  </>
    
      

    
  );
}

export default App;
