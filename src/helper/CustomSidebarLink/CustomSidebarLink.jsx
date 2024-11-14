import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CustomSidebarLink = ({ svg, location, title }) => {
  const thisLocation = useLocation();

  const isActive = (path) => {
    return thisLocation.pathname === path;
  };
  return (
    <Link
      className={`flex items-center gap-4 font-semibold w-full ${
        isActive(location) && "border-l-4 border-primary-blue"
      }`}
      to={location}
    >
      <div
        className={`w-6 h-6 ${
          isActive(location) ? "bg-primary-blue" : "bg-[#5C5353]"
        }`}
        style={{ mask: `url(${svg}) no-repeat center` }}
      ></div>
      <span
        className={`${
          isActive(location) ? "text-primary-blue" : "text-[#5C5353]"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};

export default CustomSidebarLink;
