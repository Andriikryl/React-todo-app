import React, {useState} from "react"
import { Row, Col, Button, FormControl } from "react-bootstrap"
import s from './AddTodo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'



function AddTodo ({todo, setTodo}){

    const [value, setValue] = useState('')
    
    function saveTodo(){

        if(value){
            setTodo(
                [...todo, {
                    id: Math.random().toString().substring(),
                    title: value,
                    status: true
                }]
            )
            setValue('')
        }
    }


    return (
        <Row>
            <Col className={s.addTodoForm}>
                    <FormControl placeholder="add task" value={value} onChange = { (e)=>setValue(e.target.value) }/>
                    <Button onClick={saveTodo} className={s.btn} ><FontAwesomeIcon icon={faSave}/>Save</Button>
            </Col>
        </Row>
    )
}

export default AddTodo