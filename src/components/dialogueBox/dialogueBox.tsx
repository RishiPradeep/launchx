import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Dialogbox() {
  const [search, Setsearch] = useState("");
  const [searchLaunches, SetsearchLaunches] = useState<any>([]);
  const [loading, Setloading] = useState(false);
  const [error, Seterror] = useState(false);
  const [next, Setnext] = useState(null);

  const searchLaunch = async () => {
    try {
      Setloading(true);
      Seterror(false);
      Setnext(null);
      const response = await fetch(
        `https://lldev.thespacedevs.com/2.2.0/launch/?search=${search}`
      );
      const data = await response.json();
      if (data.count === 0) {
        Seterror(true);
        Setloading(false);
      } else {
        SetsearchLaunches(data.results);
        Setnext(data.next);
        Setloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadNext = async () => {
    try {
      Setloading(true);
      if (next != null) {
        const response = await fetch(next);
        const data = await response.json();
        SetsearchLaunches([...searchLaunches, ...data.results]);
        Setnext(data.next);
        Setloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <div className="flex gap-2 items-center">
            <FaSearch size={20} />
            <div>Search</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-secondary-foreground border-none text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Search</DialogTitle>
          <DialogDescription>
            {error ? (
              <div className="text-red-500">No Results !</div>
            ) : (
              "Search for a launch"
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-around items-center gap-4">
            <Label htmlFor="name" className="text-right">
              <FaSearch className="text-green-400" size={20} />
            </Label>
            <Input
              onChange={(e) => {
                Setsearch(e.target.value);
              }}
              id="name"
              placeholder="Launch name / Agency"
            />
          </div>
          <div className="text-white flex-col max-h-[300px] overflow-y-scroll divide-y-2 divide-slate-400 divide-opacity-50 ">
            {searchLaunches.map((item: any, index: number) => {
              return (
                <div className="py-4" key={index}>
                  <a className="flex items-center gap-4" href="/craft">
                    <div>{item.name} </div>
                    <span className="text-green-400">
                      <FaExternalLinkAlt size={15} />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <DialogFooter>
          <div className="flex gap-4">
            {next != null ? (
              <Button onClick={loadNext} variant={"secondary"}>
                Load More
              </Button>
            ) : null}
            <Button variant={"secondary"} onClick={searchLaunch}>
              {loading ? "Loading..." : "Search"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
