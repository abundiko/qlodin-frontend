import { ServiceStatus } from "@/types";
import { HiCheckCircle } from "react-icons/hi";
import { LuLoader, LuX } from "react-icons/lu";

export default function InputStatusCheckerIcon({
  status,
}: {
  status: ServiceStatus;
}) {
  switch (status) {
    case "idle":
      return <></>;
    case "loading":
      return <LuLoader className="animate-spin" />;
    case "success":
      return <HiCheckCircle title="available" className="text-green-500" />;
    case "error":
      return <LuX className="text-red-500" />;
  }
}
