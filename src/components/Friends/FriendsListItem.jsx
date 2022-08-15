import { VscCircleLargeFilled } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import { FriendsItem, AvatarImg, Status } from './Friends.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendsItem>
      <Status isOnline={isOnline}>
        <VscCircleLargeFilled />
      </Status>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
