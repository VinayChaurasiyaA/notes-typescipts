"use strict";
class Instagram {
    // if we implement something in our class, that class atleast contains all the properties and you can add others too (add ons)
    constructor(cameraMode, aperture, filter, likes // this is newly added
    ) {
        this.cameraMode = cameraMode;
        this.aperture = aperture;
        this.filter = filter;
        this.likes = likes;
        cameraMode = "pro";
        aperture = "f1.0";
        filter = "monochrome";
        likes = 10;
    }
}
class Youtube {
    constructor(cameraMode, aperture, filter) {
        this.cameraMode = cameraMode;
        this.aperture = aperture;
        this.filter = filter;
        cameraMode = "pro";
        aperture = "f1.0";
        filter = "monochrome";
    }
    getImage() {
        throw new Error("Method not implemented.");
    }
    calculateStoryTime(input) {
        throw new Error("Method not implemented.");
    }
    createStory() {
        console.log("youtube also has story creation feature lmaoo");
    }
}
