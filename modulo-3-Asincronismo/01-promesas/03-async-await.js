const url = `https://rickandmortyapi.com/api/character`;

const getApi = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }
};

getApi();
