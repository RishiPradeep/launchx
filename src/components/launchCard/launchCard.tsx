import { Button } from "../ui/button";
export default function LaunchCard({ launch }: { launch: any }) {
  return (
    <div className="grid grid-cols-5 mt-4 border rounded-md border-white">
      <div className="col-span-1 p-5">
        <img
          className="rounded-l-md h-32 self-center content-center align-middle"
          src={launch.image}
          alt=""
        />
      </div>
      <div className="col-span-3 flex-col">
        <div className="p-4 text-xl">{launch.name}</div>
        <div className="px-4 text-sm pb-2">{launch.mission.description}</div>
      </div>
      <div className="col-span-1 self-end m-4">
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
