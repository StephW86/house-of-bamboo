import { Application } from "@hotwired/stimulus"
import PlayNextButtonController from "./play_next_button_controller.js"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application
application.register("play-next-button", PlayNextButtonController)

export { application }
