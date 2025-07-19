import { cn } from "@/util/utils";
import React from "react";

export const Block = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const styles = cn(
    "group text-start w-dvw h-fit snap-center text-crust flex items-center justify-center selection:bg-black",
    className,
  );

  return <div className={styles}>{children}</div>;
};
