import { useEffect, useState } from "react";
import Categories from "./Categories";

function GenresInDb() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(result => result.json())
      .then(data => {
        setCategories(data.countByCategory)
      })
  }, [])
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              categories &&
              categories.map((cat,i) => {
                return(
                  <Categories {...cat} key={i}  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
