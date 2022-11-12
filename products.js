fetch("./fakeData.json") //api for the get request
  .then((response) => response.json())
  .then((data) => displayProducts(data));

const displayProductsByCircles = (data) => {
  document.querySelector(".products").remove();
  document.querySelector(".main").style.display = "flex";
  var number_of_balls = data.length;
  //   var number_of_balls2 = 12;
  //   var number_of_balls3 = 20;
  var balls = [];
  var radius = 200;
  let num = 0;
  for (var i = 0; i < number_of_balls; i++) {
    addBall(i);
  }

  function addBall(_i) {
    // let angleI = (_i === 3 && 0) || (_i === 12 && 0) || (_i === 20 && 0);
    if (_i === 3 || _i === 12 || _i === 20) {
      num = 0;
    }
    // console.log(angleI);
    let totalBalls =
      (_i <= 3 && 3) || (_i <= 12 && 12 - 3) || (_i >= 12 && 20 - 13);
    var ball = {
      no: (_i <= 3 && 1) || (_i <= 12 && 2) || (_i > 12 && 3),
      x: 0,
      y: 0,
      speed: 0.0,
      size: 80,
      //   colour: "",
      angle: distributeAngles(num, totalBalls),
    };
    balls.push(ball);
    num++;
  }

  function draw() {
    console.log("draw");
    // ctx.background(245, 1);
    // ctx.fillStyle = "black";
    // ctx.HfillEllipse(w / 2, h / 2, radius * 2);
    moveBall();
    drawBall();
  }
  draw();
  function moveBall() {
    for (var i = 0; i < balls.length; i++) {
      var b = balls[i];
      //   console.log(b.angle);
      // move the angle to rotate the balls
      //   console.log(w, h);
      b.angle += b.speed;
      if (b.no === 1) {
        b.x = 1920 / 2 + Math.cos(radians(b.angle)) * (radius + b.size / 2);
        b.y = 720 / 2 + Math.sin(radians(b.angle)) * (radius + b.size / 2);
      }
      if (b.no === 2) {
        b.x = 1920 / 2 + Math.cos(radians(b.angle)) * (500 + b.size / 2);
        b.y = 720 / 2 + Math.sin(radians(b.angle)) * (500 + b.size / 2);
      }
      if (b.no === 3) {
        b.x = 1920 / 2 + Math.cos(radians(b.angle)) * (800 + b.size / 2);
        b.y = 720 / 2 + Math.sin(radians(b.angle)) * (800 + b.size / 2);
      }
    }
  }

  function drawBall() {
    for (var i = 0; i < data.length; i++) {
      var b = balls[i];
      console.log(b);
      let circleDiv = document.createElement("div");
      circleDiv.style.transform = `translateX(${b.x}px) translateY(${b.y}px)`;
      circleDiv.classList.add("circle");
      circleDiv.innerHTML = `<img src=${data[i].picture} alt="" />`;

      document.querySelector(".ciclegraph").appendChild(circleDiv);
      //   ctx.fillStyle = b.colour;
      //   ctx.fillEllipse(b.x, b.y, b.size);
    }
    // for (var i = 0; i < balls.length; i++) {
    //   var b = balls[i];
    //   ctx.fillStyle = b.colour;
    //   ctx.fillEllipse(b.x, b.y, b.size);
    // }
  }

  function distributeAngles(me, total) {
    console.log(me, total, "me, total");
    return (me / total) * 360;
  }
  function radians(deg) {
    return (deg * Math.PI) / 180;
  }
  console.log("clicked", data);
  //   document.querySelectorAll(".ciclegraph").forEach((ciclegraph) => {

  //   console.log(ciclegraph, "ciclegraph");

  //   let img = document.createElement("img");
  //   let angle = 360 - 90;
  //   let dangle = 360 / 3;
  //   let dangle2 = 360 / 10;
  //   let sortingData = data.sort((a, b) => a.age - b.age);

  //   for (let i = 0; i < sortingData.length; ++i) {
  //     let circleDiv = document.createElement("div");
  //     x = Math.sin(angle) * 50 + "px";
  //     y = Math.cos(angle) * 50 + "px";
  //     console.log(x, y);
  //     if (sortingData[i].age < 26) {
  //       angle += dangle;
  //       circleDiv.style.transform = `rotate(${angle}deg) translate(${200}px) rotate(${-angle}deg)`;
  //       circleDiv.style.transform = `rotate(${angle}deg) translate(${200}px) rotate(${-angle}deg)`;
  //       circleDiv.classList.add("circle");
  //       circleDiv.innerHTML = `<img src=${sortingData[i].picture} alt="" />`;

  //       document.querySelector(".ciclegraph").appendChild(circleDiv);
  //     } else {
  //       angle += dangle2;
  //       circleDiv.style.transform = `rotate(${angle}deg) translate(${600}px) rotate(${-angle}deg)`;

  //       circleDiv.classList.add("circle");
  //       circleDiv.innerHTML = `<img src=${sortingData[i].picture} alt="" />`;

  //       document.querySelector(".ciclegraph-two").appendChild(circleDiv);
  //     }
  //   }
};
// const displayProductsByCircles = (data) => {
//   document.querySelector(".products").remove();
//   console.log("clicked", data);
//   let angle = 360 - 90;
//   let dangle = 360 / 3;
//   let dangle2 = 360 / 10;
//   let sortingData = data.sort((a, b) => a.age - b.age);
//   for (let i = 0; i < data.length; ++i) {
//     const circleDiv = document.createElement("div");
//     if (i < 3) {
//       angle += dangle;
//       circleDiv.style.transform = `rotate(${angle}deg) translate(${200}px) rotate(${-angle}deg)`;
//       circleDiv.classList.add("circle");
//       circleDiv.innerHTML = `<img src=${data[i].picture} alt="" />`;

//       document.querySelector(".ciclegraph").appendChild(circleDiv);
//     } else {
//       angle += dangle2;
//       circleDiv.style.transform = `rotate(${angle}deg) translate(${600}px) rotate(${-angle}deg)`;

//       circleDiv.classList.add("circle");
//       circleDiv.innerHTML = `<img src=${data[i].picture} alt="" />`;

//       document.querySelector(".ciclegraph-two").appendChild(circleDiv);
//     }
//   }
// };
const displayProducts = (data) => {
  //   <div class="product">
  //   <img src="hal-ply-studio-1.webp" alt="" />
  // </div>;
  data.map((product) => {
    let productElm = document.createElement("div");
    productElm.classList.add("product");
    productElm.innerHTML = `<img src=${product.picture} alt="" />`;
    document.querySelector(".products").appendChild(productElm);
  });
  document
    .getElementById("filter-btn")
    .addEventListener("click", () => displayProductsByCircles(data));
};
// document.getElementById("btn-2").addEventListener("click", () => {
//   fetch("./fakeData.json") //api for the get request
//     .then((response) => response.json())
//     .then((data) => displayProducts(data));
// });
