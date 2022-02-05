import PropTypes from 'prop-types';

import {
  ProfileContainer,
  Avatar,
  UserName,
  UserTagd,
  UserLocatoin,
  UserStatsList,
  UserStatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export default function CreateProfile({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <ProfileContainer>
      <div>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTagd>@{tag}</UserTagd>
        <UserLocatoin>{location}</UserLocatoin>
      </div>

      <UserStatsList>
        <UserStatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </UserStatsItem>
        <UserStatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </UserStatsItem>
      </UserStatsList>
    </ProfileContainer>
  );
}

CreateProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
