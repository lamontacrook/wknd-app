import React, { useState } from "react"
import { Link } from 'react-router-dom';
import Error from "../screens/Error";
import { useGraphQL, adventureListQuery } from "../api";
import { getCategoriesFromData, getCategoryItemsByKey } from "../utils";
import "./SearchByCategory.css";

export default function SearchByCategory() {

  const [selectedActivity, setSelectedActivity] = useState(false);
  const [categories, setCategories] = useState(false);
  const [categoryItems, setCategoryItems] = useState([]);

  const { data, errors } = useGraphQL(adventureListQuery);

  if (errors || data === false) return <Error error={errors} />;
  if (data === null) return <div>Loading...</div>;

  if (!categories && data.adventureList.items) {
    setCategories(getCategoriesFromData(data.adventureList.items))
  }

  const setCategory = (activity) => {
    setSelectedActivity(activity);
    setCategoryItems(getCategoryItemsByKey(data.adventureList.items, activity))
  }

  return (
    <>
      <div className="search-by-category-container">
        <ul className="search-by-category">
          {categories && Object.keys(categories).map((key, index) => {
            const category = categories[key];
            const selectedClassName = selectedActivity === category.adventureActivity ? "selected" : "";
            return (
              <li key={key} className="search-by-category-item" onClick={() => setCategory(category.adventureActivity)}>
                <img
                  className={`search-by-category-item-image ${selectedClassName}`}
                  src={category.adventurePrimaryImage._path}
                  alt={category.adventureTitle}
                />
                <p>{category.adventureActivity || "Miscellaneous"}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="search-by-category-container">
        <ul className="search-by-category">
          {categoryItems && categoryItems.map((item, key) => (
            <li key={key} className="search-by-category-item">
              <Link to={`/detail?_path=${item._path}`}>
                <img className="search-by-category-item-image" src={item.adventurePrimaryImage._path} alt={item.adventureTitle} />
                <p>{item.adventureTitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
