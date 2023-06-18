import { NavLink } from "react-router-dom";
import { navItems } from "../constant/Constant";

export const Header = () => {
  return (
    <div className="text-white font-semibold w-screen h-20 grid   fixed top-16 left-0 z-10">
      <div className="mx-auto me-auto w-full p-4 items-center bg-green-600 flex justify-between">
        {/* this is for logo */}
        <div className="text-3xl">Aman_Brand</div>
        {/* this is for menuItems */}
        <div>
          <ul className="flex justify-center items-center gap-4 ">
            {navItems.map(({ id, link, title }) => {
              return (
              <li key={id}>
                <NavLink to={`${link}`}>{title}</NavLink>
              </li>);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
