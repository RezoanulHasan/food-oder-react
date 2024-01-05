import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-red-600 pt-8 my-20">
      <SectionTitle
        subHeading="Explorer"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>May 20, 2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p className="text-white">
            Welcome to our food haven where we serve mouthwatering dishes. Spice
            up your dining experience with our quick-service restaurant. From
            zesty curries to tantalizing appetizers, our menu is crafted to
            bring you the bold flavors you love, served at lightning speed.
          </p>
          <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
