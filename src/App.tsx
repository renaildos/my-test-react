import React from 'react';
import {SideBarMenu} from "./components/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import { FcAdvertising, FcAutomatic, FcChargeBattery} from 'react-icons/fc';
import profileImage from "./bill.jpeg";


import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  const items: SideBarMenuItem[] =
  [
    {
      id: "1",
      label: "hello",
      icon: FcAdvertising,
      url: "/Products"
    },
    {
      id: "2",
      label: "hello",
      icon: FcAutomatic,
      url: "/Products"
    },
    {
      id: "3",
      label: "hello",
      icon: FcChargeBattery,
      url: "/teste"
    }
];

  const card:SideBarMenuCard = {
    id: "card01",
    displayName: "Renaildo",
    title: "Developer",
    photoUrl: profileImage,
    url: "/"
  }

  return (
    <div>
     <SideBarMenu items={items} card={card}/>
    </div>
  );
}

export default App;