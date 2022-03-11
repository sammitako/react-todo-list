import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="Build a project" done={true} />
      <TodoItem text="Build a project" done={false} />
      <TodoItem text="Build a project" done={false} />
      <TodoItem text="Build a project" done={true} />
    </TodoListBlock>
  );
};

export default TodoList;
