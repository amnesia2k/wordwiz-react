import { Link } from "react-router-dom";

const Button = ({ to, children, className }) => {
  return (
    <button>
      <Link to={to} className={`py-1 px-3 rounded-[5px] ${className}`}>
        {children}
      </Link>
    </button>
  );
};

export default Button;
