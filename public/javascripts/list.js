const removeAnime = async (listId) => {
  let tr = document.getElementById(`tr-${listId}`);
  let anime_id = tr.classList[0];

  tr.remove();

  try {
    await fetch(`/api/animeList/${listId}/${anime_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const select = document.getElementById("select");
const list = document.getElementById("newlist1");

const delCustomList = async () => {
  if (select.value === "all") {
    return;
  }

  const num = select.value;

  select.options[select.selectedIndex].remove();

  try {
    await fetch(`/api/anime-list/delete/${num}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

list.addEventListener("keydown", async (event) => {
  list.setAttribute("placeholder", "Create a new list here!");

  if (event.keyCode === 13) {
    event.preventDefault();
    const userId = document.querySelector(".userz").classList[1];
    const body = { list: list.value };

    // POST
    const newList = await fetch(`/api/animeList`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Get POSTED review id
    const { reviewId } = await newList.json();

    const option = document.createElement("option");
    // Add newly POSTED review id to value of option
    option.setAttribute("value", `${reviewId}`);
    option.innerText = list.value;
    select.appendChild(option);

    list.value = "";
  }
});

// OLD FUNCTION

// list.addEventListener("keydown", async (event) => {
//   list.setAttribute("placeholder", "Create a new list here!");

//   if (event.keyCode === 13) {
//     event.preventDefault();

//     if (list.value.match(/^\s+/)) {
//       list.value = "";
//       list.blur();
//       return list.setAttribute("placeholder", "No spaces at the beginning!");
//     }

//     if (list.value.length > 20) {
//       list.value = "";
//       list.blur();
//       return list.setAttribute("placeholder", "Maximum of 20 characters.");
//     }

//     const userId = document.querySelector(".userz").classList[1];

//     const res = await fetch(`/api/animeList/user/${userId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const { lists } = await res.json();
//     const body = { list: list.value };

//     const option = document.createElement("option");
//     option.setAttribute("value", `${lists[lists.length - 1].id + 1}`);
//     option.innerText = list.value;
//     select.appendChild(option);

//     list.value = "";

//     await fetch(`/api/animeList`, {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// });
