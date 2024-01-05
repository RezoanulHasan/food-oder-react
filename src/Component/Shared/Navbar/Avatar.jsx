import avatarImg from "../../../assets/images/placeholder.jpg";

const Avatar = () => {
  return (
    <>
      <div className="hidden lg:block md:block xl:block py-1 rounded-full">
        <img className="rounded-full w-10 h-10" alt="profile" src={avatarImg} />
      </div>
    </>
  );
};

export default Avatar;
