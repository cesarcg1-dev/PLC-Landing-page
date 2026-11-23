import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IndustrialImage } from "@/components/industrial/sections";

describe("IndustrialImage", () => {
  it("usa el puntero de Lovable primero y cae a la copia local si falla", () => {
    const pointer = { url: "/__l5e/assets-v1/example/industrial-machine.jpg" };
    const fallback = "/src/assets/industrial-machine.jpg";

    render(<IndustrialImage pointer={pointer} fallback={fallback} alt="Foto industrial" />);
    const image = screen.getByAltText("Foto industrial");

    expect(image).toHaveAttribute("src", pointer.url);

    fireEvent.error(image);
    expect(image).toHaveAttribute("src", fallback);

    fireEvent.error(image);
    expect(image).toHaveAttribute("src", fallback);
  });
});
