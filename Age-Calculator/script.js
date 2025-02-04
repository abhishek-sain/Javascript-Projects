// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const message = document.getElementById("message");

// function calculateAge(birthDate) {
//   const currentDate = new Date();
//   const birthYear = new Date(birthDate);
//   let age = currentDate.getFullYear() - birthYear.getFullYear();
//   const month = currentDate.getMonth() - birthYear.getMonth();
//   console.log(age);

//   console.log(month);
//   if (month < 0 || currentDate.getDate() < birthYear.getDate()) {
//     age--;
//     return age;
//   }
//   return age;
// }

// btn.addEventListener("click", () => {
//   const birthDate = input.value.trim();

//   if (birthDate == "") {
//     alert("Please Enter your Birth Date");
//     return;
//   }
//   const age = calculateAge(birthDate);
//   message.textContent = `You are ${age}`;

//   input.value = "";
// });

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

function calculateAge(birthValue) {
  const birthDate = new Date(birthValue);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  if (month < 0 || currentDate.getDate() < birthDate.getDate()) {
    age--;
    console.log(age);
    return age;
  }
  console.log(age);
  return age;
}

btn.addEventListener("click", () => {
  const birthValue = input.value.trim();
  const age = calculateAge(birthValue);
  message.textContent = `You are ${age}`
  input.value = "";
});
