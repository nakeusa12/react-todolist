import React, { useState } from "react";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoform/TodoForm";
import Todos from "../components/todos/Todos";

import Container from "../layout/Container";

const TodoList = () => {
  // React Hooks untuk isi Todo
  const [todos, setTodos] = useState([
    { text: "Learning React", isCompleted: false },
    { text: "Learning React Hooks", isCompleted: false },
    { text: "Learning styling in React", isCompleted: false }
  ]);

  // React Hooks untuk btn dari todoForm
  const [showAdd, setShowAdd] = useState(false);

  // Fungsi untuk menambahkan todo
  const addTodo = value => {
    // Kondisi limit todo
    if (todos.length < 6) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("Only 10 todos is allowed!");
    }
  };

  // Fungsi jika todo sudah dikerjakan pada todo
  const completeTodo = index => {
    const addedTodo = [...todos];
    // Mengklik todo yang sesuai dengan nomor indexnya
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  // Fungsi untuk menghapus semua todo
  const clearTodos = () => !showAdd && setTodos([]);

  // fungsi untuk melakukan perubahan pada btn todoForm
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log(todos);

  return (
    <Paper>
      <Container flexDirection="column" height="100%">
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
