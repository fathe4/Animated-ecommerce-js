const width = window.innerWidth;
const height = window.innerHeight;
console.log(width, height);
fetch("./fakeData.json") //api for the get request
  .then((response) => response.json())
  .then((data) => displayProducts(data));

const displayProductsByCircles = (data) => {
  document.querySelector(".main").style.display = "flex";
  var products = document.querySelectorAll(".ciclegraph .circle");
  console.log(products);

  var balls = [];
  const radius = Math.min(width, height) / 2;
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
    // balls.push(ball);
    moveBall(ball);
    num++;
    displayCircleImg(ball, products[_i]);

    console.log(ball, "ball");
  }

  function moveBall(ball) {
    var b = ball;
    b.angle += b.speed;
    const size = Math.min(width, height) / 4; // dynamic size based on screen size

    if (b.no === 1) {
      b.x = width / 2 + Math.cos(radians(b.angle)) * (100 + b.size / 2);
      b.y = height / 2 + Math.cos(radians(b.angle)) * (100 + b.size / 2);
    }
    if (b.no === 2) {
      b.x = width / 2 + Math.cos(radians(b.angle)) * (600 + b.size / 2);
      b.y = height / 2 + Math.sin(radians(b.angle)) * (600 + b.size / 2);
    }
    if (b.no === 3) {
      b.x = width / 2 + Math.cos(radians(b.angle)) * (1200 + b.size / 2);
      b.y = height / 2 + Math.sin(radians(b.angle)) * (1200 + b.size / 2);
    }
  }

  function displayCircleImg(ball, currentProductElement) {
    currentProductElement.classList.add("circle-displayed");

    console.log(ball, currentProductElement);
    currentProductElement.style.transform = `translateX(${ball.x}px) translateY(${ball.y}px)`;
    // currentProductElement.style.transition = `all 0.5s ease-in-out`;
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
    productElm.classList.add("circle");
    productElm.innerHTML = `<img src=${product.picture} alt="" />`;
    document.querySelector(".ciclegraph").appendChild(productElm);
  });
  document
    .getElementById("filter-btn")
    .addEventListener("click", () => displayProductsByCircles(data));
};
