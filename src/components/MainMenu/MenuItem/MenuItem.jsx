import PropTypes from "prop-types";
import css from "./menuItem.module.css";

const MenuItem = ({ text, link }) => {
  return (
    <li className={css.item}>
      <a className={css.link} href={link}>
        {text}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuItem;
