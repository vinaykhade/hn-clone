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

export const MoreBtn = {
  display: 'block',
  margin: '10px 0',
  color: 'black',
  textAlign: 'center',
  background: 'orange',
  fontSize: '14px',
  padding: '10px 20px',
  borderRadius: '3px',
  width: '80px',
  cursor: 'pointer',
};