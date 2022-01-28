const anime_Id = window.location.href.split("/")[4];

// add to the list
const addToList = document.querySelectorAll(".add-to-list");
addToList.forEach((add) => {
  add.addEventListener("click", async (e) => {
    e.preventDefault();
    const listId = add.value;
    const body = { listId, anime_Id };
    window.alert("Successfully added to your list!");
    return await fetch(`/api/animeList/${listId}`, {
      method: "POST",
      body: JSON.stringify(body),
 
    });
  });
});

const customAdd = async () => {
  event.preventDefault();
  const selectBtn = document.getElementById("customSelect");
  const listId = selectBtn.value;
  const body = { listId, anime_Id };
  window.alert("Successfully added to your list!");
  return await fetch(`/api/animeList/${listId}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
