import { Greeter } from "./Greeter";

export default class HtmlGreeter extends Greeter {
  tagName: string;
  // if the tagName isn't provided with a value, it defaults to h1
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
  }
}
