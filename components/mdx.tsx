import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";

export function clsx(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(" ");
}

const components = {
  h1: ({ className, ...props }: { className: string }) => (
    <h1
      className={clsx(
        "not-first:mt-16 scroll-m-20 text-4xl font-bold tracking-tight text-text",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: { className: string }) => (
    <h2
      className={clsx(
        "mt-12 scroll-m-20 underline text-text pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: { className: string }) => (
    <h3
      className={clsx(
        "mt-8 scroll-m-20 text-2xl text-text font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: { className: string }) => (
    <h4
      className={clsx(
        "mt-8 scroll-m-20 text-xl text-text font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: { className: string }) => (
    <h5
      className={clsx(
        "mt-8 scroll-m-20 text-lg text-text font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: { className: string }) => (
    <h6
      className={clsx(
        "mt-8 scroll-m-20 text-text font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: { className: string }) => (
    <a
      className={clsx("font-medium text-green underline", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: { className: string }) => (
    <p
      className={clsx("leading-7 text-inherit not-first:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: { className: string }) => (
    <ul
      className={clsx(
        "my-6 ml-6 marker:text-inherit text-inherit list-disc",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: { className: string }) => (
    <ol
      className={clsx(
        "my-6 ml-6 marker:text-inherit text-inherit list-decimal",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: { className: string }) => (
    <li className={clsx("mt-2 text-inherit", className)} {...props} />
  ),
  blockquote: ({
    className,
    children,
    ...props
  }: { className?: string; children: React.ReactNode }) => {
    let type: "info" | "warning" | "default" = "default";
    let content = children;

    const childrenArray = children as React.ReactNode[];

    if (
      Array.isArray(childrenArray) &&
      childrenArray[1] &&
      React.isValidElement(childrenArray[1]) &&
      typeof (childrenArray[1] as React.ReactElement<any>).props.children ===
        "string" &&
      ((
        (childrenArray[1] as React.ReactElement<any>).props.children as string
      ).startsWith("[INFO]") ||
        (
          (childrenArray[1] as React.ReactElement<any>).props.children as string
        ).startsWith("[WARNING]"))
    ) {
      const childString = (childrenArray[1] as React.ReactElement<any>).props
        .children as string;
      if (childString.startsWith("[INFO]")) {
        type = "info";
        const newChild = React.cloneElement(
          childrenArray[1] as React.ReactElement<any>,
          {},
          childString.replace(/^\[INFO\]\s*/, ""),
        );
        content = [childrenArray[0], newChild, ...childrenArray.slice(2)];
      } else if (childString.startsWith("[WARNING]")) {
        type = "warning";
        const newChild = React.cloneElement(
          childrenArray[1] as React.ReactElement<any>,
          {},
          childString.replace(/^\[WARNING\]\s*/, ""),
        );
        content = [childrenArray[0], newChild, ...childrenArray.slice(2)];
      }
    }

    let typeClass = "";
    if (type === "info") typeClass = "border-blue bg-blue/5";
    if (type === "warning") typeClass = "border-yellow bg-yellow/5";

    return (
      <blockquote
        className={clsx(
          "mt-4 border-l-2 not-italic pl-6 py-2 text-inherit",
          typeClass || "border-teal bg-teal/5",
          className,
        )}
        {...props}
      >
        {type === "info" && <span className="mr-2">🛈</span>}
        {type === "warning" && <span className="mr-2">⚠️</span>}
        {Array.isArray(content)
          ? content.map((child, idx) =>
              React.isValidElement(child)
                ? React.cloneElement(child, { key: idx })
                : child,
            )
          : content}
      </blockquote>
    );
  },
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={clsx("rounded-xl border-2 border-mantle", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr
      className="my-4 md:my-8 border-none h-px bg-gradient-to-r from-transparent via-overlay to-transparent w-full"
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full my-6 overflow-y-auto">
      <table className={clsx("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={clsx("m-0 border-t border-crust p-0 even:bg-base", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: { className: string }) => (
    <th
      className={clsx(
        "border border-subtext px-4 py-2 text-text bg-text text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: { className: string }) => (
    <td
      className={clsx(
        "border border-text px-4 py-2 text-text bg-mantle text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: { className: string }) => (
    <pre
      className={clsx("overflow-x-auto rounded-2xl bg-crust! p-2", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }: { className: string }) => (
    <strong className={clsx("text-green font-bold", className)} {...props} />
  ),
  code: ({ className, ...props }: { className: string }) => (
    <code
      className={clsx(
        "relative rounded bg-crust text-text inline-block px-2 font-mono font-light",
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
