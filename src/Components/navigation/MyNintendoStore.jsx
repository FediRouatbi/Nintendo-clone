import React from "react";
import Element from "./Element";
import { ReactComponent as Games } from "../../assets/Header/games.svg";
import { ReactComponent as Hardware } from "../../assets/Header/hardware.svg";
import { ReactComponent as Merchandise } from "../../assets/Header/merchandise.svg";
import { ReactComponent as Store } from "../../assets/Header/store.svg";
import { ReactComponent as Characters } from "../../assets/Header/characters.svg";
import { ReactComponent as Sales } from "../../assets/Header/sales.svg";
const MyNintendoStore = () => {
  return (
    <div className="flex gap-5 ">
      <Element
        Icon={Games}
        iconText="Games"
        list={["Nintendo Switch games", "New releases", "Sales & deals"]}
      />
      <Element
        Icon={Hardware}
        iconText="Hardware"
        list={[
          "Nintendo Switch systems",
          "Joy-Con & controllers",
          "Cases & more",
          "Replacement parts",
        ]}
      />
      <Element
        Icon={Merchandise}
        iconText="Merchandise"
        list={["Apparel & accessories", "Home & office", "Plush", "Toys"]}
      />
      <Element
        Icon={Store}
        iconText="Store exclusives"
        list={[
          "Exclusive products",
          "My Nintendo rewards",
          "Nintendo Switch Online offers",
        ]}
      />
      <Element
        Icon={Characters}
        iconText="Characters"
        list={["Mario", "The Legend of Zelda", "Sales & deals"]}
      />
      <Element Icon={Sales} iconText="Sales & deals" list={[]} />
    </div>
  );
};

export default MyNintendoStore;
