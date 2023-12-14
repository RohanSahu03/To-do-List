import React,{useState} from 'react'
import style from '../todoStyle.module.css'
import { IoIosAddCircle } from "react-icons/io";
import TodoList from './TodoList'




function Todo() {

    const [inputList,setInputList]=useState("");
    const [items,setItems] = useState([])
   
    
    const listOfItem=()=>{
        setItems((oldarray)=>{
           const updatedList= [...oldarray,inputList]
           console.log(updatedList);
           return updatedList
        })
        setInputList("")
    };

    const inputHandler=(event)=>{
        setInputList(event.target.value)

    };

    function deleteItem(id){
        setItems((oldarray)=>{
           return oldarray.filter((arrEle,index)=>{
            return index !== id
           })
        })
    
    }
    

    return (
        <div>
            <div className={style.main}>

                <div className={style.todoHeading}>
                    <h1 >Manage your Todo</h1>
                    <br />
                    <input type="text" value={inputList} placeholder='add an item' className={style.todo_input} onChange={inputHandler} />
                    <IoIosAddCircle className={style.addCircle}  onClick={listOfItem}/>
                </div>
           
           <ul> 
          { items.map((val,index)=>{
            return <TodoList newdata={val} 
            id={index} 
            key={index}
            onSelect={deleteItem}
      
            />;
       
          })}
            </ul>

                
            </div>
            
        </div>
    )
}

export default Todo