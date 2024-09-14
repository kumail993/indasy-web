import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col gap-7 max-w-[33.75rem]">
            <h1 className="text-h1 text-white font-semibold leading-[1.2]">
              Transforming Ideas into Digital Realities
            </h1>
            <p className="text-white text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritatis et quasi architecto
            </p>
            <Link
              href=""
              className="text-h5 font-semibold flex items-center gap-[0.625rem] group relative isolate"
            >
              <div className="w-16 h-16 bg-dark absolute left-0 top-0 rounded-[6.25rem] group-hover:w-[300px] -z-10 transition-all" />
              <span className="bg-dark grid place-items-center w-16 h-16 rounded-full -rotate-45 group-hover:rotate-0 transition-all">
                <ArrowRight />
              </span>
              <span>Explore Our Services</span>
            </Link>
          </div>
          <div>
            <Image
              src="/main_bnr-img.png"
              alt="Main Banner Image"
              width={720}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
