import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function LaunchCard({ launch }: { launch: any }) {
  let statusColor = "";
  if (launch.status.id == 3) {
    statusColor = "text-green-500";
  } else {
    statusColor = "text-red-500";
  }
  let country = launch.pad.country_code;
  const [flagUrl, SetflagUrl] = useState("");
  var launchDate = new Date(launch.window_start);
  var day = launchDate.getDate();
  var month = launchDate.toLocaleString("en-US", { month: "short" });
  var year = launchDate.getFullYear();
  var hours = launchDate.getHours();
  var minutes = launchDate.getMinutes();

  var formattedDate =
    day +
    "-" +
    month +
    "-" +
    year +
    " " +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes;
  useEffect(() => {
    const getFlag = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${country}`
        );
        const data = await response.json();
        SetflagUrl(data[0].flags.png);
      } catch (error) {
        console.log(error);
      }
    };
    getFlag();
  }, []);

  return (
    <div className="grid grid-cols-4 mt-4 border rounded-xl max-w-[700px] min-w-[500px] shadow-lg mx-auto border-slate-500">
      <div className="col-span-1 p-5">
        <img
          className="rounded-lg h-32 self-center content-center align-middle"
          src={launch.image}
          alt=""
        />
      </div>
      <div className="col-span-3 flex-col">
        <Link
          className=" text-green-400 hover:underline underline-offset-4"
          to={`/launches/${launch.id}`}
        >
          <div className="p-4 pb-2 font-bold text-xl">{launch.name}</div>
        </Link>
        <div className="px-4 text-sm pb-4">{launch?.mission?.description}</div>
        <div className="flex gap-2 text-sm p-4 py-1 items-center">
          <div>Origin : </div>
          <div className="flex gap-2">
            <div>{launch.launch_service_provider.name}</div>
            <img src={flagUrl} alt="" className="h-[20px] w-[30px]" />
          </div>
        </div>
        <div className="flex text-sm px-4 gap-2">
          <div>Launch Date :</div>
          <div>{`${formattedDate}`}</div>
        </div>
        <div className="flex gap-2 text-sm p-4 items-center">
          <div>Status : </div>
          <div className={statusColor}>
            <div>{launch.status.abbrev}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
