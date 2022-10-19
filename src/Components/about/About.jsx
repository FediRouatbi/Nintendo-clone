import React, { useState } from "react";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Tv } from "../../assets/tv.svg";
import { ReactComponent as Tablet } from "../../assets/tablet.svg";
import { ReactComponent as Handheld } from "../../assets/handheld.svg";
import { ReactComponent as Date } from "../../assets/date.svg";
import { ReactComponent as Player } from "../../assets/player.svg";
import { ReactComponent as GenreDate } from "../../assets/genre.svg";
import { ReactComponent as Publisher } from "../../assets/publisher.svg";
import { ReactComponent as Rating } from "../../assets/rating.svg";
import { ReactComponent as PlayModes } from "../../assets/playModes.svg";
import { ReactComponent as GameSize } from "../../assets/gameSize.svg";
import { ReactComponent as Languages } from "../../assets/languages.svg";
import { ReactComponent as Online } from "../../assets/online.svg";
import Info from "./Info";
import Esrb from "../Esrb";
const About = () => {
  const [show, setShow] = useState(false);
  return (
    <section>
      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row gap-5 px-3 xl:px-0 text-sm md:text-base text-gray my-16">
        <div className="w-full md:max-w-[50%] pt-4">
          <p>
            You ve inherited your grandfather s old farm plot in Stardew Valley.
            Armed with hand-me-down tools and a few coins, you set out to begin
            your new life. Can you learn to live off the land and turn these
            overgrown fields into a thriving home? It won t be easy. Ever since
            Joja Corporation came to town, the old ways of life have all but
            disappeared. The community center, once the town s most vibrant hub
            of activity, now lies in shambles. But the valley seems full of
            opportunity . With a little dedication, you might just be the one to
            restore Stardew Valley to greatness!
            {show && (
              <>
                <span>
                  <br /> <br />
                  Now with Multiplayer! Invite 1-3 players to join you in the
                  valley! Players can work together to build a thriving farm,
                  share resources, and build relationships with townspeople or
                  each other. As more hands are better than one, players have
                  the option to scale profit margin on produce sold for a more
                  challenging experience.
                </span>{" "}
                <button className="w-full  duration-500   bg-red/80 hover:bg-red font-bold py-4 text-base text-white my-5 rounded-md">
                  Explore this games official website
                </button>
              </>
            )}
          </p>
          <button
            onClick={() => setShow((prv) => !prv)}
            className="flex gap-2 py-3 text-red/80 hover:text-red items-center"
          >
            {show ? <Minus className="w-5" /> : <Plus className="w-5" />}
            <span className=" font-bold">Read {show ? "less" : "more"}</span>
          </button>
          <p className="pb-10 text-xs">
            Software description provided by the publisher.
          </p>
        </div>
        <div className="flex-grow w-full">
          <img
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0000000298023224/c_scale,w_400/ncom/en_US/games/switch/s/stardew-valley-switch/hero"
            alt=""
          />
        </div>
      </div>
      <div className=" max-w-6xl mx-auto flex gap-10 px-0  md:px-3 xl:px-0 flex-col md:flex-row mb-8">
        <div className="flex-grow w-full bg-lightGray text-center pb-9 pt-4 ">
          <h5 className="font-medium ">ESRB rating</h5>

          <Esrb className="flex shadow-lg mt-5 gap-2 w-5/6  bg-white m-auto p-4 items-center" />
        </div>
        <div className="flex-grow w-full bg-lightGray  text-center p-4">
          <h5 className="font-medium ">Supported play modes </h5>
          <div className="flex justify-between mt-5 gap-5 m-auto  items-center">
            <div className="w-full">
              <div className="bg-darkBlue rounded-md flex justify-center ">
                <Tv className="p-3 rounded-md w-20 bg-darkBlue text-white" />
              </div>
              <p className="font-semibold pt-2">Tv</p>
            </div>
            <div className="w-full">
              <div className="bg-darkBlue rounded-md flex justify-center ">
                <Tablet className="p-3  w-20  text-white" />
              </div>
              <p className="font-semibold pt-2">Tabletop</p>
            </div>
            <div className="w-full">
              <div className="bg-darkBlue rounded-md flex justify-center ">
                <Handheld className="p-3 w-20  text-white" />
              </div>
              <p className="font-semibold pt-2">Handheld</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[96%] md:max-w-6xl mx-auto px-4 sm:px-0">
        <Info Icon={Date} title="Release date" info="October 5,2017" />
        <Info
          Icon={Player}
          title="No. of players"
          redText={["Single System(1)", "Local wireless(1)", "Online(1-4)"]}
        />
        <Info
          Icon={GenreDate}
          title="Genre"
          redText={["Role-Playing", "Simulation"]}
        />
        <Info Icon={Publisher} title="Publisher" redText={["ConcernedApe"]} />
        <Info Icon={Rating} title="ESRB rating" redText={["Everyone 10+"]} />
        <Info
          Icon={PlayModes}
          title="Supported play modes"
          info="TV mode, Tabletop mode, Handheld mode"
        />
        <Info Icon={GameSize} title="Game file size" info="1.5 GB" />
        <Info
          Icon={Languages}
          title="Supported languages"
          info="English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese"
        />
        <hr className="text-gray " />
      </div>

      <div className=" max-w-6xl flex w-[96%]    mx-auto   my-9 p-8 bg-lightGray">
        <div>
          <Online />
          <p className="py-5 font-bold text-gray">
            Play online, access classic NES™ and Super NES™ games, and more with
            a Nintendo Switch Online membership.
          </p>
          <p className="pb-10">
            This game supports
            <span className="underline underline-offset-2 text-red">
              Online Play
            </span>
            <span className="underline underline-offset-2 text-red">
              Save Data Cloud
            </span>
          </p>
          <a
            href=""
            className="mt-9 font-medium rounded-md text-white bg-red px-6 py-4"
          >
            Learn more
          </a>
        </div>
        <img
          className="hidden md:block w-1/2"
          src="https://assets.nintendo.com/image/upload/f_auto,q_auto/v1605147657/ncom/en_US/merchandising/curated list/Games for core gamers/Pro-Controller-Hands.png"
          alt=""
        />
      </div>
      <div className="lg:mx-auto mx-0 text-[10px] max-w-6xl lg:px-0 px-4 ">
        <p>
          WARNING: If you have epilepsy or have had seizures or other unusual
          reactions to flashing lights or patterns, consult a doctor before
          playing video games. All users should read the Health and Safety
          Information available in the system settings before using this
          software.
        </p>
        <br />
        <p>
          Nintendo Switch Online membership (sold separately) and Nintendo
          Account required for online play. Not available in all countries.
          Internet access required for online features. Terms apply.{" "}
        </p>
        <br />
        <p>Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.</p>
      </div>
    </section>
  );
};

export default About;
