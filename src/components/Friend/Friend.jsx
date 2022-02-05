import PropTypes from 'prop-types';

import { Online, Offline, FriendImg, FriendName } from './Friend.styled';

function Friend({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline ? <Online>{isOnline}</Online> : <Offline>{isOnline}</Offline>}

      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
