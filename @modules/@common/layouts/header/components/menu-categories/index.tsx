import clsx from "clsx";
import React from "react";

const MenuCategories = ({ isOpen, type, menuCategory }: any) => {
  if (type === "product") {
    return (
      <div
        className={clsx(
          "absolute md:left-[-290px] lg:left-[-300px] top-full mt-4 md:w-[900px] lg:w-[1150px] bg-white p-6 grid grid-cols-4 gap-4 shadow-xl rounded-md z-50 transition-all duration-300",
          isOpen
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-95"
        )}
        style={{ fontSize: "13px", color: "rgb(27,27,30)", lineHeight: "35px" }}
      >
        {menuCategory.map((parent: any, i: any) => (
          <div key={i}>
            <h3 className="font-bold text-[13px] mb-2">{parent?.name}</h3>
            <ul className="space-y-1">
              {parent?.children.map((item: any, i: any) => (
                <li key={i} className="hover:text-[#6b3d2e] cursor-pointer">
                  {item?.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  const pages = ["About Us", "Team", "Services", "404 Page"];
  return (
    <div
      className={clsx(
        "absolute left-0 top-full mt-4 w-48 bg-white p-4 shadow-xl rounded-md z-50 transition-all duration-300",
        isOpen
          ? "opacity-100 visible scale-100"
          : "opacity-0 invisible scale-95"
      )}
      style={{ fontSize: "13px", color: "rgb(27,27,30)" }}
    >
      <ul className="space-y-2">
        {pages.map((page, i) => (
          <li key={i} className="cursor-pointer hover:text-[#6b3d2e]">
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategories;
