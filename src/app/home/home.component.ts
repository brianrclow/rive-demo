import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { registerElement } from "@nativescript/angular";

import { RiveView } from "@nstudio/nativescript-rive";

registerElement("RiveView", () => RiveView);

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  rive: RiveView;
  hasPlayed: boolean;

  @ViewChild("rive", { static: true }) rive_animation: ElementRef<RiveView>;

  ngOnInit(): void {
    this.hasPlayed = false;
    this.rive = <RiveView>this.rive_animation.nativeElement;
  }

  riveAnimationLoaded(args) {
    args = this.rive;
  }

  playRiveAnimation() {
    if (!this.hasPlayed) {
      this.rive.play(0, 1, true);
      this.hasPlayed = true;
    } else {
      console.log("Already played, reset the animation below!");
    }
  }

  resetAnimation() {
    if (this.hasPlayed) {
      this.rive.stop(); // seems to work on iOS for stopping and resetting
      this.rive.reset(); // seems to work on Android for resetting the animation
      this.hasPlayed = false;
    } else {
      console.log("Already reset, play the animation by tapping it!");
    }
  }
}
