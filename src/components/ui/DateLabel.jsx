"use client";
import { useEffect, useState } from "react";

function DateLabel({ date }) {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    setFormatted(
      new Date(date).toLocaleDateString("az-Latn-AZ", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    );
  }, [date]);

  return <>{formatted}</>;
}

export default DateLabel;