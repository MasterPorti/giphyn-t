const infoURL = window.location.search; //we get the info from the url
const APIkeyword = infoURL.slice(1).replaceAll("%20", "+"); //we transform the info to get the keywords and then send them to fetch
const value = infoURL.slice(1).replaceAll("%20", " "); //here we transform the info and the show it to the user
document.getElementById("input").setAttribute("value", `${value}`);
document.getElementById("title").innerHTML = `${value}`;
const firstColumn = document.getElementById("firstColumn");
const secondColumn = document.getElementById("secondColumn");
const thirdColumn = document.getElementById("thirdColumn");
const fourColumn = document.getElementById("fourColumn");
const amountGifs = document.getElementById("amountGifs");
const API_REQ = `https://api.giphy.com/v1/gifs/search?api_key=zBhkK5colzQjonYAbAP0SwOj1BAhmC3f&q=${APIkeyword}&limit=24&offset=0&rating=pg&lang=en`;

async function apiReq() {
  const res = await fetch(API_REQ);
  const data = await res.json();
  amountGifs.innerHTML = `${data.pagination.total_count} GIFs`;
  const gifsURL = data.data.map((value, i) => {
    const gif = value.images.downsized_large.url;
    const createImg = document.createElement("img");
    createImg.setAttribute("src", `${gif}`);
    createImg.classList.add("gif");

    if (i <= 5) {
      firstColumn.appendChild(createImg);
    } else if (i <= 11) {
      secondColumn.appendChild(createImg);
    } else if (i <= 17) {
      thirdColumn.appendChild(createImg);
    } else if (i <= 23) {
      fourColumn.appendChild(createImg);
    }
  });
}

apiReq();
