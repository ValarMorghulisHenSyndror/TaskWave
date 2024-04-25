import Image from "next/image";
import Link from "next/link"; 
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import local from "next/font/local";

const headingFont = localFont({
    src: "../public/fonts/font.woff2",
});

const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image src="/TryLogo.png" alt="Logo" height={40} width={40} />
                <p className={cn("text-lg text-neutral-700", headingFont.className)}>TaskWave</p>
            </div>
        </Link>
    );
};

export default Logo;
