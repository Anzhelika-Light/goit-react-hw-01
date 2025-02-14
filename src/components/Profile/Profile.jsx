import PropTypes from "prop-types";
import {
  ProfileInfo,
  About,
  UserAvatar,
  UserName,
  UserInfo,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from "./Profile.styled";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <ProfileInfo>
      <About>
        <UserAvatar src={image} alt={name} />
        <UserName>{name}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </About>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileInfo>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
