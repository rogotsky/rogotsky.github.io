import React from 'react';
import styled from 'styled-components';
import Creative from '../Creative';

const PreviewWrapper = styled.div`
  width: 60%;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efeeeee6;
`;

const CreativePreview = ({ ...props }) => {
  return (
    <PreviewWrapper>
      <Creative {...props} />
    </PreviewWrapper>
  )
};

export default CreativePreview;
