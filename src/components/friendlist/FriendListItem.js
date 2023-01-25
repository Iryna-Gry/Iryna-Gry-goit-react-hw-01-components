import PropTypes from 'prop-types';
import {
  FriendListItemStyle,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from 'components';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendListItemStyle>
      {isOnline ? (
        <FriendStatus style={{ backgroundColor: 'green' }}></FriendStatus>
      ) : (
        <FriendStatus style={{ backgroundColor: 'red' }}></FriendStatus>
      )}
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemStyle>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
