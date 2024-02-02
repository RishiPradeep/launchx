import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="flex justify-center fixed w-full">
      <div className="flex justify-between items-center max-w-[1028px] w-[800px] mx-auto bg-opacity-20 mb-4 backdrop-blur-lg bg-white shadow-lg bg-inherit text-white h-16 translate-y-4 p-4 rounded-full">
        <Link to={"/"}>
          <h1 className="text-4xl font-extrabold text-green-400 pl-4">
            Orbitify.
          </h1>
        </Link>
        <ul className="links flex justify-around items-center gap-4 pr-4">
          <li>
            <Link to={"/launches"}>Launches</Link>
          </li>
          <li>
            <Link to={"/astronauts"}>Astronauts</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
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
