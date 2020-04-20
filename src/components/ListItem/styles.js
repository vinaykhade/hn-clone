
import styled from 'styled-components';

export const Item = styled.li`
  padding: 5px 20px;
  background: #F6F6EE;
  &:nth-child(even) {
    background: #d3d3c0;
  }
`;

export const Title = styled.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
`;

export const Host = styled.span`
  font-size: 12px;
`;

export const ExternalLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

export const Description = styled.div`
  font-size: 14px;
`;


export const UpvoteBtn = styled.span`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${props => (props.upvoted ? 'orange' : '#aaa')};
  border-radius: 2px;
`;

export const HideBtn = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;