import { FaMapMarkerAlt, FaUserAlt, FaCalendar, FaClock } from "react-icons/fa";
import PropTypes from "prop-types";
// import { formatEventStart } from "../../utils/formatEventStart";
// import { formatEventDuration } from "../../utils/formatEventDuration";
// Заміняємо 2 верхні рядки на 1 за допомогою реекспорту
import { formatEventDuration, formatEventStart } from "../../../utils";
import { iconSize } from "../../../constants";
import { Card, EventName, Info, Chip } from "./Event.styled";

const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStartTime = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendar size={iconSize.sm} />
        {formattedStartTime}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
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
