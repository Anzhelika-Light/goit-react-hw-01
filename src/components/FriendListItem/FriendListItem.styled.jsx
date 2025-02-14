import styled from "@emotion/styled";

export const Friend = styled.li`
  width: 20%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const FriendName = styled.p`
  font-size: 24px;
`;

export const FriendAvatar = styled.img``;

export const Status = styled.p`
  color: ${({ isOnline, theme }) => {
    return isOnline ? theme.colors.green : theme.colors.red;
  }};
`;
