import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import { List } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
};

export default FriendList;

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
