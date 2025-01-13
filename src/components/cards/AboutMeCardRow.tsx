import React from 'react';
import styled from 'styled-components';
import { themes } from '../../styles/ColorStyles';
import { MediumText } from '../../styles/TextStyles';
import { Link } from 'react-router-dom';

interface AboutMeCardRowProps {
  title: string;
  value: string | number;
  isLink?: boolean | null;
}

const AboutMeCardRow = (props: AboutMeCardRowProps) => {
  const formatValue = (value: any): any => {
    if (props?.isLink) {
      return (
        <Link to={{ pathname: value }} target="_blank" key="link-input">
          {value}
        </Link>
      );
    } else if (typeof value === 'number') {
      const date = new Date(value);
      return date.toLocaleDateString();
    } else {
      return value;
    }
  };

  return (
    <InfoDetailBox>
      <InfoKey>{props.title}</InfoKey>
      <InfoValueWrapper>
        <InfoValue>{formatValue(props.value)}</InfoValue>
      </InfoValueWrapper>
    </InfoDetailBox>
  );
};

const InfoDetailBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  column-gap: 6px;
`;

const InfoValueWrapper = styled.div``;

const InfoKey = styled(MediumText)`
  font-weight: bold;
  color: ${themes.custom.text1};

  @media (prefers-color-scheme: dark) {
    color: ${themes.custom.text1};
  }
`;

const InfoValue = styled(MediumText)`
  color: ${themes.custom.text1};
  margin-bottom: 8px;

  @media (prefers-color-scheme: dark) {
    color: ${themes.custom.text1};
  }
`;

export default AboutMeCardRow;
