const fetchDogBtn = document.getElementById("fetchDogBtn");
const dogImage = document.getElementById("dogImage");

function fetchRandomDog() {
  return new Promise((resolve, reject) => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log("Response received:", response);
        if (!response.ok) {
          reject("Failed to fetch the dog image. Status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchDogBtn.addEventListener("click", () => {
  console.log("Fetching a random dog picture...");
  fetchRandomDog()
    .then((data) => {
      console.log("Data fetched from API:", data);
      dogImage.src = data.message;
    })
    .catch((error) => {
      console.error("Error fetching the dog image:", error);
    });
});
