import { useEffect, useState } from "react";

const Categories = ({ name, count}) => {
    return(
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
            <div className="card-body">{name.charAt(0).toLocaleUpperCase()+ name.slice(1)}: {count} productos</div>
            </div>
        </div>
    )
}
export default Categories;
