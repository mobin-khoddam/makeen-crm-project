import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ data }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname.includes(path);
  return data.map((item) => {
    const IconSvg = item.svg;
    return (
      <Link
        className={` flex items-center gap-4 font-semibold w-full ${
          isActive(item.location) && "border-l-4 border-l-primary-blue"
        }`}
        to={item.location}
        key={item.id}
      >
        <IconSvg
          className={
            isActive(item.location)
              ? "stroke-primary-blue fill-primary-blue"
              : "stroke-[#5C5353] fill-[#5C5353]"
          }
        />
        <span
          className={
            isActive(item.location) ? "text-primary-blue" : "text-[#5C5353]"
          }
        >
          {item.title}
        </span>
      </Link>
    );
  });
};
export default SideBarLink;
