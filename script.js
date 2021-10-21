const data = {
  mainTitle: "My Favourite Cloud Platform",
  cardContents: [
    {
      name: "Google Cloud",
      imageLink:
        "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Emblem.png",
    },
    {
      name: "Amazon Cloud",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "Microsoft Azure",
      imageLink:
        "https://i0.wp.com/dailydotnettips.com/wp-content/uploads/2021/05/Azure-Logo.png?resize=783%2C426&ssl=1",
    },
    {
      name: "Oracle Cloud",
      imageLink:
        "https://asycuda.org/wp-content/uploads/logo-oracle-256.png",
    },
  ],
  userData: { name: "ARJUN KUMAR", tagLine: "Baby steps into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
