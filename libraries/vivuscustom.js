// Import Vivus
import Vivus from 'vivus.js'

// Apply the overrides
Vivus.prototype.next = function () {
  if (this.currentStep === undefined) {
    this.currentStep = 0;
  }
  if (this.currentStep === this.map.length) {
    return;
  }
  this.currentStep += 1;
  this.setMilestoneAndGo();
};

Vivus.prototype.previous = function () {
  if (!this.currentStep) {
    return;
  }

  this.currentStep -= 1;
  this.setMilestoneAndGo();
};

Vivus.prototype.setMilestoneAndGo = function () {
  if (this.currentStep) {
    var currentPath = this.map[this.currentStep - 1];
    this.milestone = currentPath.startAt + currentPath.duration;    
  }
  else {
    this.milestone = 0;
  }

  this.play((this.milestone - this.currentFrame > 0) ? 1 : -1);
};

Vivus.prototype.drawer = function () {
  var self = this;

  if (Math.abs(this.milestone - this.currentFrame) <= Math.abs(this.speed)) {
    this.currentFrame = this.milestone;
    this.handle = null;
    if (this.currentFrame >= this.frameLength) {
      this.callback(this);
    }
  }
  else {
    this.currentFrame += this.speed;
    this.handle = window.requestAnimationFrame(function () {  // I made a little change here
      self.drawer();
    });
  }
  this.trace();
};

// Then export your custom version
// Ready to be used anywhere else
export default Vivus