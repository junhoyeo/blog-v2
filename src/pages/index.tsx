import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';
import SEO from '../components/SEO';
import ExperienceItem from '../components/ExperienceItem';
import ProjectItem from '../components/ProjectItem';

import LatestPostListQuery from '../queries/LatestPostListQuery';
import products from '../data/products.json';

const experienceList = [
  {
    name: 'Pointing',
    date: '2020.08~',
    position: 'Director / Co-Founder',
    image: 'https://avatars3.githubusercontent.com/u/67812359?s=200',
  },
  {
    name: 'EmoticBox',
    date: '2020.02~',
    position: 'Software Engineer',
    image: 'https://avatars3.githubusercontent.com/u/62135853?s=200',
  },
];

export default () => {
  // const data = useStaticQuery<Query>(LatestPostListQuery);

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <SectionContainer>
        <SectionTitle>
          Experience
        </SectionTitle>
        <ExperienceList>
          {experienceList.map(({ name, ...props }) => (
            <ExperienceItem
              key={`service-${name}`}
              name={name}
              {...props}
            />
          ))}
        </ExperienceList>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>
          Projects
        </SectionTitle>
        <ProjectList>
          {products.map((product, index) => (
            <ProjectItem
              {...product}
              key={`product-${index}`}
            />
          ))}
        </ProjectList>
      </SectionContainer>
    </Layout>
  );
};

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #343a40;
  font-weight: 700;
  font-size: 28px;
  position: relative;
  width: fit-content;
  z-index: 999;

  &::after {
    content: '';
    height: 15px;
    width: 100%;
    background: linear-gradient(to bottom right, #00a7ff, #5795ED);
    opacity: 0.6;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const ExperienceList = styled.div`
  display: flex;
  margin: 15px 0;
`;

const ProjectList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(284.406px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  margin-top: 15px;
`;
