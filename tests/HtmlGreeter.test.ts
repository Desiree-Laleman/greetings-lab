import HtmlGreeter from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test(`the greeting property is set by the constructor`, () => {
    const htmlGreeter: HtmlGreeter = new HtmlGreeter("What's up");
    expect(htmlGreeter.greeting).toBe("What's up");
  });
  test("the constructor sets the tagName property", () => {
    const htmlGreeter: HtmlGreeter = new HtmlGreeter("Sup", "div");
    expect(htmlGreeter.tagName).toBe("div");
  });
  test("the constructor sets the tagName property with a default value of h1 if no value is provided for tagName", () => {
    const htmlGreeter: HtmlGreeter = new HtmlGreeter("Sup", undefined);
    expect(htmlGreeter.tagName).toBe("h1");
  });
});
