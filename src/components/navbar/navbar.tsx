import { Button } from "../ui/button";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="flex justify-center fixed w-full">
      <div className="flex justify-between items-center max-w-[1028px] w-[800px] mx-auto bg-opacity-20 mb-4 backdrop-blur-lg bg-white shadow-lg bg-inherit text-white h-16 translate-y-4 p-4 rounded-full">
        <a href="#">
          <h1 className="text-4xl font-extrabold text-green-400 pl-4">
            Orbitify.
          </h1>
        </a>
        <ul className="links flex justify-around items-center gap-4 pr-4">
          <li>
            <a href="">Launches</a>
          </li>
          <li>
            <a href="">Astronauts</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <Button className="text-green-400" variant={"secondary"}>
              Login
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
