import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Now } from "@/components/sections/now";
import { SelectedWork } from "@/components/sections/selected-work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <Now />
    </>
  );
}
