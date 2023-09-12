import Link from "next/link";
import Image from "next/image";
import React from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../images/logo-preview.png";

function Navbar() {
return (
    <nav class={classes.navbar}>
        <Link href="/">
            <div class={classes.logo}>
                <Image src={Logo}/>
            </div>
        </Link>
        <ul class={classes.navLinks}>
            <li>
                <Link href={"/meals"}>
                    Meals
                </Link>
            </li>
            <li>
                <Link href={"/meals/savedMeals"}>
                    Saved List
                </Link>
            </li>

        </ul>
    </nav>
)
}
export default Navbar;