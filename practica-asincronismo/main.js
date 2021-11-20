let data;
let urlApi = `https://rickandmortyapi.com/api/character`;
const container = document.querySelector(".container");
const button = document.querySelector("button");
const ul = document.createElement("ul");
let li = document.createElement("li");
const arrayList = [];

button.addEventListener("click", () => {
  console.log(data.length);
  data.map((p) => {
    console.log(p.name);
  });
});

const getDataApi = async (url) => {
  try {
    const response = await fetch(url);
    const dataResponse = await response.json();
    data = dataResponse.results;
  } catch (error) {
    console.log(error);
  }
  console.log("data: ", data);
};

getDataApi(urlApi);
