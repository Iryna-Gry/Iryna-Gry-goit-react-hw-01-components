import PropTypes from 'prop-types';
import { FriendListItem, FriendListStyle } from 'components';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        );
      })}
    </FriendListStyle>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
