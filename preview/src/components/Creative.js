import React from 'react';
import styled from 'styled-components';
import placeholder from '../assets/images/fallback.jpeg';

const CreativeWrapper = styled.a`
  display: block;
  width: 300px;
  max-width: 100%;
  text-decoration: none;
  color: #000;
  padding: 3px;
  background: #fff;
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
  return (
    <CreativeWrapper
      href={link && link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image>
        <img src={image || placeholder} />
      </Image>
      <Textbox>
        <p className="title">{title || 'Lorem ipsum dolor sit amet'}</p>
        <p className="text">{text || 'Consectetur adipiscing elit, sed do eiusmod.'}</p>
        <p className="cta">{cta || 'Tempor incididunt ut'}</p>
      </Textbox>
    </CreativeWrapper>
  )
};

export default Creative;
