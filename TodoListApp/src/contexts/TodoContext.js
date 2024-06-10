import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo message",
            isCompleted:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider