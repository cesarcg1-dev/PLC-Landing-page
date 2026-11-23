import { describe, expect, it } from "vitest";
import { business } from "@/components/industrial/content";
describe("Datos de negocio", () => {
  it("usa el teléfono, WhatsApp, correo y ubicación reales", () => {
    expect(business.phone).toBe("811-1917-150");
    expect(business.tel).toBe("tel:+528111917150");
    expect(business.whatsapp).toBe("https://wa.me/528111917150");
    expect(business.email).toBe("cesarcg1@gmail.com");
    expect(business.address).toContain("Emancipacion Proletaria No. 1835");
  });
  it("uses a four-hour emergency response threshold", () => {
    expect(business.emergencyHours).toBe(4);
  });
  it("cubre el Area Metropolitana de Monterrey", () => {
    expect(business.coverage).toBe("Area Metropolitana de Monterrey");
  });
  it("uses fifteen years of experience", () => {
    expect(business.experienceYears).toBe(15);
  });
});
