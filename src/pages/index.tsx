import MainContentArea from "./components/MainContentArea";
import Sidebar from "./components/Sidebar";
import { montserrat } from "./fonts/fonts";

export default function Home() {
  return (
    <div
      className={` text-white bg-[#111927]  bg-[radial-gradient(at_47%_33%,hsl(180,1%,3%)_0,transparent_59%),radial-gradient(at_12%_45%,hsl(163.58,49%,18%)_0,transparent_55%)] w-full h-screen ${montserrat.variable}`}
    >
      <div className=" flex flex-row">
        <Sidebar></Sidebar>

        <MainContentArea />
      </div>
    </div>
  );
}
