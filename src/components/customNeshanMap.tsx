"use client";
import { FC } from "react";
import NeshanMap from "@neshan-maps-platform/react-openlayers";
import "@neshan-maps-platform/react-openlayers/dist/style.css";
// interface CustomNeshanMapProps {}

const CustomNeshanMap: FC = () => {
  return (
    <>
      <NeshanMap mapKey={"web.91315c623fc243238e5679a3e2a0da09"}></NeshanMap>
    </>
  );
};

export default CustomNeshanMap;
