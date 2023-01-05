const data = [
  {
    text: "Mental Health",
    value: mental
  },
  {
    text: "Physical Activity",
    value: phys
  },
  {
    text: "Nutrition",
    value: nutr
  },
];


const all = document.querySelector(".all");

const chartResult = data.map((res, idx) => {
  const { text, value } = res;

  let color = "";
  if (value >= 1 && value <= 34) {
    color = "#ec0c0c";
  } else if (value >= 35 && value <= 70) {
    color = "yellow";
  } else {
    color = "green";
  }

  document.documentElement.style.setProperty(
    `--changeFill${idx + 1}`,
    `${180 * (value / 100)}deg`
  );

  return `
    <div class="circle-wrap">
      <div class="text">${text}</div>
      <div class="circle">
        <div class="mask full-${idx + 1}">
          <div class="fill-${idx + 1}" style="background-color:${color}"></div>
        </div>
        <div class="mask half">
          <div class="fill-${idx + 1}" style="background-color:${color}"></div>
        </div>
        <div class="inside-circle">${value}%</div>
      </div>
    </div>
    `;
});

all.innerHTML = chartResult;
all.innerHTML += `
  <a href="#sec-2">
    <div class="scroll-down"></div>
  </a>
`;

// navigation SIDEBAR TOGGLE
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  document.querySelector("#btnNav").addEventListener("click", () => {
    nav.classList.add("nav--open");
  });

  document.querySelector(".nav_overlay").addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
});

// //faq
let slides = document.querySelectorAll(".credits .slide-container .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

//review
document
  .querySelectorAll(".faq .accordion-container .accordion")
  .forEach((accordion) => {
    accordion.onclick = () => {
      accordion.classList.toggle("active");
    };
  });

//progress steps (self-assessment)
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
