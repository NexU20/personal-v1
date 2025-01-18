import { Badge } from "@/components/ui/badge";

export function ToolBadge({ name }: { name: string }) {
  return (
    <Badge className="!bg-teal-600 bg-opacity-60 !text-white">{name}</Badge>
  );
}
