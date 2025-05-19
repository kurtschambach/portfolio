// @ts-nocheck
import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

export function clsx(...args: any) {
  return args.filter(Boolean).join(" ");
}

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={clsx(
        "[&:not(:first-child)]:mt-16 scroll-m-20 text-4xl font-bold tracking-tight text-text",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={clsx(
        "mt-12 scroll-m-20 border-b-2 border-b-bg dark:border-b-amber-200 text-text pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={clsx(
        "mt-8 scroll-m-20 text-2xl text-text font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={clsx(
        "mt-8 scroll-m-20 text-xl text-text font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={clsx(
        "mt-8 scroll-m-20 text-lg text-text font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={clsx(
        "mt-8 scroll-m-20 text-base text-text font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={clsx("font-medium text-green underline", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={clsx(
        "leading-7 text-inherit [&:not(:first-child)]:mt-6",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={clsx(
        "my-6 ml-6 marker:text-inherit text-inherit list-disc",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={clsx(
        "my-6 ml-6 marker:text-inherit text-inherit list-decimal",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={clsx("mt-2 text-inherit", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={clsx(
        "mt-4 border-l-2 not-italic border-green pl-6 my-0 py-[1px] text-inherit bg-bg",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={clsx(
        "rounded-xl invert-0 dark:invert border-2 border-mantle",
        className,
      )}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 md:my-8 border-1 border-subtext w-full" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full my-6 overflow-y-auto">
      <table className={clsx("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={clsx("m-0 border-t border-crust p-0 even:bg-bg", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={clsx(
        "border border-subtext px-4 py-2 text-text bg-text text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={clsx(
        "border border-text px-4 py-2 text-text bg-mantle text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={clsx(
        "mt-6 mb-4 duration-1000 overflow-x-auto rounded-2xl bg-bg scrollbar-thin scrollbar-track-bg group-hover:scrollbar-track-mantle scrollbar-thumb-text py-4",
        className,
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong className={clsx("text-green font-bold", className)} {...props} />
  ),
  code: ({ className, ...props }) => (
    <code
      className={clsx(
        "relative rounded bg-crust text-text inline-block py-[0.1rem] px-[0.3rem] font-mono font-light",
        className,
      )}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
