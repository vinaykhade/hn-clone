import styled from 'styled-components';

export const ListWrapper = styled.ul`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const MoreBtn = styled.span`
  display: block;
  margin: 10px 0;
  color: black;
  text-align: center;
  background: orange;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 3px;
  width: 80px;
  cursor: pointer;
`;