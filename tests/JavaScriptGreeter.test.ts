import JavaScriptGreeter from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test(`the greeting property overwrites the previous greet method`, () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hewwo");
    expect(javaScriptGreeter.greet("Desiree")).toBe(
      "console.log('Hewwo, Desiree!')"
    );
  });
  test(`the greeting property overwrites the previous greet method`, () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("你好");
    expect(javaScriptGreeter.greet("Alexa")).toBe(
      "console.log('你好, Alexa!')"
    );
  });
});
