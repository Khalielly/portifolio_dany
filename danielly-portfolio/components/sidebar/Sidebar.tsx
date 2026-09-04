"use client";

import { Home, User, FolderOpen, Briefcase, Mail } from "lucide-react";

const items = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: FolderOpen, label: "Projects", id: "projects" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: Mail, label: "Contact", id: "contact" },
];

export default function Sidebar() {
  return (
    <div
      className="
        hidden
        lg:block
        fixed
        left-8
        top-1/2
        -translate-y-1/2
        z-50
      "
    >
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative flex items-center"
          >
            <div
              className="
                h-4
                w-4
                rounded-full
                border-2
                border-[var(--primary)]
                bg-[var(--surface)]
                transition-all
                duration-300
                group-hover:scale-150
                group-hover:bg-[var(--primary)]
              "
            />

            <span
              className="
                absolute
                left-8
                opacity-0
                -translate-x-2
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:translate-x-0
                whitespace-nowrap
                text-sm
                font-medium
                text-[var(--primary)]
              "
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}