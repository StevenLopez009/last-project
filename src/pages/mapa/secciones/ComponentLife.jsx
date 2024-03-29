import PropTypes from "prop-types";

const ComponentLife = ({ life }) => {
  const time = 30;

  return (
    <>
      <h1>{life}</h1>
      <h2>{time}</h2>
    </>
  );
};

ComponentLife.propTypes = {
  life: PropTypes.number.isRequired,
};

export default ComponentLife;
