import avatar from "./img/avatar.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
min-h-screen
bg-[var(--surface)]
flex
items-center
justify-center
pt-24
pb-16
px-6
lg:px-16
overflow-hidden

      "
    >
      <div
        className="
          max-w-7xl
          w-full
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-4
          md:gap-8
          xl:gap-16
        "
      >
        {/* Avatar */}
        <div
          className="
            flex-[0.9]
            flex
            justify-center
            relative
            order-1
            lg:order-2
          "
        >
          {/* Elementos decorativos */}
          <div className="absolute top-6 left-8 w-4 h-4 rounded-full bg-purple-300 opacity-60"></div>
          <div className="absolute top-16 right-6 w-3 h-3 rounded-full bg-pink-300 opacity-60"></div>
          <div className="absolute bottom-10 left-2 w-3 h-3 rounded-full bg-blue-300 opacity-60"></div>

<Image
  src={avatar}
  alt="Avatar"
  className="w-[500px] object-contain"
/>
          {/* <img
            src="/avatar.jpg"
            alt="Avatar"
            className="
              w-[150px]
              sm:w-[220px]
              md:w-[320px]
              lg:w-[420px]
              xl:w-[500px]
              object-contain
              drop-shadow-xl
            "
          /> */}
        </div>

        {/* Texto */}
        <div
          className="
            flex-[1.4]
            max-w-2xl
            text-center
            lg:text-left
            order-2
            lg:order-1
          "
        >
          <p
            className="
              text-purple-600
              font-semibold
              tracking-[0.35em]
              uppercase
              text-xs
              md:text-sm
              mb-4
            "
          >
            Software Engineer
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-8xl
              font-extrabold
              text-slate-900
              leading-none
            "
          >
            Danielly
            <br />
            Khalil
          </h1>

          <p
            className="
              mt-6
              text-base
              md:text-lg
              lg:text-xl
              text-slate-600
              leading-relaxed
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            Building software, solving problems and exploring data through
            fullstack development, backend engineering and scalable systems.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              justify-center
              lg:justify-start
              items-center
              gap-4
            "
          >
            <button
              className="
                w-full
                sm:w-auto
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                text-white
                font-medium
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >
              View Projects
            </button>

            <a
  href="/resume.pdf"
  download="Danielly-Khalil-Resume.pdf"
  className="
    w-full
    sm:w-auto
    px-8
    py-4
    rounded-full
    border
    border-purple-300
    text-purple-600
    font-medium
    hover:bg-purple-50
    transition-all
    duration-300
    inline-flex
    items-center
    justify-center
  "
>
  Download Resume
</a>
          </div>
        </div>
      </div>
    </section>
  );
}