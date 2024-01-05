import { Wave } from "react-animated-text";

const Logo = () => {
  return (
    <div className="border-[1px] w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer bg-red-500">
      <div className="flex flex-row items-center  gap-3">
        <div className="p-3 font-bold  text-2xl flex ">
          <Wave text="pti." effect="stretch" effectChange={1} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
