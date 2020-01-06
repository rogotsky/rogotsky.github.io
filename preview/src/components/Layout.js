import React from 'react';
import styled from 'styled-components';
import Colors from '../theme/Colors';

export const Container = styled.div`
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(61,88,128,0.05);
  margin: 0 auto;
  padding: 30px 15px;
  width: 1170px;
  max-width: 100%;
  & * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Header = styled.h2`
  color: ${Colors['greyish-brown']};
  font-size: 22px;
  font-weight: 400;
  margin: 25px 0;
`;
