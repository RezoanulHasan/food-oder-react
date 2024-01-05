import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {popularItems.map((item) => (
        <div className="flex flex-col gap-2 w-full" key={item.Id}>
          <div
            className="
              aspect-square 
              w-full 
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
            <div className="absolute top-3 right-3">
              {/* Assuming HeartButton and ToastContainer are defined */}
              {/* <HeartButton /> */}
              {/* <ToastContainer /> */}
            </div>
          </div>
          <div className="font-semibold text-lg">{item.Name}</div>

          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">$ {item.Price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
