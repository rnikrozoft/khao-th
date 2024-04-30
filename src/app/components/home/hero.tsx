
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <Image src="/images/header.jpg" className="relative" alt="..." width={500} height={500} />
                <Image src="/images/header.jpg" className="relative" alt="..." width={500} height={500} />
                <Image src="/images/header.jpg" className="relative" alt="..." width={500} height={500} />
                <Image src="/images/header.jpg" className="relative" alt="..." width={500} height={500} />
                <Image src="/images/header.jpg" className="relative" alt="..." width={500} height={500} />
                <Image src="/images/header.jpg" className="relative" alt="..." width={500} height={500} />
            </Carousel>
        </div>
    );
}
