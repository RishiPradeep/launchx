import { CiLink } from "react-icons/ci";
export default function UpdateCard({ update }: { update: any }) {
  const createDate = new Date(update.created_on);
  let classForLink = "";
  if (update.info_url === null) {
    classForLink = "text-white flex";
  } else {
    classForLink =
      "text-white hover:text-green-400 hover:underline-offset-[2px] hover:underline flex gap-2 items-center";
  }
  return (
    <div className="mt-4 rounded-md border h-fit w-[500px] border-slate-600 grid grid-cols-5 ">
      <div className="col-span-1 self-center">
        <img
          className="h-[50px] w-[50px] rounded-full m-5"
          src={update.profile_image}
          alt=""
        />
      </div>
      <div className="col-span-4 flex flex-col p-4">
        <div>
          <a target="_blank" className={classForLink} href={update.info_url}>
            {update.comment}
            {classForLink === "text-white flex" ? (
              ""
            ) : (
              <div>
                <CiLink size={15} />
              </div>
            )}
          </a>
        </div>
        <div className="flex gap-2">
          <div className="text-slate-300">Created By :</div>
          <div>{update.created_by}</div>
        </div>
        <div className="flex gap-2">
          <div className="text-slate-300">Date :</div>
          <div>{createDate.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
