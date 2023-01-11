import React, {useEffect, useState} from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap"
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faLock, faLockOpen} from '@fortawesome/free-solid-svg-icons'

function TodoList ({todo, setTodo}){

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect( () => {
        setFiltered(todo)
    }, [todo])

    function todoFilter(status) {
        if(status === 'all'){
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }

    function statusTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id == id){
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title){
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id){
        let newTodo = [...todo].map(item => {
            if(item.id == id){
                item.title = value
            }
            return item
    })
    setTodo(newTodo)
    setEdit(null)

    }


    return (
        <div>

            <Row>
                    <Col >
                        <ButtonGroup aria-label="Basic example" className={s.filter}>
                                <Button variant="info" onClick={()=>todoFilter('all')}>All</Button>
                                <Button  variant="success"  onClick={()=>todoFilter(true)}>Done</Button>
                                <Button variant="danger" onClick={()=>todoFilter(false)}>Ongoing</Button>
                         </ButtonGroup>
                    </Col>

            </Row>




            {
                filtered.map(item => (
                    <div key={item.id} className={s.listItems}>
                            {
                                edit == item.id ?
                                        <div>
                                             <input value={value} onChange={(e)=>setValue(e.target.value)} />
                                        </div>
                                         :
                                            <div className={item.status ? s.close : ""}>{item.title}</div>
                            }

                            {
                                  edit == item.id ?
                                    <div>
                                                <Button onClick={ ()=> saveTodo(item.id)} ><FontAwesomeIcon icon={faSave}/></Button>
                                    </div> :
                                    <div>
                                                <Button onClick={ () => deleteTodo(item.id) }><FontAwesomeIcon icon={faTrash}/> Delet</Button>
                                                <Button onClick={ () => editTodo(item.id, item.title) } className={s.btn}><FontAwesomeIcon icon={faEdit}/></Button>
                                                <Button onClick={ () => statusTodo(item.id) } className={s.btn}>
                                                    {
                                                        item.status ? <FontAwesomeIcon icon={faLock}/> : <FontAwesomeIcon icon={faLockOpen}/>
                                                    }
                                                    </Button>
                                    </div>
                            }
                
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList