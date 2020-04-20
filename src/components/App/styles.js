import styled from 'styled-components';
import { mobile, tablet } from '../../styles/mediaQueries';

export const Wrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;
  ${tablet} {
    width: 96%;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;


