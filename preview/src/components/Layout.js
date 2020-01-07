import React from 'react';
import styled from 'styled-components';
import Colors from '../theme/Colors';

export const Container = styled.div`
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(61,88,128,0.05);
  margin: 0 auto;
  padding: 30px 15px;
  width: 1200px;
  max-width: 100%;
  box-sizing: border-box;
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
  margin: 0 0 25px;
`;

export const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  label {
    display: block;
    margin-bottom: 5px;
    width: 100%;
    font-size: 14px;
  }
  input[type="text"] {
    display: block;
    flex-grow: 1;
  }
`;

export const ButtonsGroup = styled(Row)`
  justify-content: flex-end;
  & > * {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export const Button = styled.button`
  border-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  outline: none;
  border: none;
  background-color: #4E4E4E;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color ease 0.25s;
  white-space: nowrap;
  height: 30px;
  &:hover {
    background-color: #353535;
  }
  input + & {
    margin-left: 5px;
  }
`;

export const TextInput = styled.input`
  border: solid 1px #dadada;
  border-radius: 2px;
  color: #4a4a4a;
  height: 30px;
  padding: 5px 8px;
  &:focus {
    border-color: #f39c12;
    outline: none;
    box-shadow: 0 0 0 1px #f39c12;
  }
`;
