import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Menu, Table } from 'semantic-ui-react';
import { addTodo, deleteTodo, toggleCompleted } from '../../redux/slicer/todoSlice';
const Todos = () => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state)=>state.todos)


  const submitHandler=(e)=>{
    e.preventDefault()
    if(value !== ''){
      dispatch(
        addTodo({
          title:value
        })
      )
    }
  }
  const taskCompletedHandler=(id,completed)=>{
    dispatch(
      toggleCompleted({
        id:id,completed:!completed
      })
    )
  }
  const taskDeleteHandler=(id)=>{
   dispatch(deleteTodo({
    id:id
   }))
  }
  const pagination=()=>{
    return(
      <>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </>
    )
  }
  return (
      <div>
      <div>
        <form onSubmit={submitHandler}>
          <div className="ui input" style={{marginRight:'6px'}}>
            <input onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Title..."/>
          </div>
          <button className="ui primary button">
            Submit
          </button>
        </form>
      </div>
      <div className='container ' align="center" style={{width:'700px',marginLeft:'320px',paddingTop:'20px'}}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Completed</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
      
          <Table.Body>
         {
          todos.map((todo)=>
                    <Table.Row key={todo.id}>
                        <Table.Cell style={{width:'100px'}}>{todo.id}</Table.Cell>
                        <Table.Cell style={{width:'150px'}}>{todo.title}</Table.Cell>
                        <Table.Cell style={{width:'250px'}}>{todo.completed === true?'Completed':'Not Completed'}</Table.Cell>
                        <Table.Cell style={{width:'210px'}}><button styly={{}} onClick={()=>taskCompletedHandler(todo.id,todo.completed)}>{todo.completed === true?'Make Un-Finished':'Make Finished'}</button></Table.Cell>
                        <Table.Cell style={{width:'90px'}}><button onClick={()=>taskDeleteHandler(todo.id)}>Delete</button></Table.Cell>
                    </Table.Row>
                    )
         }
            
          </Table.Body>

          
        {
          // pagination()
        }
        
        </Table>
     
      </div>

      </div>
  );
}

export default Todos;
