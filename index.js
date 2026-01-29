/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

/** returns freelancer object with random name, ocuipation, and rate based on Constants*/
function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min,
  );
  return { name, occupation, price };
}

const freelancer = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

const average =
  freelancer.map((rate) => rate.price).reduce((a, b) => a + b) /
  NUM_FREELANCERS;

const singleFreelancer = Array.from({ length: 1 }, makeFreelancer);

function AverageRate() {
  const $p = document.createElement("p");
  $p.innerHTML = `The average rate is ${average}`;
  return $p;
}

function Freelancer({ name, occupation, price }) {
  const $li = document.createElement(`li`);
  $li.innerHTML = `
  <span>${name}</span>
  <span>${occupation}</span>
  <span>${price}</span>
`;
  return $li;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <Freelancer></Freelancer>
  `;
  $app.querySelector("AverageRate").replaceWith(AverageRate(average));
  $app.querySelector("Freelancer").replaceWith(Freelancer(freelancer));
}
render();
