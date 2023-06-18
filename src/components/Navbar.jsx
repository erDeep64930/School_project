export const Navbar = () => {
  return (
    <div className="text-white font-semibold w-screen h-24 grid bg-black fixed top-0 left-0 z-10">
      <div className="mx-auto me-auto w-full p-4 items-center flex justify-between mb-6">
        {/* this is for ranked */}
        <div>Ranked No1 School -Times of India [Date : June 19 ,2022]</div>
        {/* this is for school */}
        <div>
          For enquiry - call us at{" "}
          <span className="text-green-500">+9112345678 | +9112345678</span>{" "}
          <button className="btn-primary">Email Login </button>{" "}
        </div>
      </div>
    </div>
  );
};
