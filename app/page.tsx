import { Button } from "@/components/ui/button";
import BackgroundVideo from "./component/BackgroundVideo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import ShuffleHero from "./component/ShuffleHero";

export default function Home() {
  return (
    <div className="w-full realative">
      <ShuffleHero />
      <p
        className="text-center mx-auto md:w-full italic px-10 text-xs md:text-lg pb-2
       text-white absolute bottom-0  font-noto_serif"
      >
        You can't connect the dots looking forward, you can only connect them
        looking backwards
      </p>
    </div>
    // <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
    //   <BackgroundVideo />

    //   {/* Text Overlay */}
    //   <div className="pt-[300px] w-3/5 mx-auto items-center text-center lg:relative z-10 flex flex-col lg:items-end lg:pt-36 lg:px-36 lg:justify-center lg:w-full h-full">
    //     <h1 className=" text-white text-xl pt-40 pb-4 italic font-thin underline underline-offset-2 font-noto_serif">
    //       WEB DEVELOPER{" "}
    //     </h1>
    //     <p className=" text-xs  text-white">
    //       Join me as I transition from architect to software developer
    //     </p>
    //     <p className=" text-xs  text-white">
    //       I record my journey along the way, sharing my experiences
    //     </p>
    //     <p className=" text-xs  text-white">
    //       the difficulties and hopefully some success.
    //     </p>
    //     <br />
    //     <Link href="/main">
    //       <Button className="w-36 rounded-full ">
    //         Follow Along <ArrowRight className="ml-2" />
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
  );
}
