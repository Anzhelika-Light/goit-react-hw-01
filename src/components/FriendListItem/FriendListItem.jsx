import PropTypes from "prop-types";
import {
  Friend,
  FriendName,
  Status,
  FriendAvatar,
} from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
      <Status isOnline={isOnline}>{isOnline ? "Online" : "Offline"}</Status>
    </Friend>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
