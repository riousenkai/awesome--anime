const searchInput = document.querySelector(".search");
const resultsContainer = document.querySelector(".results");
searchInput.addEventListener("keyup", async (e) => {
  e.preventDefault();
  resultsContainer.innerHTML = "";
  const input = searchInput.value;
  try {
    const res = await fetch(`/api/search/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wya: input }),
    });
    const { results } = await res.json();
    results.forEach((result) => {
      resultsContainer.innerHTML += `<li class='anime-result'><img src='${result.image_url}' class='anime-img-1'></img><a class='anime-lnk' href='/anime/${result.id}'>${result.title}</a></li>`;
    });

  } catch (err) {
    console.log(err);
  }
});
