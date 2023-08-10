import LoudGreeter from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test(`the greeting property is set by the constructor`, () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("What's up");
    expect(loudGreeter.greeting).toBe("What's up");
  });
  test("the addVolume method adds one addictional exclamation point", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("Hello");
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    expect(loudGreeter.greet("Desiree")).toBe("Hello, Desiree!!!!!!");
  });
});
