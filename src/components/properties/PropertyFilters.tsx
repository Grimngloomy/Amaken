
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, Search } from "lucide-react";

export function PropertyFilters() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#111] p-4">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="uptown">Uptown</SelectItem>
                <SelectItem value="midtown">Midtown</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Price Range</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Min"
              className="w-full"
              min={0}
            />
            <span className="text-gray-400">-</span>
            <Input
              type="number"
              placeholder="Max"
              className="w-full"
              min={0}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="beds">Bedrooms</Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button className="w-full gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
