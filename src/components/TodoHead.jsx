import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #5c7cfa;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <h1>2022 MARCH 11</h1>
      <div className="day">Friday</div>
      <div className="tasks-left">2 items left to do</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
