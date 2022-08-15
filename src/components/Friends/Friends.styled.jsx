import styled from '@emotion/styled';

export const Friendlist = styled.ul`
  margin-bottom: 20px;
`;

export const FriendsItem = styled.li`
  display: flex;
  border: solid 2px black;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const AvatarImg = styled.img`
  margin-right: 10px;
`;

export const Status = styled.span`
  svg {
    color: ${props => {
      switch (props.isOnline) {
        case true:
          return 'red';
        case false:
          return 'black';
        default:
          return 'black';
      }
    }};
  }
`;
