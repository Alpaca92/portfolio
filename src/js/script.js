// global variables
const main = document.querySelector("main");
const sectionLefts = [
  main.querySelector("#greeting").offsetWidth,
  main.querySelector("#aboutme").offsetWidth,
  main.querySelector("#web").offsetWidth,
  main.querySelector("#hover").offsetWidth,
  main.querySelector("#uiux").offsetWidth,
];

// initialize body height
const mainWidth = main.clientWidth;
const screenHeight = document.documentElement.clientHeight;

window.addEventListener("load", () => {
  document.body.style.height = `${mainWidth - screenHeight}px`;
});

// color header & scroll horizontally
const lists = document.querySelectorAll(".gnb li");

function removeHeaderActive() {
  lists.forEach((li) => li.classList.remove("header-active"));
}

function handleHeaderClick() {
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] === this) {
      window.scrollTo(0, sectionLefts.slice(0, i + 1).reduce((acc, cur) => acc + cur) + 2);
    }
  }
}

lists.forEach((li) => {
  li.addEventListener("click", handleHeaderClick);
});

function colorHeader() {
  const mainAbsLeft = main.style.left.slice(1, -2);

  if (
    mainAbsLeft >= sectionLefts.slice(0, 1).reduce((acc, cur) => acc + cur) &&
    mainAbsLeft < sectionLefts.slice(0, 2).reduce((acc, cur) => acc + cur)
  ) {
    lists[0].classList.add("header-active");
  } else if (
    mainAbsLeft >= sectionLefts.slice(0, 2).reduce((acc, cur) => acc + cur) &&
    mainAbsLeft < sectionLefts.slice(0, 3).reduce((acc, cur) => acc + cur)
  ) {
    lists[1].classList.add("header-active");
  } else if (
    mainAbsLeft >= sectionLefts.slice(0, 3).reduce((acc, cur) => acc + cur) &&
    mainAbsLeft < sectionLefts.slice(0, 4).reduce((acc, cur) => acc + cur)
  ) {
    lists[2].classList.add("header-active");
  } else if (
    mainAbsLeft >= sectionLefts.slice(0, 4).reduce((acc, cur) => acc + cur) &&
    mainAbsLeft < sectionLefts.slice(0, 5).reduce((acc, cur) => acc + cur)
  ) {
    lists[3].classList.add("header-active");
  } else if (
    mainAbsLeft >= sectionLefts.slice(0, 5).reduce((acc, cur) => acc + cur)
  ) {
    lists[4].classList.add("header-active");
  }
}

function setMainScollY() {
  const mainLeft = window.scrollY;

  main.style.left = `${-mainLeft}px`;
}

function handleScroll() {
  removeHeaderActive();
  setMainScollY();
  colorHeader();
}

window.addEventListener("scroll", handleScroll);

// renewal index click
const modal = document.querySelectorAll(".renewal-container");
const renewalTitle = document.querySelectorAll(".renewal__tit > li");
let titIdx = 0;

function addRenewalActive(idx) {
  modal[idx].classList.add("renewal-active");
}

function removeRenewalActive() {
  modal.forEach((el) => el.classList.remove("renewal-active"));
}

function setTitIdx(elem) {
  return (titIdx =
    parseInt(elem.querySelector(".renewal__idx").innerHTML.split("#").pop()) -
    1);
}

function removeTitActive() {
  renewalTitle.forEach((el) => el.classList.remove("tit-active"));
}

function handleTitClick() {
  removeTitActive();

  this.classList.add("tit-active");

  setTitIdx(this);
  removeRenewalActive();
  addRenewalActive(titIdx);
}

renewalTitle.forEach((el) => el.addEventListener("click", handleTitClick));