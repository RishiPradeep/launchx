import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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

export function Dialogbox() {
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
          <DialogTitle className="text-green-400">Search</DialogTitle>
          <DialogDescription>Search for a Launch</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Launch name" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Search</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
