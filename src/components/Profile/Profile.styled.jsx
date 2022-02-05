import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: blok;
  margin: 0px auto;
  width: 200px;
  padding: 20px;
  border: solid 3px#FFF0F5;
  border-radius: 3px;
  background-color: #fffafa;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 90px;
  margin: 0px auto;
  border: solid 0px#fff;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

export const UserTagd = styled.p`
  font-size: 18px;
  color: #696969;
`;

export const UserLocatoin = styled.p`
  font-size: 14px;
  color: #696969;
`;

export const UserStatsList = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5;
  margin-top: 15px;
`;

export const UserStatsItem = styled.li`
  display: inline-block;
  border: solid 1px #dcdcdc;
  border: 1px 0px 0px 0;
  font-size: 12px;
  flex-grow: 1;
`;

export const Label = styled.span`
  display: block;
  padding: 5px 0;
  color: #696969;
  padding: 5px;
`;

export const Quantity = styled.span`
  display: block;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 600;
  padding: 5px;
`;
