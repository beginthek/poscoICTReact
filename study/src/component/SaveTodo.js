const SaveTodo = ({ saveTodo }) => {
    return (
        <div>
            <input id="todo" type={"text"}></input>
            <button onClick={saveTodo}>저장</button>
        </div>
    );
};

export default SaveTodo;