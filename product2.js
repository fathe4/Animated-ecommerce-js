gsap.registerPlugin(Flip);

const width = window.innerWidth;
const height = window.innerHeight;
fetch("./fakeData.json") //api for the get request
  .then((response) => response.json())
  .then((data) => displayProducts(data));

const displayProductsByCircles = (state) => {
  //   document.querySelector(".main").style.display = "flex";
  var products = document.querySelectorAll(".ciclegraph .circle");

  //   Flip.from({ state, duration: 1, ease: "expo.out", absolute: true });

  var balls = [];
  const radius1 = Math.min(width, height) / 8;
  const radius2 = radius1 * 4;
  const radius3 = radius1 * 6.5;
  console.log(radius1, radius2, radius3, "radiux");
  for (var i = 0; i < products.length; i++) {
    addBall(i, products[i]);
  }

  function addBall(_i, product) {
    let totalBalls;
    let ballNum;
    if (_i <= 3 && _i > 0) {
      totalBalls = 3;
      ballNum = 1;
    } else if (_i <= 12) {
      totalBalls = 12 - 3;
      ballNum = 2;
    } else {
      totalBalls = 20 - 13;
      ballNum = 3;
    }

    let ball = {
      no: ballNum,
      x: 0,
      y: 0,
      speed: 0,
      size: 80,
      angle: distributeAngles(_i, totalBalls),
    };

    moveBall(ball);
    displayCircleImg(ball, product);
  }

  function moveBall(ball) {
    var size = Math.min(width, height) / 4;
    ball.angle += ball.speed;

    switch (ball.no) {
      case 1:
        ball.x =
          width / 2 + Math.cos(radians(ball.angle)) * (radius1 + ball.size / 2);
        ball.y =
          height / 2 +
          Math.sin(radians(ball.angle)) * (radius1 + ball.size / 2);
        break;
      case 2:
        ball.x =
          width / 2 + Math.cos(radians(ball.angle)) * (radius2 + ball.size / 2);
        ball.y =
          height / 2 +
          Math.sin(radians(ball.angle)) * (radius2 + ball.size / 2);
        break;
      case 3:
        ball.x =
          width / 2 + Math.cos(radians(ball.angle)) * (radius3 + ball.size / 2);
        ball.y =
          height / 2 +
          Math.sin(radians(ball.angle)) * (radius3 + ball.size / 2);
        break;
    }
  }

  function displayCircleImg(ball, currentProductElement) {
    // currentProductElement.classList.add("circle-displayed");

    currentProductElement.style.transform = `translateX(${ball.x}px) translateY(${ball.y}px)`;
    // currentProductElement.style.transition = `all 0.5s ease-in-out`;

    // TweenMax.set(currentProductElement, {
    //   x: width / 2,
    //   y: height / 2,
    // });
    // TweenMax.to(currentProductElement, 2, {
    //   translateX: ball.x,
    //   translateY: ball.y,
    //   ease: Power2.easeInOut,
    // });
  }
  document
    .querySelector(".ciclegraph")
    .classList.remove("ciclegraph-filter-inactive");
  const images = document.querySelectorAll(".ciclegraph .circle img");
  //   const state = Flip.getState(products);
  images.forEach(function (image) {
    image.classList.add("ciclegraph-filter-active");
  });
  console.log(state);

  function distributeAngles(me, total) {
    console.log(me, total, "me, total");
    return (me / total) * 360;
  }
  function radians(deg) {
    console.log(deg, "deg");
    return (deg * Math.PI) / 180;
  }
  console.log("clicked", products.length);
  //   Flip.from(state, {
  //     stagger: 0.1,
  //     absolute: true,
  //     duration: 5,
  //     ease: "power1.inOut",
  //   });
};

const displayProducts = (data) => {
  data.map((product) => {
    let productElm = document.createElement("div");
    productElm.classList.add("circle");
    productElm.innerHTML = `<img src=${product.picture} alt="" />`;
    document.querySelector(".ciclegraph").appendChild(productElm);
  });
  const productState = gsap.utils.toArray("img");
  const state = Flip.getState(productState);
  console.log(state);
  document
    .getElementById("filter-btn")
    .addEventListener("click", () => displayProductsByCircles(state));
};

const element = document.querySelector(".element");
