const animeInfo = [
  {
    url: "https://i.ibb.co/qrF382M/fategrandordercarnival-keyvisual-1-e1609432627508-1.jpg",
    title:
      "'Fate/Grand<br> Order' Special<br> 'Fate/Grand<br> Carnival' Gets<br> OVA",
  },
  {
    url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/my-hero-academia-banner.jpg",
    title: "My Hero Academia Season 6 Premiere Date",
  },
  {
    url: "https://otakuusamagazine.com/wp-content/uploads/2020/12/juju01-1024x576.jpg",
    title: "Jujutsu Kaisen Has 15 Million Copies in Circulation",
  },
  {
    url: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2016/11/22192152/aotbanner.jpg",
    title: "Attack on Titan Final Season Part 2 Announced for 2022",
  },
];

let nextAnimeNum = 0;
const nextAnimeButton = document.querySelector(".next-anime");
const heroCalendar = document.querySelector(".hero-calendar");
const animeImage = document.querySelector(".anime-img");
const animeTitle = document.querySelector(".hero-title");
const loadingText = document.querySelectorAll(".loading-text");
const slider = document.querySelector(".slider");
const featuredBtn = document.querySelector(".featuredtext");
const newsBtn = document.querySelector(".newstext");
const date = new Date();

const daFunction = (e) => {
  nextAnimeButton.removeEventListener("click", daFunction);
  slider.classList.toggle("display-none");
  heroCalendar.classList.toggle("display-none");
  animeTitle.classList.toggle("display-none");
  featuredBtn.classList.toggle("display-none");
  newsBtn.classList.toggle("display-none");
  loadingText.forEach((text) => {
    text.classList.toggle("display-none");
  });
  animeImage.classList.toggle("loading");
  setTimeout(() => {
    slider.classList.toggle("display-none");
    heroCalendar.classList.toggle("display-none");
    animeTitle.classList.toggle("display-none");
    featuredBtn.classList.toggle("display-none");
    newsBtn.classList.toggle("display-none");
    loadingText.forEach((text) => {
      text.classList.toggle("display-none");
    });
    animeImage.classList.toggle("loading");
    let curr = document.querySelector(`.slider-${nextAnimeNum}`);
    nextAnimeNum++;
    if (nextAnimeNum > 3) {
      nextAnimeNum = 0;
    }
    let next = document.querySelector(`.slider-${nextAnimeNum}`);
    curr.classList.toggle("active-dot");
    next.classList.toggle("active-dot");
    animeImage.style.backgroundImage = `url(${animeInfo[nextAnimeNum].url})`;
    animeTitle.innerHTML = animeInfo[nextAnimeNum].title;
    nextAnimeButton.addEventListener("click", daFunction);
  }, 2000);
};

heroCalendar.innerHTML = `<svg class="calendar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${date
  .toISOString()
  .split("T")[0]
  .replace(/-/g, "/")}`;

nextAnimeButton.addEventListener("click", daFunction);
