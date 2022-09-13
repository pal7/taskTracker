import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <button className="btn">Add</button>
    </header>
  );
};

// Header.defaultProps = {
//   title: "ACC ACC ACC default",
// };

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
