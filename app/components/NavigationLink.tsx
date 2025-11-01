// "use client";

// import clsx from "clsx";
// import { useSelectedLayoutSegment } from "next/navigation";
// import { ComponentProps } from "react";
// import { Link } from "@/i18n/navigation";

// export default function NavigationLink({
//   href,
//   ...rest
// }: ComponentProps<typeof Link>) {
//   const selectedLayoutSegment = useSelectedLayoutSegment();
//   const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
//   const isActive = pathname === href;

//   return (
//     <Link
//       aria-current={isActive ? "page" : undefined}
//       className={clsx(
//         "inline-block px-2 py-3 transition-colors",
//         isActive ? "text-red-500" : "text-gray-400 hover:text-gray-500"
//       )}
//       href={href}
//       {...rest}
//     />
//   );
// }

"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

interface NavigationLinkProps extends ComponentProps<typeof Link> {
  /** Custom class for the active state */
  activeClassName?: string;
  /** Custom class for the inactive state */
  inactiveClassName?: string;
  /** Base class (applied always) */
  baseClassName?: string;
  /** Optional children override */
  children?: ReactNode;
}

export default function NavigationLink({
  href,
  activeClassName = "text-[#635bff] border-b-2 border-[#635bff]",
  inactiveClassName = "text-gray-700 border-transparent hover:text-[#635bff] hover:border-[#635bff]",
  baseClassName = "text-md font-medium transition duration-200 pb-1 inline-block py-3 px-3",
  children,
  ...rest
}: NavigationLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        baseClassName,
        isActive ? activeClassName : inactiveClassName
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
