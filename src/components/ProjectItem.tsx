import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

interface IProjectItem {
  category: string;
  title: string;
  place: string;
  date: string;
  parts: string[];
  image: string;
}

const ProjectItem: React.FC<IProjectItem> = ({
  category,
  title,
  place,
  date,
  parts,
  image,
}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const updateImageHeight = () => {
      const imageElement = imageRef.current;
      if (imageElement) {
        imageElement.style.height = window.getComputedStyle(imageElement).width;
      }
    };

    updateImageHeight();

    window.addEventListener('resize', updateImageHeight);
    return () => window.removeEventListener('resize', updateImageHeight);
  }, []);

  return (
    <Container>
      <Image
        src={image}
        ref={imageRef}
      />
      <Information>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <MetaList>
          <MetaText>{place}</MetaText>
          <MetaText>{date}</MetaText>
        </MetaList>
      </Information>
    </Container>
  );
};

export default ProjectItem;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 21%;
  flex-direction: column;
  width: 100%;
  max-width: 284.406px;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0px 8px 25px rgba(184, 186, 217, 0.45);
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Category = styled.span`
  font-weight: 700;
  font-size: 90%;
  width: 100%;
  display: block;
  color: #316FE0;
  font-size: 16px;
  margin-bottom: 0.25rem;
`;

const Title = styled.span`
  font-weight: 700;
  text-overflow: ellipsis;
  word-break: keep-all;
  overflow-wrap: break-word;
  overflow: hidden;
  width: 100%;
  letter-spacing: -0.5px;
  font-size: 22px;
  line-height: 1.1;
`;

const MetaList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const MetaText = styled.span`
  font-size: 15px;
  font-weight: 500;
  background-color: #e9ecef;
  width: fit-content;
  color: #495057;
  padding: 2px 1px;
`;
