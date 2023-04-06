import React from 'react'
import style from '../todolist.module.css'
import { MdDeleteForever } from "react-icons/md";

function TodoList(props) {
   
        return (
            <div className={style.listcontainer}>
        
                <li className={style.list}>{props.newdata}</li><MdDeleteForever className={style.MdDeleteForever} onClick={() => {
                    props.onSelect(props.id)
                }} /> 
                    
            </div>
        )
    
}

export default TodoList