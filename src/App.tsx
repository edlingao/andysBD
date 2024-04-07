import { Andy1 } from "./assets/Andy1";
import { Andy2 } from "./assets/Andy2";
import { AndysBirthday } from "./assets/Andys";
import { Birthday } from "./assets/Birthday";
import { Gift } from "./assets/Gift";
import { Location } from "./assets/Location";
import { NEON } from "./assets/NEON";
import { NeonTriangle } from "./assets/NeonTriangle";
import { CountDown } from "./components/CountDown";

export default function App() {
  return (
    <div className="main-stuff h-[100dvh] flex flex-col">
      <div className="flex flex-col gap-10 z-10 p-2 text-center rgb-animation-shadow text-white font-extralight">
        <h1 className="font-extralight">04.05.2024</h1>
        <h1 className="font-extralight">5 PM</h1>
      </div>
      <CountDown />
      <div className="z-10 center m-auto relative flex flex-col justify-center items-center">
        <AndysBirthday className="mb-[-1rem]" />
        <NeonTriangle className="m-auto" />
        <NEON className="birthday absolute top-1/2 left-1/2" />
        <Birthday className="birthday absolute bottom-20 left-1/2" />
      </div>
      <div className="ubication z-10 m-auto w-[100%] p-2 flex flex-row justify-between items-stretch max-w-md">
        <a className="flex flex-col justify-center items-center text-center no-underline text-white" target="_blank" href="https://maps.app.goo.gl/h32pqPgnzQq9q2Ur8">
          <Location />
          <span className="links-bright">MAP</span>
        </a>
        <a className="flex flex-col justify-center items-center text-center no-underline text-white" target="_blank" href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51405530">
          <Gift />
          <span className="links-bright">GIFT TABLE</span>
        </a>
      </div>
      <div className="fixed z-0 h-[100dvh] w-[100dvw] bg-black opacity-50 pointer-events-none">
        <Andy1 className="absolute top-0 left-[-5rem] z-[-1]" />
        <Andy2 className="absolute bottom-0 right-0"/>
      </div> 
    </div>
  )
}


