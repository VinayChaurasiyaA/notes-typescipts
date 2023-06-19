console.log("abstract");
abstract class photoClicks {
  constructor(public camera: string, public filter: string) {}
  abstract getImage(): string;
  // if any function is marked as abstract then you cannot have implementations inside the abstract class

  calculateStoryTime(input: string): number {
    return parseFloat(input) * 2;
  }
}
// as soon as you will make a class abstract you won't be able to create its object you have to reintialise them in another class by implementing it
class snapChat extends photoClicks {
  constructor(public camera: string, public filter: string) {
    super(camera, filter);
  }
  getImage(): string {
    return "101011";
  }
}
// const photos = new photoClicks("pro" , "mono");
const photos = new snapChat("pro", "monochrome");
console.log(photos.calculateStoryTime("3.4"));
