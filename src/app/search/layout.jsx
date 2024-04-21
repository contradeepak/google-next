import { Suspense } from "react";
import SearchHeader from "../components/SearchHeader";
import "./../globals.css";

export default function layout({children}) {
  return (
    <Suspense>
    <div>
        <SearchHeader />
        {children}</div>
        </Suspense>
  )
}
