import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import UpdateCard from "@/components/updateCard/updateCard";

export default function ExtendedLaunch() {
  const params = useParams();
  const { id } = params;
  const [launchData, setLaunchData] = useState<any>({});
  const [loading, Setloading] = useState(false);
  const startWindow = new Date(launchData.window_start);
  const endWindow = new Date(launchData.window_end);
  const launchTime = new Date(launchData.net);
  const [desc, setDesc] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [patchUrl, setPatchUrl] = useState("");
  const [otherLinks, setOtherLinks] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        Setloading(true);
        const response = await fetch(
          `https://lldev.thespacedevs.com/2.2.0/launch/{${id}}`
        );
        const data = await response.json();
        setDesc(data.mission.description);
        if (data.vidURLs.length > 0) {
          setVideoUrl(data.vidURLs[0].url);
        }
        if (data.mission_patches.length > 0) {
          setPatchUrl(data.mission_patches[0].image_url);
        }
        if (data.infoURLs.length > 0) {
          setOtherLinks(data.infoURLs);
        }
        setLaunchData(data);
        Setloading(false);
      } catch (error) {
        console.log(error);
        Setloading(false);
      }
    };
    getData();
  }, []);

  return loading ? (
    <div className="flex-col gap-4 conatiner mx-auto max-w-[1200px] my-12 text-white">
      <div>Loading...</div>
    </div>
  ) : (
    <div className="flex-col gap-4 conatiner mx-auto max-w-[1200px] my-12 text-white">
      <img
        className="h-[500px] min-w-[300px] mx-auto rounded"
        src={launchData.image}
        alt=""
      ></img>
      <div className="flex justify-center py-4">
        <div className="flex-col divide-y-[1px] divide-slate-600">
          {/* Name */}
          <div className="text-2xl py-4 text-green-400 font-bold">
            {launchData.name}
          </div>
          {/* Description */}
          <div className="py-4">{desc}</div>
          {/* Details */}
          <div className="md:grid-cols-5 md:items-center grid py-4 sm:flex-col">
            <div className="col-span-1">
              <img className="rounded-md" src={patchUrl} alt="Logo" />
            </div>
            <div className="col-span-2 md:pl-8">
              <div className="flex-col">
                <div className="flex gap-2 items-center">
                  <span className="text-green-400 font-bold">LSP :</span>{" "}
                  <a
                    className="hover:text-green-400 hover:underline-offset-[2px] hover:underline"
                    target="_blank"
                    href={launchData?.launch_service_provider?.info_url}
                  >
                    {launchData?.launch_service_provider?.name}
                  </a>
                  <span className="text-green-400">
                    <FaExternalLinkAlt size={15} />
                  </span>
                </div>
                <div className="overflow-x-hidden flex gap-[1px]">
                  <div className="text-green-400 font-bold">Country</div>
                  <div className="text-green-400">:</div>
                  <div>{launchData?.launch_service_provider?.country_code}</div>
                </div>
                <div>
                  <span className="text-green-400 font-bold">Launchers : </span>{" "}
                  {launchData?.launch_service_provider?.launchers}
                </div>
                <div>
                  <span className="text-green-400 font-bold">
                    Spacecraft :{" "}
                  </span>{" "}
                  {launchData?.launch_service_provider?.spacecraft}
                </div>
                <div>
                  <span className="text-green-400 font-bold">Orbit : </span>{" "}
                  {launchData?.mission?.orbit?.name}
                </div>
                <div>
                  <span className="text-green-400 font-bold">Status : </span>{" "}
                  {launchData?.status?.abbrev}
                </div>
              </div>
            </div>
            <div className="col-span-2 pl-2">
              <div className="flex-col">
                <div>
                  <span className="text-green-400 font-bold">
                    Window Start :
                  </span>{" "}
                  {startWindow.toLocaleString()}{" "}
                </div>
                <div>
                  <span className="text-green-400 font-bold">Window End :</span>{" "}
                  {endWindow.toLocaleString()}
                </div>
                <div>
                  <span className="text-green-400 font-bold">
                    Launch Date :
                  </span>{" "}
                  {launchTime.toLocaleString()}
                </div>
                <div>
                  <span className="text-green-400 font-bold">
                    Probability :
                  </span>{" "}
                  {launchData?.probability === null
                    ? "N/A"
                    : `${launchData.probability}%`}
                </div>
                <div>
                  <span className="text-green-400 font-bold">Type :</span>{" "}
                  {launchData?.mission?.type}
                </div>
              </div>
            </div>
          </div>
          {/* Agnecy and patch */}
          <div>
            <div className="font-bold text-2xl text-green-400 py-4">Agency</div>
            <div className="grid grid-cols-4">
              <div className="col-span-1 self-center">
                <img
                  src={launchData?.launch_service_provider?.logo_url}
                  alt="Agency Logo"
                />
              </div>
              <div className="col-span-2 pb-4 pl-16">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <div className="text-green-400">Name :</div>
                    <div>{launchData?.launch_service_provider?.name}</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-green-400">Type :</div>
                    <div>{launchData?.launch_service_provider?.type}</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-green-400">Country :</div>
                    <div>
                      {launchData?.launch_service_provider?.country_code}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-green-400">Administrator :</div>
                    <div>
                      {launchData?.launch_service_provider?.administrator}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-green-400">Founding Year :</div>
                    <div>
                      {launchData?.launch_service_provider?.founding_year}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-green-400">Launchers :</div>
                    <div>{launchData?.launch_service_provider?.launchers}</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-green-400">Total Launches :</div>
                    <div>
                      {launchData?.launch_service_provider?.total_launch_count}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-green-400">Successful Launches :</div>
                    <div>
                      {launchData?.launch_service_provider?.successful_launches}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-4 pt-4 text-md text-slate-400">
              {launchData?.launch_service_provider?.description}
            </div>
          </div>
          {/* Updates */}
          <div className="py-4 flex-col">
            <div className="text-green-400 text-2xl font-bold pb-4">
              Updates
            </div>
            <div className="grid grid-cols-2">
              {/* Updates */}
              <div className="flex flex-col h-[500px] w-fit px-1 pr-4 overflow-y-scroll col-span-1">
                {launchData?.updates?.map((update: any, index: number) => {
                  return <UpdateCard update={update} key={index}></UpdateCard>;
                })}
              </div>
              {/* Rocket */}
              <div className="col-span-1 flex flex-col">
                <div className="text-2xl font-bold text-green-400 pb-4">
                  Rocket
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Name :</div>
                  <div className="flex gap-2 items-center">
                    <a
                      className="hover:text-green-400 hover:underline-offset-[2px] hover:underline"
                      target="_blank"
                      href={launchData?.rocket?.configuration?.wiki_url}
                    >
                      {launchData?.rocket?.configuration?.name}
                    </a>
                    <FaExternalLinkAlt className="text-green-400" size={15} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Active :</div>
                  <div>
                    {launchData?.rocket?.configuration?.active
                      ? "True"
                      : "False"}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Reusable ? :</div>
                  <div>
                    {launchData?.rocket?.configuration?.reusable
                      ? "True"
                      : "False"}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Family:</div>
                  <div>{launchData?.rocket?.configuration?.family}</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Manufacturer :</div>
                  <div>
                    {launchData?.rocket?.configuration?.manufacturer?.abbrev}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Maiden Flight :</div>
                  <div>{launchData?.rocket?.configuration?.maiden_flight}</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Stages :</div>
                  <div>{launchData?.rocket?.configuration?.max_stage}</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Length :</div>
                  <div>{launchData?.rocket?.configuration?.length}m</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Diameter :</div>
                  <div>{launchData?.rocket?.configuration?.diameter}m</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Launch Mass :</div>
                  <div>
                    {launchData?.rocket?.configuration?.launch_mass} tonnes
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">LEO Capacity :</div>
                  <div>
                    {launchData?.rocket?.configuration?.leo_capacity} kgs
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Launches :</div>
                  <div>
                    {launchData?.rocket?.configuration?.total_launch_count}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Launch Cost :</div>
                  <div>{launchData?.rocket?.configuration?.launch_cost} $</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Range :</div>
                  <div>{launchData?.rocket?.configuration?.vehicle_range}</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Links :</div>
                  <div className="flex gap-2 items-center">
                    <a
                      className="hover:text-green-400 hover:underline-offset-[2px] hover:underline"
                      target="_blank"
                      href={launchData?.rocket?.configuration?.image_url}
                    >
                      Image
                    </a>
                    <FaExternalLinkAlt className="text-green-400" size={15} />
                    <a
                      className="hover:text-green-400 hover:underline-offset-[2px] hover:underline"
                      target="_blank"
                      href={launchData?.rocket?.configuration?.info_url}
                    >
                      Info
                    </a>
                    <FaExternalLinkAlt className="text-green-400" size={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LaunchPad */}
          <div className="flex flex-col mb-4">
            <div className="text-2xl font-bold text-green-400 py-4">
              Launchpad
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-2">
                <img src={launchData?.pad?.map_image} alt="launchpad" />
              </div>
              <div className="col-span-3 flex flex-col pl-4">
                <div className="font-bold text-xl text-green-400 flex gap-2 items-center hover:underline">
                  <a target="_blank" href={launchData?.pad?.wiki_url}>
                    {launchData?.pad?.name}
                  </a>
                  <FaExternalLinkAlt className="text-green-400" size={15} />
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Location :</div>
                  <div>{launchData?.pad?.location?.name}</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Latitude :</div>
                  <div>{launchData?.pad?.latitude} &deg;</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Longitude :</div>
                  <div>{launchData?.pad?.longitude} &deg;</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Timezone :</div>
                  <div>{launchData?.pad?.location?.timezone_name}</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Country :</div>
                  <div>{launchData?.pad?.country_code}</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-green-400">Total Launches :</div>
                  <div>{launchData?.pad?.total_launch_count}</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-green-400">Links:</div>
                  <div className="hover:text-green-400 hover:underline flex gap-2 items-center">
                    <a target="_blank" href={launchData?.pad?.map_url}>
                      Map
                    </a>
                    <FaExternalLinkAlt className="text-green-400" size={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video and orbit */}
          <div className="flex flex-col py-4">
            <div className="grid grid-cols-2">
              <div className="text-green-400 text-2xl flex-col font-bold col-span-1">
                Related Videos
                <div className="pt-4">
                  <iframe
                    width="520"
                    height="315"
                    src={`https://www.youtube.com/embed/${
                      videoUrl.split("=")[1]
                    }`}
                  ></iframe>
                </div>
              </div>
              <div className="text-green-400 text-2xl flex-col font-bold col-span-1">
                Related Links
                <div className="pt-4 flex-col text-md text-white font-thin hover:text-green-400 hover:underline">
                  <a
                    className="flex gap-2 items-center"
                    target="_blank"
                    href={otherLinks.length > 0 ? otherLinks[0]?.url : null}
                  >
                    <div>Info</div>
                    <FaExternalLinkAlt className="text-green-400" size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
