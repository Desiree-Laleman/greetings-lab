import { Greeter } from "./Greeter";

export default class LoudGreeter extends Greeter {
  private extra: string = "!";
  // if something is set with an initial value, it cannot be put into the constructor!!
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
  addVolume(): void {
    // void means it'll DO something but not return anything
    this.extra += "!";
  }
}
