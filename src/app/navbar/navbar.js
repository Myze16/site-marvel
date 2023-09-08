import "./navbar.scss";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav
            class="font-sans flex items-center gap-20 justify-center bg-transparent"
            aria-label="Global"
        >
            <a
                href="#"
                class="text-m font-semibold tracking-wider leading-6 text-red-700"
            >
                <Image src="/marvel.png" width={80} height={0} />
            </a>
            <a
                href="#"
                class="text-m font-semibold leading-6 tracking-wider text-red-600"
            >
                News
            </a>
            <a
                href="#"
                class="text-m font-semibold leading-6 tracking-wider text-rose-800"
            >
                Characters
            </a>
            <a
                href="#"
                class="text-m font-semibold leading-6 tracking-wider text-rose-800"
            >
                Movies
            </a>
            <a
                href="#"
                class="text-m font-semibold leading-6 tracking-wider text-rose-800"
            >
                Comics
            </a>
        </nav>
    );
}
