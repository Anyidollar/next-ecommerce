import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex justify-between gap-24">
        {/* LEFT */}
        <div className="w-1/4 flex flex-col gap-8">
          <Link href="">
            <div className="text-2xl tracking-wide">Anyidollar</div>
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <span className="font-semibold">ifeanyionyekwere30@gmail.com</span>
          <span className="font-semibold">+234-7063400111</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pininterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
      </div>
      <div className="">
        {/* CENTER */}
        <div className="w-1/2"></div>
      </div>
      <div className="">
        {/* RIGHT */}
        <div className="w-1/4"></div>
      </div>
      {/* BOTTOM */}
      <div className=""></div>
    </div>
  );
};

export default Footer;
