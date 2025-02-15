const Navbar = () => {
  return (
    <div className=" p-6 mx-40 my-5 shadow-2xl rounded-2xl">
      <div className="flex px-10 align-center justify-between">
        <div className="text-3xl cursor-pointer">
          <span>Quickrevu</span>
        </div>

        <div className="flex gap-10 items-center cursor-pointer">
          <span>Home</span>
          <span>About</span>
          <span>Pricing</span>
          <span>Blogs</span>
        </div>
        <div className="items-center">
          <button className="bg-black text-white px-4 py-2 rounded-2xl cursor-pointer">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
