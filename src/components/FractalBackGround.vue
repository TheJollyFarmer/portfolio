<template>
  <canvas 
    ref="canvas" 
    id="displayCanvas" 
    width="2000" 
    height="576"/>
</template>

<script>
export default {
  name: "FractalBackGround",

  mounted() {
    this.canvasApp();
  },

  data() {
    return {
      canvas: undefined,
      displayWidth: 0,
      displayHeight: 0,
      numCircles: 15,
      maxMaxRad: 200,
      minMaxRad: 200,
      minRadFactor: 0,
      circles: [],
      iterations: 11,
      numPoints: 0,
      timer: 0,
      drawsPerFrame: 4,
      drawCount: 0,
      bgColor: "#000000",
      urlColor: "#333333",
      lineWidth: 1.01,
      colorArray: 0,
      stepsPerSegment: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      lineNumber: 0,
      twistAmount: 0,
      fullTurn: 0,
      maxColorValue: 100,
      minColorValue: 20,
      lineAlpha: 0.1
    };
  },

  methods: {
    canvasApp() {
      this.canvas = this.$refs.canvas;
      this.canvas.width = window.innerWidth;
      this.context = this.canvas.getContext("2d");
      this.displayWidth = this.canvas.width;
      this.displayHeight = this.canvas.height;

      this.initialise();
    },

    initialise() {
      this.numPoints = Math.pow(2, this.iterations) + 1;
      this.fullTurn = (Math.PI * 2 * this.numPoints) / (1 + this.numPoints);

      this.minX = -this.maxMaxRad;
      this.maxX = this.displayWidth + this.maxMaxRad;
      this.minY = this.displayHeight / 2 - 50;
      this.maxY = this.displayHeight / 2 + 50;

      this.twistAmount = 0.67 * Math.PI * 2;
      this.stepsPerSegment = Math.floor(800 / this.numCircles);

      this.startGenerate();
    },

    startGenerate() {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, this.displayWidth, this.displayHeight);

      this.setCircles();

      this.colorArray = this.setColorList(this.iterations);

      if (this.timer) clearInterval(this.timer);

      this.timer = setInterval(this.onTimer, 1000 / 60);
    },

    setColorList(iter) {
      let r0 = this.getRandomColourValue();
      let g0 = this.getRandomColourValue();
      let b0 = this.getRandomColourValue();
      let r1 = this.getRandomColourValue();
      let g1 = this.getRandomColourValue();
      let b1 = this.getRandomColourValue();
      let param;
      let colorArray = [];
      let i, len;
      let a = this.lineAlpha;
      let colorParamArray = this.setLinePoints(iter);

      len = colorParamArray.length;

      for (i = 0; i < len; i++) {
        param = colorParamArray[i];

        let r = Math.floor(r0 + param * (r1 - r0));
        let g = Math.floor(g0 + param * (g1 - g0));
        let b = Math.floor(b0 + param * (b1 - b0));

        let newColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";

        colorArray.push(newColor);
      }

      return colorArray;
    },

    setCircles() {
      for (let i = 0; i < this.numCircles; i++) {
        let radDiff = this.maxMaxRad - this.minMaxRad;
        let maxR = this.minMaxRad + Math.random() * radDiff;
        let minR = this.minRadFactor * maxR;
        let xDiff = this.maxX - this.minX;
        let yDiff = this.maxY - this.minY;

        let newCircle = {
          centerX: this.minX + (i / (this.numCircles - 1)) * xDiff,
          centerY: this.minY + (i / (this.numCircles - 1)) * yDiff,
          maxRad: maxR,
          minRad: minR,
          phase: (i / (this.numCircles - 1)) * this.twistAmount,
          pointArray: this.setLinePoints(this.iterations)
        };

        this.circles.push(newCircle);
      }
    },

    onTimer() {
      let theta;
      let linParam;
      let cosParam;
      let centerX, centerY;
      let xSqueeze = 0.75;
      let x0, y0;
      let rad, rad0, rad1;
      let phase, phase0, phase1;

      this.numCircles = this.circles.length;

      for (let k = 0; k < this.drawsPerFrame; k++) {
        theta = (this.lineNumber / (this.numPoints - 1)) * this.fullTurn;

        this.context.globalCompositeOperation = "lighter";
        this.context.lineJoin = "miter";
        this.context.strokeStyle = this.colorArray[this.lineNumber];
        this.context.lineWidth = this.lineWidth;
        this.context.beginPath();

        centerX = this.circles[0].centerX;
        centerY = this.circles[0].centerY;
        rad = this.getCircleRadius(0);
        phase = this.circles[0].phase;
        x0 = centerX + xSqueeze * rad * Math.cos(theta + phase);
        y0 = centerY + rad * Math.sin(theta + phase);

        this.context.moveTo(x0, y0);

        for (let i = 0; i < this.numCircles - 1; i++) {
          rad0 = this.getCircleRadius(i);
          rad1 = this.getCircleRadius(i + 1);
          phase0 = this.circles[i].phase;
          phase1 = this.circles[i + 1].phase;

          for (let j = 0; j < this.stepsPerSegment; j++) {
            linParam = j / (this.stepsPerSegment - 1);
            cosParam = 0.5 - 0.5 * Math.cos(linParam * Math.PI);

            centerX = this.getCircleCenter(i, linParam, "X");
            centerY = this.getCircleCenter(i, cosParam, "Y");

            rad = rad0 + cosParam * (rad1 - rad0);
            phase = phase0 + cosParam * (phase1 - phase0);

            x0 = centerX + xSqueeze * rad * Math.cos(theta + phase);
            y0 = centerY + rad * Math.sin(theta + phase);

            this.context.lineTo(x0, y0);
          }
        }

        this.context.stroke();
        this.lineNumber++;

        if (this.lineNumber > this.numPoints - 1) {
          clearInterval(this.timer);
          this.timer = null;
          break;
        }
      }
    },

    setLinePoints(iterations) {
      let pointList = {};
      let pointArray = [];
      let lastPoint = { x: 1, y: 1 };
      let minY = 1;
      let maxY = 1;
      let point;
      let nextPoint;
      let dx, newX, newY;

      pointList.first = { x: 0, y: 1 };
      pointList.first.next = lastPoint;

      for (let i = 0; i < iterations; i++) {
        point = pointList.first;

        while (point.next) {
          nextPoint = point.next;
          dx = nextPoint.x - point.x;
          newX = 0.5 * (point.x + nextPoint.x);
          newY = 0.5 * (point.y + nextPoint.y);
          newY += dx * (Math.random() * 2 - 1);

          let newPoint = { x: newX, y: newY };

          if (newY < minY) minY = newY;
          else if (newY > maxY) maxY = newY;

          newPoint.next = nextPoint;
          point.next = newPoint;
          point = nextPoint;
        }
      }

      if (maxY !== minY) {
        let normalizeRate = 1 / (maxY - minY);
        point = pointList.first;

        while (point != null) {
          point.y = normalizeRate * (point.y - minY);
          pointArray.push(point.y);
          point = point.next;
        }
      } else {
        point = pointList.first;

        while (point != null) {
          point.y = 1;
          pointArray.push(point.y);
          point = point.next;
        }
      }

      return pointArray;
    },

    getRandomColourValue() {
      return (
        this.minColorValue +
        Math.random() * (this.maxColorValue - this.minColorValue)
      );
    },

    getCircleRadius(index) {
      let circle = this.circles[index];
      let point = circle.pointArray[this.lineNumber];

      return circle.minRad + point * (circle.maxRad - circle.minRad);
    },

    getCircleCenter(index, trigType, axis) {
      let circle = this.circles[index]["center" + axis];
      let nextCircle = this.circles[index + 1]["center" + axis];

      return circle + trigType * (nextCircle - circle);
    }
  }
};
</script>

<style scoped>
#displayCanvas {
  margin: auto 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
}
</style>
