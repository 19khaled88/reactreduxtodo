import { useSelector } from 'react-redux';
const TotalFinished = () => {
    const totalFinished = useSelector((state)=>
        state.todos.filter(todo=>todo.completed === true)
    )
  return (
    <div style={{fontSize:'20px',paddingTop:'10px'}}>
       Total Completed Tasks: {totalFinished.length}
    </div>
  );
}

export default TotalFinished;
