import { Filtermenu } from "@/components/filterMenu/filterMenu";
import Navbar from "@/components/navbar/navbar";
import { Selectdate } from "@/components/selectDate/selectDate";
import { Dialogbox } from "@/components/dialogueBox/dialogueBox";
import LaunchCard from "@/components/launchCard/launchCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Divide } from "lucide-react";
export default function Launches() {
  const [loading, Setloading] = useState(false);
  const [next, Setnext] = useState("");
  const [launches, Setlaunches] = useState<any>([]);
  const [loadingMore, SetloadingMore] = useState(false);

  useEffect(() => {
    const getLaunches = async () => {
      try {
        Setloading(true);
        const response = await fetch(
          "https://lldev.thespacedevs.com/2.2.0/launch/?limit=50"
        );
        const data = await response.json();
        Setloading(false);
        Setlaunches(data.results);
        Setnext(data.next);
      } catch (error) {
        console.log(error);
      }
    };
    getLaunches();
  }, []);

  const getNextData = async () => {
    try {
      SetloadingMore(true);
      const response = await fetch(next);
      const data = await response.json();
      Setlaunches([...launches, ...data.results]);
      SetloadingMore(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dark">
      <Navbar />
      <div className="pt-32 max-w-[1024px] mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-4 text-white items-center">
            <Filtermenu />
            <Selectdate type="From" />
            <div>-</div>
            <Selectdate type="To" />
          </div>
          <div>
            <Dialogbox />
          </div>
        </div>
        {loading ? (
          <div className="text-white text-2xl text-center pt-12">
            Loading...
          </div>
        ) : (
          <div className="flex-col pt-12 gap-8 justify-center text-white">
            {launches.map((launch: any, index: number) => (
              <LaunchCard key={index} launch={launch} />
            ))}
          </div>
        )}
        <div className="flex justify-center py-4">
          {loadingMore ? (
            <div className="text-white text-lg">Loading...</div>
          ) : (
            <Button onClick={getNextData}>Load More ...</Button>
          )}
        </div>
      </div>
    </div>
  );
}
