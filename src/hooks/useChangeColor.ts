import { useEffect, useRef } from "react";

type Props = {
  type: "background" | "color" | "border" | "path";
};

function itearateOverAllHexColors(element: HTMLElement, type : string = "background" ) {

  const colors = [
    "rgb(255,0,0)",
    "rgb(255,127,0)",
    "rgb(255,255,0)",
    "rgb(127,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,127)",
    "rgb(0,255,255)",
    "rgb(0,127,255)",
    "rgb(0,0,255)",
    "rgb(127,0,255)",
    "rgb(255,0,255)",
    "rgb(255,0,127)"
  ];

  let index = 0;
  setInterval(() => {
    element.setAttribute("style", `${type}: ${colors[index]}; transition: 1s`);
    index = (index + 1) % colors.length;
  }, 500);
}

export function useChangeColor( { type = "background" }: Props ) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      itearateOverAllHexColors(ref.current, type);
    }
  }, [type]);

  return ref;
}

