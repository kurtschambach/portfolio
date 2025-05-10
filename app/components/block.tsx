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
    "group text-start w-[100dvw] h-[100dvh] snap-center text-crust flex item-center justify-center",
    className,
  );

  return <div className={styles}>{children}</div>;
};
