// app/checkenvironment/layout.tsx
import React from "react";
import Lavbar from "@/components/laybar-we-can-see/laybar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
     
      <Lavbar />
      {children}
    </section>
  );
}
