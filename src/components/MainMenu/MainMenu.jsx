import PropTypes from "prop-types";
import MenuItem from "./MenuItem/MenuItem";
import { Menu } from "./MainMenu.styled";

const MainMenu = ({ items }) => {
  return (
    <Menu>
      {items.map(({ id, text, link }) => (
        <MenuItem key={id} text={text} link={link} />
      ))}
    </Menu>
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
