import styled from "@emotion/styled";

export const ProfileInfo = styled.div`
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`;

export const About = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const UserAvatar = styled.img`
  width: 35%;
  height: 35%;
  margin-left: auto;
  margin-right: auto;
  background-color: #e5e6e7;
  border-radius: 50%;
`;

export const UserName = styled.p`
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 28px;
  line-height: 1.3;
`;

export const UserInfo = styled.p`
  font-size: 16px;
  line-height: 1.3;
  color: #919da7;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;

  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsLabel = styled.span`
  font-size: 14px;
  line-height: 1.3;
`;

export const StatsQuantity = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
