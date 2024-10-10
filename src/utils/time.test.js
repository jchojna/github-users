import { getRemainingSeconds, getTimerInterval } from "./time";

describe("getRemainingSeconds", () => {
  it("should return the correct remaining seconds", () => {
    const remainingSeconds = getRemainingSeconds(5, 30, 2);
    expect(remainingSeconds).toBe("3.50");
  });

  it("should return the correct remaining seconds", () => {
    const remainingSeconds = getRemainingSeconds(10, 80, 1);
    expect(remainingSeconds).toBe("2.0");
  });

  it("should return 0 if current time is past end time", () => {
    const remainingSeconds = getRemainingSeconds(3, 100, 0);
    expect(remainingSeconds).toBe("0");
  });

  it("should return the total duration if current time is before start time", () => {
    const remainingSeconds = getRemainingSeconds(6, 0, 3);
    expect(remainingSeconds).toBe("6.000");
  });
});

describe("getTimerInterval", () => {
  it("should return the correct interval for a given duration", () => {
    const duration = 10; // 60 seconds
    const interval = getTimerInterval(duration);
    expect(interval).toBe(100); // 1 second interval
  });
});
