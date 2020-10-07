import React, {useCallback, useRef, useState} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
    const array = [];
    for (let i=1; i<=2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        });
    }
    return array;
}

const App = () => {

    const [todos, setTodos] = useState(createBulkTodos);

    //고유값으로 사용할 id
    //ref를 사용하여 변수 담기
    const nextId = useRef(2501);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text: text,
                checked: false
            };
            setTodos(todos => todos.concat(todo));
            nextId.current++;
        }, []
    );

    const onRemove = useCallback(
        id => {
            setTodos(todos => todos.filter(todo => todo.id !== id));
        }, []
    );

    const onToggle = useCallback(
        id => {
            setTodos(todos =>
                todos.map(todo =>
                    todo.id === id ? {...todo, checked: !todo.checked} : todo,
                ),
            );
        }, []
    );

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;