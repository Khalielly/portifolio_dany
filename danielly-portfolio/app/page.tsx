import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Sidebar } from "@/components/sidebar";
import { MobileNavbar } from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <MobileNavbar />

      <Sidebar />

      <Hero />

      <About />
    </main>
  );
}