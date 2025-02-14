import PropTypes from "prop-types";
import { PostItem, PostName, PostText } from "./Post.styled";

const Post = ({ title, body }) => {
  return (
    <PostItem>
      <PostName>{title}</PostName>
      <PostText>{body}</PostText>
    </PostItem>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
