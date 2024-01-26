import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page description",
  keywords: ["About Page", "Augusto", "información", "..."],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
