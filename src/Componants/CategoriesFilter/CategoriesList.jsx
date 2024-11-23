import { CategoriesFilterList } from "../../helper/ProjectData/Data.jsx";

const CategoriesList = ({ setFilter, setShowCategories, data = CategoriesFilterList }) => {
  const setFilterHandler = (item) => {
    setShowCategories(false);
    setFilter(item);
  };
  return (
    <div className="bg-white w-[234px] rounded-lg mt-4 p-2 shadow-sm border">
      {data.map((item, index) => (
        <div
          onClick={() => setFilterHandler(item)}
          className="pr-3 py-2 border  border-white rounded-md hover:border-primary-blue "
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
