const animeLink = window.location.href.split("/");
const animeId = animeLink.includes('?') ? animeLink[animeLink.length - 1].split("?")[0] : animeLink[animeLink.length - 1];

let count = 0;

const deleteB = async (id) => {
  event.preventDefault();
  event.target.closest("li").remove();
  count++;
  if (count > 4) {
    count = 0;
    setTimeout(() => window.location.reload());
  }
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
};

document.addEventListener("DOMContentLoaded", async () => {
  const reviewContainer = document.getElementById("reviews");

  try {
    const res = await fetch(`/api/reviews/${animeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { review, currSession } = await res.json();
    const reviewChange = review.map(
      ({ description, createdAt, id }, i, array) => {
        if (array[i].User.id === currSession) {
          return `<li id='list-${id}'>
            <form class="${id} ${array[i].User.username} display-none edit" id="l-${id}">
            <input id="input-${id}" class="fixInput" name="description"><button class="fixComment" >Fix Your Comment</button></form>
            <p id='p-${id}'>${array[i].User.username} said ${description}</p>
            <button class="s-${id} editButton" onclick="return editB(${id})">Edit</button>
            <button class="${id} deleteButton" onclick="return deleteB(${id})">Delete</button>
            </li>`;
        } else {
          return `<li><p>${array[i].User.username} said ${description}</p></li>`;
        }
      }
    );

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
        const body = { description };
        const pList = document.getElementById(`p-${id}`);
        pList.innerHTML = `${username} said ${description}`;

        const formInput = document.getElementById(`input-${id}`);
        formInput.value = "";

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
  } catch (error) {
    console.error(error);
  }

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
    try {
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

      try {
        const res2 = await fetch(`/api/reviews/${animeId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { review } = await res2.json();
        const lastReview = review[review.length - 1];

        reviewContainer.innerHTML += `<li>
          <form id=${lastReview.id}-form class="${lastReview.id} ${lastReview.User.username} display-none edit">
          <input id="input-${lastReview.id}" class="fixInput" name="description"><button class="fixComment" >Fix Your Comment</button></form>
          <p id='p-${lastReview.id}'>${lastReview.User.username} said ${lastReview.description}</p>
          <button class="${lastReview.id} editButton" onclick="return editB(${lastReview.id})" id="a-${lastReview.id}">Edit</button>
          <button class="${lastReview.id} deleteButton" onclick="return deleteB(${lastReview.id})">Delete</button>
          </li>`;

        const editing = document.getElementById(`a-${lastReview.id}`);

        editing.addEventListener("click", (event) => {
          event.preventDefault();
          const editor = document.getElementById(`${lastReview.id}-form`);
          editor.classList.toggle("display-none");
        });

        const editForm = document.getElementById(`${lastReview.id}-form`);

        editForm.addEventListener("submit", async (event) => {
          event.preventDefault();
          const id = event.target.classList[0];
          const username = event.target.classList[1];
          const formData = new FormData(editForm);
          const description = formData.get("description");
          const body = { description };
          if (!description.length) {
            return;
          }
          const pList = document.getElementById(`p-${id}`);
          pList.innerHTML = `${username} said ${description}`;

          const formInput = document.getElementById(`input-${id}`);
          formInput.value = "";

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
      } catch (err) {
        console.error(err);
      }
    } catch (error) {
      console.error(error);
    }
  });
});
