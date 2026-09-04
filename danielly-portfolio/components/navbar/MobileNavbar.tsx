"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  FolderOpen,
  Briefcase,
  Mail,
  Moon,
  Languages,
  Trophy,
} from "lucide-react";

const items = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: FolderOpen, label: "Projects", id: "projects" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: Trophy, label: "Journey", id: "journey" },
  { icon: Mail, label: "Contact", id: "contact" },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          lg:hidden
          fixed
          top-0
          left-0
          right-0
          h-16
          px-6
          flex
          items-center
          justify-between
          bg-[var(--surface)]
          border-b
          border-[var(--border)]
          z-50
        "
      >
        <button
          onClick={() => setOpen(true)}
          className="text-[var(--primary)]"
        >
          <Menu size={30} />
        </button>

        <div className="flex items-center gap-4">
          <button className="text-[var(--primary)]">
            <Moon size={22} />
          </button>

          <button className="text-[var(--primary)] font-medium">
            EN
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0
          bg-black/30
          backdrop-blur-sm
          transition-all duration-300
          z-[90]
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[85%]
          max-w-[340px]
          bg-[var(--surface)]
          z-[100]
          transition-transform
          duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* restante igual */}
      </aside>
    </>
  );
}