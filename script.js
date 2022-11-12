fetch("./fakeData.json") //api for the get request
  .then((response) => response.json())
  .then((data) => displayFirstCircle(data));

const displayFirstCircle = (data) => {
  //   document.querySelectorAll(".ciclegraph").forEach((ciclegraph) => {
  //   let ciclegraph = document.querySelector(".ciclegraph");
  //   console.log(ciclegraph, "ciclegraph");

  //   let img = document.createElement("img");
  let angle = 360 - 90;
  let dangle = 360 / 3;
  let dangle2 = 360 / 10;
  let sortingData = data.sort((a, b) => a.age - b.age);
  for (let i = 0; i < sortingData.length; ++i) {
    let circleDiv = document.createElement("div");
    console.log(sortingData[i]);

    if (sortingData[i].age < 26) {
      angle += dangle;
      circleDiv.style.transform = `rotate(${angle}deg) translate(${250}px) rotate(${250}deg)`;

      circleDiv.classList.add("circle");
      circleDiv.innerHTML = `<img src=${sortingData[i].picture} alt="" />`;

      document.querySelector(".ciclegraph").appendChild(circleDiv);
    } else {
      angle += dangle2;
      circleDiv.style.transform = `rotate(${angle}deg) translate(${600}px) rotate(${250}deg)`;

      circleDiv.classList.add("circle");
      circleDiv.innerHTML = `<img src=${sortingData[i].picture} alt="" />`;

      document.querySelector(".ciclegraph-two").appendChild(circleDiv);
    }
  }
  //   document.querySelectorAll(".ciclegraph").forEach((ciclegraph) => {
  //     let circles = ciclegraph.querySelectorAll(".circle");

  //     let angle = 360 - 90,
  //       dangle = 360 / circles.length;
  //     console.log(ciclegraph);
  //     for (let i = 0; i < circles.length; ++i) {
  //       let circle = circles[i];
  //       angle += dangle;
  //       circle.style.transform = `rotate(${angle}deg) translate(${250}px) rotate(${250}deg)`;
  //     }
  //   });

  // let circles = ciclegraph.querySelectorAll(".circle");

  //   });
};

document.querySelectorAll(".ciclegraph-two").forEach((ciclegraph) => {
  let circles = ciclegraph.querySelectorAll(".circle");

  let angle = 360 - 90,
    dangle = 360 / circles.length;
  console.log(ciclegraph);
  for (let i = 0; i < circles.length; ++i) {
    let circle = circles[i];
    angle += dangle;
    circle.style.transform = `rotate(${angle}deg) translate(${
      ciclegraph.clientWidth / 2
    }px) rotate(${250}deg)`;
  }
});

// document.querySelectorAll(".myGallery").forEach((image) => {
//   let img1 = image.querySelector(".product_img1");
//   let img2 = image.querySelector(".product_img2");
//   let img3 = image.querySelector(".product_img3");
//   console.log(image);
//   img1.style.position = `absolute`;
//   img1.style.top = `35%`;
//   img1.style.left = `35%`;
//   img1.style.transform = `translate(-50%, -50%)`;

//   img2.style.position = `absolute`;
//   img2.style.top = `35%`;
//   img2.style.left = `70%`;
//   img2.style.transform = `translate(-50%, -50%)`;

//   img3.style.position = `absolute`;
//   img3.style.top = `50%`;
//   img3.style.left = `52.5%`;
//   img3.style.transform = `translate(-50%, -50%)`;

//   //   let angle = 360 - 90,
//   //     dangle = 360 / circles.length;
//   //   console.log(ciclegraph);
//   //   for (let i = 0; i < circles.length; ++i) {
//   //     let circle = circles[i];
//   //     angle += dangle;
//   //     circle.style.transform = `rotate(${angle}deg) translate(${
//   //       ciclegraph.clientWidth / 2
//   //     }px) rotate(${250}deg)`;
//   //   }
// });
