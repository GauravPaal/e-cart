import { useState } from 'react';


export function TodoComponent() {

  const [todoList, setTodoList] = useState([]);
  const [dates, setdate] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);


  function handleSubmitClick(event) {
    let item = event.target.todoItem.value.toUpperCase();
    let date = event.target.dueDate.value;
    if (!todoList.includes(item)) {
      setTodoList([...todoList, item]);
      setdate([...dates, date]);
    } else {
      alert('Todo Item is already Exist');
    }
    event.preventDefault()
  }

  function handleDeleteTodo(index) {
    setTodoList(todoList.filter((_, i) => i !== index));
    setdate(dates.filter((_, i) => i !== index));

  }
  function handleDoneButton(index) {
    const completedTask = todoList[index];
    setCompletedTasks([...completedTasks, completedTask]);
    handleDeleteTodo(index);
  }

  return (
    <div className='container-fluid '>
      <div>
        <h1 className='text-danger '>To do List</h1>
      </div>
      <div>
        <form className='center' onSubmit={handleSubmitClick}>
          <label>Task</label>
          <input type='text' className='form-control w-50' name='todoItem' />
          <label>Due Date</label>
          <input type='date' className='form-control w-50' name='dueDate' />
          <button className='btn btn-danger mt-4' >Submit</button>
        </form>
        <hr />
        <section className='row m-auto'>
          <nav className=' col-6 p-2'>
            <div className="card">
              <div className="card-header">
                Task
              </div>
              <div className="card-body">
                <ul className="card-title d-flex justify-content-center list-unstyled">
                  <div className='container'>
                    {todoList.map((value, index) => (
                      <li key={index}>
                        <h3 className='mt-2'>{value}</h3>
                        
                      </li>
                    ))}
                  </div>
                  <div className='container'>
                    {dates.map((value, index) => (
                      <li key={index}>
                        {value}
                        <div className='btn btn-group'><button className=' btn btn-danger ' onClick={() => handleDeleteTodo(index)}>Delete</button>
                        <button className="btn btn-primary " onClick={() => handleDoneButton(index)}>Done</button></div>
                      </li>
                    ))}
                  </div>
                </ul>

              </div>
            </div>

          </nav>
          <nav className=' col-5'>
            <div className="card p-2">
              <div className="card-header">
                Completed Task
              </div>
              <div className="card-body">
                {
                  completedTasks.map((value, index) => (
                    <h5 className="card-title" key={index}>{value}</h5>
                  ))}
              </div>
            </div>

          </nav>

        </section>

      </div>
    </div>)
}
