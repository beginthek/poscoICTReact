const TodoList = ({todoList, deleteTodo}) => {
    return (
        <div>
            {
            todoList.map((element, idx) => (
                <p key={idx}><span>{element}</span> <button onClick={deleteTodo}>X</button></p>
            ))
            }
        </div>
    );
};

export default TodoList;