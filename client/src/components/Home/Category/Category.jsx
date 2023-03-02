import "./Category.scss";
import {useNavigate} from "react-router-dom"

// import Cat1 from "../../../assets/category/cat-1.jpg";
// import Cat2 from "../../../assets/category/cat-2.jpg";
// import Cat3 from "../../../assets/category/cat-3.jpg";
// import Cat4 from "../../../assets/category/cat-4.jpg";

const Category = ({ categories }) => {
  const navigate = useNavigate()
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories && categories.data && categories.data.map((item) => (
          <div key={item.id} className="category" onClick={()=> navigate(`category/${item.id}`)}>
          <img
            alt=""
            src={
              process.env.REACT_APP_DEV_URL +
              item.attributes.img.data.attributes.url
            }
          />
        </div>
        ) )}
      </div>
    </div>
  );
};

export default Category;
