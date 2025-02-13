import { FaMapMarkerAlt, FaUserAlt, FaCalendar, FaClock } from "react-icons/fa";
import PropTypes from "prop-types";
// import { formatEventStart } from "../../utils/formatEventStart";
// import { formatEventDuration } from "../../utils/formatEventDuration";
// Заміняємо 2 верхні рядки на 1 за допомогою реекспорту
import { formatEventDuration, formatEventStart } from "../../utils";
import { iconSize } from "../../constants";
import styles from "./event.module.css";

const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStartTime = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <div className={styles.event}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.info}>
        <FaMapMarkerAlt className={styles.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={styles.info}>
        <FaUserAlt className={styles.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={styles.info}>
        <FaCalendar className={styles.icon} size={iconSize.sm} />
        {formattedStartTime}
      </p>
      <p className={styles.info}>
        <FaClock className={styles.icon} size={iconSize.sm} />
        {duration}
      </p>
      <span className={`${styles.chip} ${styles[type]}`}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }),
};

export default Event;
