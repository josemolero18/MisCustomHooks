import { useEffect, useReducer } from "react";
import { TodoReducer } from './TodoReducer'

const inicialState = [];

const init = () =>{
    return JSON.parse( localStorage.getItem("todos") ) || [] ;  
}


export const useTodo = () => {
    const [ todos , dispatch] = useReducer(TodoReducer, inicialState, init);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));    
    }, [todos])
    
    const handleNewTodo = (todo) =>{
        const action ={
            type: "[TODO] Add Todo",
            payload: todo
        };

        dispatch( action );
    };

    const handleDeleteTodo = ( id ) =>{
        dispatch({
            type:"[TODO] Remove Todo",
            payload: id
        });
    };
    const handleToggleTodo = ( id ) =>{
        dispatch({
            type:"[TODO] Toggle Todo",
            payload: id
        });
    };

    const todosCount = (todos) =>{
        return todos.length
    };
    const pendingTodosCount = (todos) =>{
        return todos.filter( todo => todo.done === false).length
    };


  return (
    {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    }

  )
}
