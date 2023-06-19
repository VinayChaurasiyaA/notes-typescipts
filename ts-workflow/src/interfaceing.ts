interface photoClicks {
  cameraMode: string;
  aperture: string;
  filter: string;
}
// interface is like a structural body which anyone can use it just by making a call implements and then it can have a structure like it

// you can implement more than 1 interface just by "," and interface name.. eg
interface story {
  createStory(): void;
}

class Instagram implements photoClicks {
  // if we implement something in our class, that class atleast contains all the properties and you can add others too (add ons)
  constructor(
    public cameraMode: string,
    public aperture: string,
    public filter: string,
    public likes: number // this is newly added
  ) {
    cameraMode = "pro";
    aperture = "f1.0";
    filter = "monochrome";
    likes = 10;
  }
}
class Youtube implements photoClicks, story {
  constructor(
    public cameraMode: string,
    public aperture: string,
    public filter: string
  ) {
    cameraMode = "pro";
    aperture = "f1.0";
    filter = "monochrome";
  }
  createStory(): void {
    console.log("youtube also has story creation feature lmaoo");
  }
}
