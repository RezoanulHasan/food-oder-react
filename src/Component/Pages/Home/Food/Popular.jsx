import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
const Popular = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );

        // Filter items where "IsPopular" is true
        const filteredItems = response.data.Items.filter(
          (item) => item.IsPopular
        );

        setPopularItems(filteredItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "60px",
  };

  return (
    <>
      <Fade direction="down">
        <div className="py-16 sm:py-14">
          <div className="text-left border-l-4 border-[#d88d1d] pl-3">
            <h2 className="font-bold text-2xl sm:text-4xl">Reach Out to Us</h2>
            <p className="font-medium text-lg mt-2 text-[#d8871d]">
              Let's Connect
            </p>
          </div>
        </div>
      </Fade>
      <Slider {...settings}>
        {popularItems.map((item) => (
          <div className="flex flex-col gap-4 w-full p-4  mb-10" key={item.Id}>
            <div
              className="
              aspect-square 
              relative 
              overflow-hidden 
              rounded-xl
            "
            >
              <img
                className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
                src={item.ImageUrl}
                alt="Item"
              />
            </div>
            <div className="font-semibold text-lg">{item.Name}</div>

            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold">$ {item.Price}</div>
            </div>
          </div>
        ))}
      </Slider>{" "}
    </>
  );
};

export default Popular;
