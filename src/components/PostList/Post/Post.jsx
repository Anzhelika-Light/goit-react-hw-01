import PropTypes from "prop-types";
import css from "./post.module.css";

const Post = ({ title, body }) => {
  return (
    <li className={css.post}>
      <h4 className={css.title}>{title}</h4>
      <p className={css.text}>{body}</p>
    </li>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
