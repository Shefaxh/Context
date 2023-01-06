import TodoContext from './Context/TodoContext';
import Todos from './Todos';
import Form from './Form';
import './App.css';


function App() {
  return (
  
      <TodoContext>
        <Todos/>
        <Form/>
      </TodoContext>
    
   
  );
}

export default App;
