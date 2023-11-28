"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Label } from "./ui/label";

export type SelectItem = {
  value: string;
  label: string;
};

export interface SelectFieldProps {
  placeholder?: string;
  name: string;
  label?: string;
  items: SelectItem[];
}

export default function SelectField({
  placeholder = "Select...",
  label,
  name,
  items = [],
}: SelectFieldProps) {
  return (
    <>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <Select name={name}>
        <SelectTrigger id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem value={item.value} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
