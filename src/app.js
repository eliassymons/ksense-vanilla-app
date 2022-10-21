let userData = [];

const data = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => userData.push(data));
};
data();
console.log(userData);

const users = document.getElementsByClassName("user");
function allUsers() {
  for (const user of users) {
    user.addEventListener("click", handleClick);
  }
}

allUsers();

function handleClick(e) {
  e.preventDefault();
  e.target.classList.add("active");
  setTimeout(() => {
    e.target.classList.remove("active");
  }, 1000);

  const id = e.target.id;
  const idNum = parseInt(id);
  let user = userData[0].filter((u) => u.userId === idNum);
  const allPosts = user
    .map(
      (u) =>
        `<div class="post"><h3 class="title">${u.title}</h3>` +
        `<p class="body">${u.body}</p></div>`
    )
    .join(" ");

  document.getElementById("posts").innerHTML = allPosts;
}
