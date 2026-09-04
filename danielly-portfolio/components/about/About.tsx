"use client";

import Image from "next/image";
import {
  Code2,
  Database,
  BarChart3,
  Globe,
  Lightbulb,
  Download,
} from "lucide-react";

import frieren from "./img/about.png";

const interests = [
  {
    icon: Code2,
    title: "Software Development",
  },
  {
    icon: Globe,
    title: "Web Development",
  },
  {
    icon: Database,
    title: "Backend & Databases",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-[var(--background)]
        px-6
        py-24
        text-[var(--text-primary)]
        sm:px-10
        lg:px-20
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            TITLE
        ========================== */}

        <div className="mb-16 text-center">
          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-[var(--text-primary)]
              sm:text-5xl
            "
          >
            ABOUT ME
          </h2>
        </div>

        {/* =========================
            PROFILE
            FOTO + INFORMAÇÕES
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-14
            md:grid-cols-[1fr_1fr]
            md:gap-20
          "
        >

          {/* FOTO */}

          <div className="flex justify-center">
            <div
              className="
                relative
                flex
                h-[310px]
                w-[310px]
                items-center
                justify-center
                sm:h-[360px]
                sm:w-[360px]
                md:h-[390px]
                md:w-[390px]
              "
            >

              {/* Fundo circular */}

              <div
                className="
                  absolute
                  inset-[22px]
                  rounded-full
                  bg-[var(--sidebar-active)]
                "
              />

              {/* Arco rosa */}

              <div
                className="
                  absolute
                  inset-[6px]
                  rounded-full
                  border-[5px]
                  border-transparent
                  border-l-[var(--secondary)]
                  border-t-[var(--secondary)]
                  rotate-[-25deg]
                "
              />

              {/* Arco roxo */}

              <div
                className="
                  absolute
                  inset-[6px]
                  rounded-full
                  border-[5px]
                  border-transparent
                  border-r-[var(--primary)]
                  border-b-[var(--primary)]
                  rotate-[-25deg]
                "
              />

              {/* Decorações */}

              <span
                className="
                  absolute
                  left-3
                  top-16
                  h-3
                  w-3
                  rounded-full
                  bg-[var(--secondary)]
                  opacity-70
                "
              />

              <span
                className="
                  absolute
                  right-5
                  top-10
                  h-4
                  w-4
                  rounded-full
                  bg-[var(--accent)]
                  opacity-60
                "
              />

              <span
                className="
                  absolute
                  bottom-10
                  left-10
                  h-2
                  w-2
                  rounded-full
                  bg-[var(--primary)]
                  opacity-70
                "
              />

              {/* Imagem */}

              <Image
                src={frieren}
                alt="Frieren illustration"
                priority
                className="
                  relative
                  z-10
                  h-[285px]
                  w-[285px]
                  object-contain
                  sm:h-[330px]
                  sm:w-[330px]
                  md:h-[355px]
                  md:w-[355px]
                "
              />
            </div>
          </div>

          {/* INFORMAÇÕES */}

          <div
            className="
              grid
              grid-cols-1
              gap-x-10
              gap-y-7
              sm:grid-cols-2
            "
          >

            {/* Full Name */}

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--secondary)]
                "
              >
                Name
              </p>

              <p
                className="
                  mt-2
                  text-base
                  text-[var(--text-secondary)]
                "
              >
                Danielly Khalil
              </p>
            </div>

            {/* Email */}

            {/* <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--secondary)]
                "
              >
                E-mail
              </p>

              <p
                className="
                  mt-2
                  break-all
                  text-base
                  text-[var(--text-secondary)]
                "
              >
                email
              </p>
            </div> */}

            {/* Education */}

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--secondary)]
                "
              >
                Education
              </p>

              <p
                className="
                  mt-2
                  text-base
                  text-[var(--text-secondary)]
                "
              >
                Computer Engineering
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-[var(--text-secondary)]
                  opacity-80
                "
              >
                Federal University of Goiás
              </p>
            </div>

            {/* Currently */}

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--secondary)]
                "
              >
                Currently
              </p>

              <p
                className="
                  mt-2
                  text-base
                  text-[var(--text-secondary)]
                "
              >
                Software Development Intern
              </p>
            </div>

            {/* Focus */}

            {/* <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--secondary)]
                "
              >
                Focus
              </p>

              <p
                className="
                  mt-2
                  text-base
                  text-[var(--text-secondary)]
                "
              >
                Software Engineering
              </p>
            </div> */}

            {/* Languages */}

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--secondary)]
                "
              >
                Languages
              </p>

              <p
                className="
                  mt-2
                  text-base
                  text-[var(--text-secondary)]
                "
              >
                Portuguese · English
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-[var(--text-secondary)]
                  opacity-80
                "
              >
                Mandarin · learning
              </p>
            </div>

            {/* GitHub */}

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--secondary)]
                "
              >
                GitHub
              </p>

              <a
                href="https://github.com/Khalielly"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2
                  block
                  text-base
                  text-[var(--text-secondary)]
                  transition-colors
                  hover:text-[var(--primary)]
                "
              >
                github.com/Khalielly
              </a>
            </div>

            {/* LinkedIn */}

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--secondary)]
                "
              >
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/danielly-khalil"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2
                  block
                  text-base
                  text-[var(--text-secondary)]
                  transition-colors
                  hover:text-[var(--primary)]
                "
              >
                linkedin.com/in/danielly-khalil
              </a>
            </div>

          </div>
        </div>

        {/* =========================
            ABOUT TEXT
            FORA DO GRID
        ========================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-4xl
            border-t
            border-[var(--border)]
            pt-12
          "
        >
          <div
            className="
              space-y-6
              text-justify
              text-base
              leading-8
              text-[var(--text-secondary)]
              sm:text-lg
            "
          >

            <p>
              I'm a{" "}
              <strong className="font-semibold text-[var(--primary)]">
                Computer Engineering student
              </strong>{" "}
              at the Federal University of Goiás and a Software Development
              Intern, where I work on real-world systems and software
              solutions.
            </p>

            <p>
              My professional experience has allowed me to work across{" "}
              <strong className="font-semibold text-[var(--primary)]">
                fullstack development, backend engineering and databases
              </strong>
              , working with technologies such as Java, React, JavaScript,
              SQL and REST APIs.
            </p>

            <p>
              I'm interested in building{" "}
              <strong className="font-semibold text-[var(--primary)]">
                reliable software and data-driven solutions
              </strong>
              , while continuously improving my technical knowledge through
              academic projects, professional experience and independent
              learning.
            </p>

          </div>
        </div>

        {/* =========================
            INTERESTS
        ========================== */}

        <div className="mt-20">

          <div className="mb-10 text-center">
            <h3
              className="
                text-xl
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[var(--secondary)]
              "
            >
              My Interests
            </h3>
          </div>

          <div
            className="
              mx-auto
              grid
              max-w-5xl
              grid-cols-2
              gap-5
              sm:grid-cols-3
              lg:grid-cols-5
            "
          >

            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <div
                  key={interest.title}
                  className="
                    group
                    flex
                    min-h-[130px]
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    px-4
                    py-6
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[var(--secondary)]
                    hover:shadow-[0_15px_35px_var(--shadow)]
                  "
                >
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="
                      mb-4
                      text-[var(--primary)]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[var(--text-secondary)]
                    "
                  >
                    {interest.title}
                  </span>
                </div>
              );
            })}

          </div>
        </div>

        {/* =========================
            RESUME
        ========================== */}

        <div className="mt-14 flex justify-center">

         <a
  href="/resume.pdf"
  download="Danielly-Khalil-Resume.pdf"
  className="
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-[var(--primary)]
    px-8
    py-3.5
    text-sm
    font-semibold
    text-white
    shadow-[0_10px_30px_var(--shadow)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:opacity-90
  "
>
  <Download size={18} />
  Download Resume
</a>

        </div>

      </div>
    </section>
  );
}