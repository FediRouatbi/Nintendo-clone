import React, { useEffect, useState } from "react";
import { ReactComponent as Nintendo } from "../../assets/nintendo.svg";
import { ReactComponent as NintendoStore } from "../../assets/nintendoStore.svg";
import { ReactComponent as Support } from "../../assets/Header/support.svg";
import { ReactComponent as WichList } from "../../assets/Header/wichList.svg";
import { ReactComponent as Cart } from "../../assets/Header/cart.svg";
import { ReactComponent as Login } from "../../assets/Header/login.svg";
import { ReactComponent as MyNinetndo } from "../../assets/Header/myNintendo.svg";
import { ReactComponent as Games } from "../../assets/Header/games.svg";
import { ReactComponent as Switch } from "../../assets/Header/switch.svg";
import { ReactComponent as News } from "../../assets/Header/news.svg";
import { ReactComponent as Play } from "../../assets/Header/play.svg";
import { ReactComponent as Search } from "../../assets/Header/search.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import Online from "../../assets/Header/Online.svg";
import Switchh from "../../assets/Header/switch.svg";
import Releases from "../../assets/Header/releases.svg";
import Soon from "../../assets/Header/soon.svg";
import Gamess from "../../assets/Header/games.svg";
import Compare from "../../assets/Header/compare.svg";
import Kids from "../../assets/Header/forKids.svg";
import Parents from "../../assets/Header/forParents.svg";
import MyNintendoStore from "./MyNintendoStore";
import NavElement from "./NavElement";
import PlayComponent from "./PlayComponent";
function Header() {
  const [store, setStore] = useState(false);
  const [games, setGames] = useState(false);
  const [switchh, setSwitchh] = useState(false);
  const [news, setNews] = useState(false);
  const [play, setPLay] = useState(false);
  const open = store || games || switchh || news || news || play;

  const closeAllStates = () => {
    setStore(false);
    setGames(false);
    setSwitchh(false);
    setNews(false);
    setPLay(false);
  };

  const onClick = (state, setState) => {
    if (state) setState(false);
    else {
      closeAllStates();
      setState(true);
    }
  };
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);
  return (
    <header className="fixed w-full z-50 ">
      <div className="relative lg:hidden text-white flex gap-16 justify-around items-center py-3 bg-red">
        <Nintendo />
        <NintendoStore />
      </div>
      <nav className=" z-50 bg-white shadow-sm hidden lg:block">
        <div className="h-14 flex gap-4 items-center border-y border-y-lightGray">
          <div className=" bg-red w-fit h-full flex items-center px-4">
            <Nintendo className="text-white" />
          </div>
          <div className="group cursor-pointer hover:text-red flex items-center border-b py-1 w-1/3  text-gray/60">
            <Search className="w-6 text-footerBg group-hover:text-red" />
            <input
              type="text"
              placeholder="Search games, hardware, news, etc"
              className="focus:outline-none   pl-2 w-full cursor-pointer text-[#000] group-hover:placeholder-red "
            />
            <select
              name=""
              id=""
              className="focus:outline-none text-[#000] font-semibold cursor-pointer "
            >
              <option value="All categories">All categories</option>
              <option value="All categories">Games</option>
              <option value="All categories">Hardware</option>
              <option value="All categories">Merchandise</option>
              <option value="All categories">News & Events</option>
              <option value="All categories">Support</option>
            </select>
          </div>
          <nav className=" ml-auto mr-4 font-semibold text-gray ">
            <ul className=" flex gap-5 ">
              <li className="group flex gap-2 items-center  cursor-pointer hover:text-red duration-300">
                <Support />
                Support
              </li>
              <li className="flex gap-2 items-center  cursor-pointer hover:text-red duration-300">
                <WichList />
                Wich List
              </li>
              <li className="flex gap-2 items-center  cursor-pointer hover:text-red duration-300">
                <Cart />
                Cart
              </li>
              <li className="flex gap-2 items-center  cursor-pointer hover:text-red duration-300">
                <Login />
                Login/Sign up
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex    gap-5 justify-center font-semibold border-y text-gray border-y-lightGray">
          <NavElement
            onClick={() => onClick(store, setStore)}
            open={store}
            Icon={MyNinetndo}
            title="My Nintendo Store"
            arrowExist={true}
          />
          <NavElement
            open={games}
            onClick={() => onClick(games, setGames)}
            Icon={Games}
            title="Games"
            arrowExist={true}
          />
          <NavElement
            onClick={() => onClick(switchh, setSwitchh)}
            open={switchh}
            Icon={Switch}
            title="Nintendo Switch"
            arrowExist={true}
          />
          <NavElement Icon={News} title="News & Events" arrowExist={false} />
          <NavElement
            onClick={() => onClick(play, setPLay)}
            open={play}
            Icon={Play}
            title=" Play Nintendo"
            arrowExist={true}
          />
        </div>
      </nav>

      <div
        className={`absolute p-4 hidden lg:block  py-10 -z-10 opacity-0 bg-white bottom-0 ease-in-out transition-all duration-300  left-0  w-full ${
          open && "translate-y-full opacity-100  h-fit"
        }`}
      >
        <Close
          className="text-gray/40 hover:text-gray  duration-300 cursor-pointer absolute top-4 right-4"
          onClick={() => closeAllStates()}
        />
        <div className="flex gap-4 justify-center text-gray ">
          {store && <MyNintendoStore />}
          {games && (
            <>
              <PlayComponent text="Nintendo Switch games" Icon={Switchh} />
              <PlayComponent text="New releases" Icon={Releases} />
              <PlayComponent text="Comming soon" Icon={Soon} />
              <PlayComponent text="Shop games" Icon={Gamess} />
            </>
          )}
          {switchh && (
            <>
              <PlayComponent
                text="Nintendo Switch lineup"
                Icon="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_300/Dev/Global%20Navigation/lineup.png"
              />
              <PlayComponent text="Compare systems" Icon={Compare} />
              <PlayComponent text="Online service" Icon={Online} />
              <PlayComponent
                text="Accessoires"
                Icon="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_200/Dev/Global%20Navigation/procon.png"
              />
              <PlayComponent
                text="Shop systems"
                Icon="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_200/Dev/Global%20Navigation/oled.png"
              />
            </>
          )}
          {play && (
            <>
              <PlayComponent text="For Kids" Icon={Kids} />
              <PlayComponent text="For parents" Icon={Parents} />
            </>
          )}
        </div>
      </div>

      {open && <div className="fixed -z-20 inset-0 bg-gray/20 "></div>}
    </header>
  );
}

export default Header;
