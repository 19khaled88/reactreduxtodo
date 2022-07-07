
const modalTemplate = () => {
  return (
    <>
    <input type="checkbox" id={modalId} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <form onSubmit={todoFormSubmit}>
          <label htmlFor={modalId} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Add Task</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input ref={titleRef} type="text" placeholder="Type here" className="input input-bordered" />
          </div>
          <div className="form-control pb-3">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
          <select ref={statusRef} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>Choose One</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not compoleted</option>
          </select>
          </div>
          <button className="btn btn-sm btn-success">Add task</button>
        </form>
      </div>
    </div> 
    </>
  );
}

export default modalTemplate;
