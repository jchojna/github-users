import { getFormattedDate } from "./dates";

describe("getFormattedDate", () => {
  it("should format a valid date string correctly", () => {
    const dateString = "2024-10-01";
    const formattedDate = getFormattedDate(dateString);
    expect(formattedDate).toBe("October 1, 2024");
  });

  it("should handle invalid date string", () => {
    const dateString = "invalid-date";
    const formattedDate = getFormattedDate(dateString);
    expect(formattedDate).toBe("Invalid Date");
  });

  it("should handle empty date string", () => {
    const dateString = "";
    const formattedDate = getFormattedDate(dateString);
    expect(formattedDate).toBe("Invalid Date");
  });
});
