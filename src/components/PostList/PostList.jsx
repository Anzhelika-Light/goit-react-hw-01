import PropTypes from "prop-types";
import Title from "./Title/Title";
import Post from "./Post/Post";
import css from "./postList.module.css";

const PostList = ({ posts }) => {
  return (
    <>
      <Title text="Post list" />
      <ul className={css.list}>
        {posts.map(({ id, title, body }) => {
          return <Post key={id} title={title} body={body} />;
        })}
      </ul>
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
