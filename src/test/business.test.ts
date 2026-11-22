import { describe, expect, it } from "vitest";
import { business } from "@/components/industrial/content";
describe("Mock business facts", () => {
  it("uses a four-hour emergency response threshold", () => {
    expect(business.emergencyHours).toBe(4);
  });
  it("covers the four specified states", () => {
    expect(business.states).toEqual(["Nuevo León", "Coahuila", "Tamaulipas", "San Luis Potosí"]);
  });
  it("uses fifteen years of experience", () => {
    expect(business.experienceYears).toBe(15);
  });
});
