const animeLink = window.location.href.split("/");
const animeId = animeLink[animeLink.length - 1];

document.addEventListener(
  "DOMContentLoaded",
  (moo = async () => {
    try {
      const res = await fetch(`/api/reviews/${animeId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { review, currSession } = await res.json();

      const reviewContainer = document.getElementById("reviews");
      let myReviewId = 0;

      const reviewChange = review.map(
        ({ description, updatedAt, id }, i, array) => {
          const date = updatedAt.split("T")[0];

          if (array[i].User.id === currSession) {
            return `<li id='list-${id}'>
            <a href="/profile/${array[i].User.id}"><img class='profile-img' src=${array[i].User.profile_pic_url} ></a>
            <p class= "demoSaid" id='p-${id}'>${description} <br><span></span> <span class='elspan'>Posted by ${array[i].User.username} on ${date}</span></p>
            <button class="s-${id} editButton" onclick="return editB(${id})">Edit</button>
            <button class="${id} deleteButton" onclick="return deleteB(${id})">Delete</button>
            <form class="${id} ${array[i].User.username} formContainer display-none edit" id="l-${id}">
            <input id="input-${id}" class="fixInput" name="description" value=${description}>
            <button class="fixComment">Submit Edit</button></form>
            </li>`;
          } else {
            return `<li id='list-${id}'>
            <a href="/profile/${array[i].User.id}"><img class='profile-img' src=${array[i].User.profile_pic_url} ></a>
            <p class= "demoSaid" id='p-${id}'>${description} <br><span></span> <span class='elspan'>Posted by ${array[i].User.username} on ${date}</span></p>
            <form class="${id} ${array[i].User.username} formContainer display-none edit" id="l-${id}">
            <input id="input-${id}" class="fixInput" name="description">
            <button class="fixComment">Submit Edit</button></form>
            </li>`;
          }
        }
      );

      myReviewId = review.length;
      reviewContainer.innerHTML = reviewChange.join("");

      const editReviews = document.querySelectorAll(".edit");
      editReviews.forEach((editReview) => {
        editReview.addEventListener("submit", async (event) => {
          event.preventDefault();
          const id = event.target.classList[0];
          const username = event.target.classList[1];
          const formData = new FormData(editReview);
          const description = formData.get("description");

          if (!description.length) {
            return;
          }

          const date = new Date();
          const month = date.getMonth();
          const day = date.getDate();
          const year = date.getFullYear();

          const body = { description };
          const pList = document.getElementById(`p-${id}`);
          const editButton2 = document.getElementById(`l-${id}`);
          editButton2.classList.toggle("display-none");
          editButton2.scrollIntoView({ behavior: "smooth" });

          pList.innerHTML = `${description} <br><span></span> <span class='elspan'>Posted by ${username} on ${year}-${
            month < 10 ? "0" + (month + 1) : month + 1
          }-${day}</span>`;

          const formInput = document.getElementById(`input-${id}`);
          formInput.value = description;

          try {
            const res = await fetch(`/api/reviews/${id}`, {
              method: "PUT",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (!res.ok) {
              throw res;
            }
          } catch (error) {
            console.error(error);
          }
        });
      });
    } catch (err) {
      console.error(err);
    }
  })
);

const reviewForm = document.getElementById("submit");
reviewForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  event.stopPropagation();
  const formData = new FormData(reviewForm);
  const description = formData.get("description");
  const body = { description };
  if (!description.length) {
    return;
  }
  const res = await fetch(`/api/anime/${animeId}/reviews`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw res;
  }
  const inputText = document.querySelector(".submitInput");
  inputText.value = "";
  await moo();
});

let count = 0;

const deleteB = async (id) => {
  event.preventDefault();
  event.target.closest("li").remove();
  try {
    await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const editB = (id) => {
  const editButton = document.getElementById(`l-${id}`);
  editButton.classList.toggle("display-none");
  editButton.scrollIntoView({ behavior: "smooth" });
};
