import { Button } from "../ui/button";
export default function Getstarted() {
  return (
    <div className="text-3xl text-white font-bold mt-4 mb-8">
      <div>
        Ready for <span className="text-green-400">Liftoff ? </span>
      </div>
      <Button className="text-green-400 mt-4" variant={"secondary"}>
        Get Started
      </Button>
    </div>
  );
}
