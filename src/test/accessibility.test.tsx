import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo, SocialProof } from "@/components/industrial/sections";

describe("Accesibilidad", () => {
  it("el nombre accesible del logo incluye el texto visible", () => {
    render(<Logo />);

    expect(
      screen.getByRole("link", { name: "TecnoMantenimiento Industrial MTY" }),
    ).toBeInTheDocument();
  });

  it("las estrellas usan un rol que permite aria-label", () => {
    render(<SocialProof />);

    expect(screen.getAllByRole("img", { name: "5 de 5 estrellas" })).toHaveLength(2);
  });
});
