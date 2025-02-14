import PropTypes from "prop-types";
import { Item, Link } from "./MenuItem.styled";

const MenuItem = ({ text, link }) => {
  return (
    <Item>
      <Link href={link}>{text}</Link>
    </Item>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuItem;
