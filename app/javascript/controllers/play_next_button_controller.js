import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { index: Number }
  static targets = ["video"]

  connect() {
    console.log("Controller connected");
  }

  next() {
    this.indexValue = this.indexValue < 6 ? this.indexValue + 1 : 1;
    const nextSrc = `/assets/video_${this.indexValue}.mp4`;

    this.videoTarget.src = nextSrc;
  }
}
