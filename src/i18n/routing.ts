import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en-GB", "en-US", "es-US", "de-AT"],
  defaultLocale: "en-GB",
  localePrefix: {
    mode: "always",
    prefixes: {
      "es-US": "/us/es",
      "de-AT": "/de/at",
      "en-GB": "/gb",
      "en-US": "/us",
    },
  },
  pathnames: {
    // "/": "/",
    // "/pathnames": {
    //   "en-GB": "/gb/pathnames",
    //   "de-AT": "/de/at/pfadnamen",
    // },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
