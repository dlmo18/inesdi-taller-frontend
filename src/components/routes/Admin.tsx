import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles/TextStyles';
import { themes } from '../../styles/ColorStyles';
import { Link } from 'react-router-dom';

const Admin = () => {
  return <Wrapper>
      <ContentWrapper>
        <Title>Bienvenid@ al Admin</Title>
        <ButtonLink>
          <Link to="/project-input" key="project-input">Agregar Proyecto</Link>
        </ButtonLink>
      </ContentWrapper>
    </Wrapper>
};

const Wrapper = styled.div`
  overflow: hidden;
  height: 1200px;
  @media (min-width: 2500px) {
    padding-bottom: 100px;
  }
`;
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 30px 30px 60px 30px;
  display: grid;

  @media (max-width: 750px) {
    grid-template-columns: auto;
    justify-content: center;
    gap: 40px;
  }

  @media (max-width: 450px) {
    padding: 10px;
  }
`;

const Title = styled(H1)`
  margin-top: 80px;
  font-size: 70px;
  color: ${themes.custom.text1};
  text-align: center;

  @media (max-width: 830px) {
    margin-top: 20px;
  }

  @media (max-width: 450px) {
    font-size: 60px;
  }
`;

const ButtonLink = styled.div`
  font-size: 1.2rem;
  border-radius: 1rem;
  color: ${themes.custom};
  text-align: center;
  max-width: 300px;
  margin: 80px auto 0;
  padding: 1rem 1.5rem;
`;

export default Admin;
