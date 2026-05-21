"use client";

import Link from "next/link";
import Styles from "@/styles/navbar.module.css";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Users",
    href: "/users",
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const disableNavbar = ["/register"];

  if (disableNavbar.includes(pathname)) {
    return null;
  }

  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.container}>
        <h1 className={Styles.logo}>TheHistory</h1>

        <div className={Styles.navItems}>
          {navItems.map((item, i) => (
            <Link key={i} href={item.href} className={Styles.link}>
              {item.label}
            </Link>
          ))}
        </div>
        <button className="button" onClick={() => goToRegister()}>
          Register
        </button>
      </div>
    </nav>
  );
}
