import React from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background: #748ffc;
  &:hover {
    background: #91a7ff;
  }
  &:active {
    background: #5c7cfa;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 50%;

  border: none;
  outline: none;
`;

const TodoCreate = () => {
  return (
    <CircleButton>
      <MdAdd />
    </CircleButton>
  );
};

export default TodoCreate;
