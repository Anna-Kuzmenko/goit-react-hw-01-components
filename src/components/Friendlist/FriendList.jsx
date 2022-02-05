import PropTypes from 'prop-types';

import Friend from '../Friend/Friend';

import { FrList, FrItem } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FrList>
      {friends.map(friend => (
        <FrItem key={friend.id}>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </FrItem>
      ))}
    </FrList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
