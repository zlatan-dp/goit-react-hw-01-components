import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  width: 500px;
  margin: 10px auto;
  box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.38);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  color: gray;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatListItem = styled.li`
  flex-grow: 1;
`;

export const Wrap = styled.div`
  background-color: red;
  border: 1px solid rgb(75, 75, 75);
  padding: 10px;
`;

export const StatLabel = styled.span`
  display: block;
  text-align: center;
  color: white;
  margin-bottom: 10px;
`;

export const StatPercentage = styled.span`
  font-size: 20px;
  display: block;
  text-align: center;
  color: white;
`;
