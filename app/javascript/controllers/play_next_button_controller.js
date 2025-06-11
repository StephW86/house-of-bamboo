import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { index: Number }
  static targets = ["video"]

  // connect() {
  //   console.log("Hello there!", this.element)
  // }

  next() {
    console.log("Before increment:", this.indexValue);
    this.indexValue = this.indexValue < 6 ? this.indexValue + 1 : 1;
    console.log("After increment:", this.indexValue);
    console.log("Video path:", this.pathsValue[this.indexValue]);

    this.videoTarget.src = `/assets/videos/video_${this.indexValue}.mp4`;
    // this.videoTarget.load();
    // this.videoTarget.play();
  }
}
