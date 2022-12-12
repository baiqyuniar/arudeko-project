import React, { useState } from "react";
import { links } from "./navLinks";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const NavbarDrop = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const { t } = useTranslation();

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="hover:bg-slate-600 hover:rounded-lg text-left md:cursor-pointer group">
            <h1 className="py-4 flex justify-between text-white items-center md:pr-0 pr-3 group">
              {t(link.name)}
              <span className="text-xl text-white md:hidden inline">
                <AiOutlineUp
                  className={`${
                    heading === t(link.name) ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )
                  }`}
                />
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <AiOutlineDown />
              </span>
            </h1>
            {link.submenu && (
              <div className="opacity-[0.89]">
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-gray-400 rotate-45"
                    ></div>
                  </div>
                  <div className="bg-gray-400 p-8 grid grid-cols-3 gap-10 lg:w-auto">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg text-center font-semibold">
                          {/* {mysublinks.Head} */}
                          {t(mysublinks.Head)}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-white my-8 p-2 rounded-xl hover:bg-slate-600">
                            <a href={slink.link}>{t(slink.name)}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:block" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head ? (
                            <AiOutlineUp />
                          ) : (
                            <AiOutlineDown />
                          )
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <a href={slink.link}>{slink.name}</a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavbarDrop;
