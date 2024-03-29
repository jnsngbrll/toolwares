import React, { useContext } from 'react';
import {
  IoMenuOutline,
  IoSearchOutline,
  IoCartOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

export const NavBar = () => {
  const { isSearchbarActive, setIsSearchbarActive } = useContext(Context);

  return (
    <div className="flex items-center justify-between z-10">
      <div className="flex items-center gap-2">
        <div className="text-2xl cursor-pointer">
          <IoMenuOutline />
        </div>
        <Link to="/" className="text-xl font-extrabold text-[--secondary]">
          Toolwares.
        </Link>
      </div>
      <div className="flex items-center gap-2 lg:gap-4 text-2xl font-bold">
        <div
          onClick={() => setIsSearchbarActive(true)}
          className={`cursor-pointer ${isSearchbarActive ? 'hidden' : 'block'}`}
        >
          <IoSearchOutline />
        </div>
        <div className="flex items-center">
          <div>
            <IoHeartOutline />
          </div>
          <span className="text-[15px] font-medium">0</span>
        </div>
        <div className="flex items-center">
          <div>
            <IoCartOutline />
          </div>
          <span className="text-[15px] font-medium">0</span>
        </div>
      </div>
    </div>
  );
};
