const width = window.innerWidth;
const height = window.innerHeight;
console.log(width, height);
fetch("./fakeData.json") //api for the get request
  .then((response) => response.json())
  .then((data) => displayProducts(data));

const displayProductsByCircles = (data) => {
  //   document.querySelector(".products").remove();
  document.querySelector(".main").style.display = "flex";
  var products = document.querySelectorAll(".products .product");
  console.log(products);

  var balls = [];
  var radius = 200;
  let num = 0;
  for (var i = 0; i < products.length; i++) {
    addBall(i);
  }

  function addBall(_i) {
    if (_i === 3 || _i === 12 || _i === 20) {
      num = 0;
    }
    let totalBalls =
      (_i <= 3 && 3) || (_i <= 12 && 12 - 3) || (_i >= 12 && 20 - 13);
    var ball = {
      no: (_i <= 3 && 1) || (_i <= 12 && 2) || (_i > 12 && 3),
      x: 0,
      y: 0,
      speed: 00,
      size: 80,
      //   colour: "",
      angle: distributeAngles(num, totalBalls),
    };
    balls.push(ball);
    num++;
  }

  function draw() {
    console.log("draw");
    moveBall();
    drawBall();
  }

  draw();
  function moveBall() {
    for (var i = 0; i < balls.length; i++) {
      var b = balls[i];
      b.angle += b.speed;
      if (b.no === 1) {
        b.x = width / 2 + Math.cos(radians(b.angle)) * (radius + b.size / 2);
        b.y = height / 2 + Math.sin(radians(b.angle)) * (radius + b.size / 2);
      }
      if (b.no === 2) {
        b.x = width / 2 + Math.cos(radians(b.angle)) * (500 + b.size / 2);
        b.y = height / 2 + Math.sin(radians(b.angle)) * (500 + b.size / 2);
      }
      if (b.no === 3) {
        b.x = width / 2 + Math.cos(radians(b.angle)) * (800 + b.size / 2);
        b.y = height / 2 + Math.sin(radians(b.angle)) * (800 + b.size / 2);
      }
    }
  }

  function drawBall() {
    for (var i = 0; i < products.length; i++) {
      var b = balls[i];
      console.log(b);
      let circleDiv = document.createElement("div");
      circleDiv.style.transform = `translateX(${b.x}px) translateY(${b.y}px)`;
      circleDiv.classList.add("circle");
      circleDiv.innerHTML = `<img src=${data[i].picture} alt="" />`;

      document.querySelector(".ciclegraph").appendChild(circleDiv);
    }
  }

  function distributeAngles(me, total) {
    console.log(me, total, "me, total");
    return (me / total) * 360;
  }
  function radians(deg) {
    return (deg * Math.PI) / 180;
  }
  console.log("clicked", products.length);
};

const displayProducts = (data) => {
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
