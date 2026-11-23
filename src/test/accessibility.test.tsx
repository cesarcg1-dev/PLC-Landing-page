import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo, SocialProof } from "@/components/industrial/sections";

describe("Accesibilidad", () => {
  it("el nombre accesible del logo incluye el texto visible", () => {
    render(<Logo />);

    expect(
      screen.getByRole("link", { name: "Mtto MEX CNC" }),
    ).toBeInTheDocument();
  });

  it("la sección de marcas ya no muestra testimonios", () => {
    render(<SocialProof />);

    expect(screen.getByText("Marcas que atendemos")).toBeInTheDocument();
    expect(screen.queryByRole("img", { name: "5 de 5 estrellas" })).not.toBeInTheDocument();
  });
});
