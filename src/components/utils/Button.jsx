import { Link } from "react-router-dom";

const Button = ({ to, children, className }) => {
  return (
    <button>
      <Link to={to} className={`shadow-md rounded-[5px] ${className}`}>
        {children}
      </Link>
    </button>
  );
};

export default Button;
