import React from 'react';
import styled from 'styled-components';
import Colors from '../theme/Colors';
import placeholder from '../assets/images/fallback.jpeg';

const CreativeWrapper = styled.a`
  display: block;
  width: 300px;
  max-width: 100%;
  text-decoration: none;
  color: #000;
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 8px;
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 56.25%;
  }
  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 120%;
    min-height: 100%;
  }
`;

const Textbox = styled.div`
  width: 100%;
  p.title {
    margin: 0 0 8px;
    font-size: 18px;
    color: #000;
  }
  p.text {
    margin: 0;
    font-size: 14px;
  }
  p.cta {
    margin: 8px 0 0;
    text-decoration: underline;
    font-size: 13px;
    &:hover {
      text-decoration: none;
    }
  }
`;

const Creative = ({
  image,
  title,
  link,
  text,
  cta
}) => {
  console.log('das');
  return (
    <CreativeWrapper>
      <Image>
        <img src={image || placeholder} />
      </Image>
      <Textbox>
        <p className="title">Lorem ipsum dolor</p>
        <p className="text">Test test test test test test test test test</p>
        <p className="cta">Sit amet</p>
      </Textbox>
    </CreativeWrapper>
  )
};

export default Creative;
