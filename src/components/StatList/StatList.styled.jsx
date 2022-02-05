import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 15px;
`;

export const StatItems = styled.li`
    display: block;
  border: solid 1px {getRandomHexColor()};
  border-radius: 3px;
  padding: 10px;
  margin: 0px;
  font-size: 14px;
  min-width: 50px;
  background-color:  ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};


`;
