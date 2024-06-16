"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import MainHeaderBG from "./MainHeaderBG";
import { usePathname } from "next/navigation";

import classes from "./MainHeader.module.css";
import NavLink from "./NavLink";

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBG />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={Logo} alt="Logo" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community hub</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
