import PropTypes from "prop-types";
import Title from "./Title/Title";
import Post from "./Post/Post";
import { List } from "./PostList.styled";

const PostList = ({ posts }) => {
  return (
    <>
      <Title text="Post list" />
      <List>
        {posts.map(({ id, title, body }) => {
          return <Post key={id} title={title} body={body} />;
        })}
      </List>
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
};

export default PostList;
