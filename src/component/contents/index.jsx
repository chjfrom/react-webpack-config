import React from 'react';
import styled from '@emotion/styled';

const Contents = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  border: 1px solid blue;
  background-image: url(src/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

function contents() {
  return <Contents>contents</Contents>;
}

export default contents;
