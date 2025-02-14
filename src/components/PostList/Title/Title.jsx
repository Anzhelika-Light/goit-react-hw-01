import PropTypes from "prop-types";
import { PostTitle } from "./Title.styled";

const Title = ({ text }) => {
  return <PostTitle>{text}</PostTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
