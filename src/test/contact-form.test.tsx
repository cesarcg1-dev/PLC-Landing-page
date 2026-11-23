import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Contact } from "@/components/industrial/sections";

function submitForm() {
  const form = screen.getByRole("button", { name: /enviar solicitud/i }).closest("form");
  if (!form) throw new Error("No se encontró el formulario de contacto");
  fireEvent.submit(form);
}

describe("Formulario de contacto", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("envía la solicitud a FormSubmit y muestra la confirmación", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: "true" }),
    });
    vi.stubGlobal("fetch", fetchMock);
    render(<Contact />);

    submitForm();

    await waitFor(() => expect(screen.getByText(/recibimos tu solicitud/i)).toBeInTheDocument());
    expect(fetchMock).toHaveBeenCalledWith(
      "https://formsubmit.co/ajax/cesarcg1@gmail.com",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("muestra un error si FormSubmit no responde correctamente", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    render(<Contact />);

    submitForm();

    await waitFor(() => expect(screen.getByRole("alert")).toHaveTextContent(/no se pudo enviar/i));
  });
});
