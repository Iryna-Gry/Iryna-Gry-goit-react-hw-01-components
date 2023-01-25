import styled from '@emotion/styled';

export const FriendListItemStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 6px;
  padding: 8px;
  border: 1px solid rgba(173, 204, 204, 0.281);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const FriendStatus = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
`;
export const FriendAvatar = styled.img`
  display: block;
`;
export const FriendName = styled.p`
  font-weight: 500;
  font-size: 16px;
`;
