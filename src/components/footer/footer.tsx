import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./footer.css";
export default function Footer() {
  return (
    <div className="bg-black text-white text-md p-5 flex-col">
      <div className="flex mb-2">
        <span className="text-green-400 pr-4">
          <MdEmail size={25} />
        </span>
        rishipradeep@gmail.com
      </div>
      <div className="flex mb-2 info-links">
        <span className="text-green-400 pr-4">
          <FaLinkedin size={25} />
        </span>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rishi-pradeepkumar-583515241/"
        >
          Rishi Pradeepkumar
        </a>
      </div>
      <div className="flex mb-2 info-links">
        <span className="text-green-400 pr-4">
          <FaGithub size={25} />
        </span>
        <a target="_blank" href="https://github.com/RishiPradeep">
          RishiPradeep
        </a>
      </div>
    </div>
  );
}
