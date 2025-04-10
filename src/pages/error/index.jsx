import { ShieldAlert } from "lucide-react";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <ShieldAlert color="#aa1d1d" size={68} />
      <h1 className="text-2xl font-bold">Oops..!</h1>
      <p>{err.statusText ?? "There is something wrong!"}</p>
      <div className="flex">
        <Link
          to={"/"}
          className="underline text-base italic flex gap-1 items-center hover:text-blue-600"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
