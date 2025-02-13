import PropTypes from "prop-types";
import MenuItem from "./MenuItem/MenuItem";
import css from "./mainMenu.module.css";

const MainMenu = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(({ id, text, link }) => (
        <MenuItem key={id} text={text} link={link} />
      ))}
    </ul>
  );
};

MainMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default MainMenu;
