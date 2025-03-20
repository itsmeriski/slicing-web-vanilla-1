const contentLearningCards = [
  {
    image: "images/Mask Group-1.png",
    altImage: "Free class access for that start learning code and design",
    title: "Starter",
    desc: "Free class access for that start learning code and design",
  },
  {
    image: "images/Mask Group.png",
    altImage: "Advanced material from the Starter & learn to build projects",
    title: "Premium",
    desc: "Advanced material from the Starter & learn to build projects",
  },
  {
    image: "images/Mask Group-2.png",
    altImage: "Materials for experts who have completed the premium package",
    title: "Superstar",
    desc: "Materials for experts who have completed the premium package",
  },
  {
    image: "images/Mask Group-3.png",
    altImage: "Informatics science training program with the latest material",
    title: "Bootcamp",
    desc: "Informatics science training program with the latest material",
  },
];

const learningCards = document.getElementsByClassName("learning__cards");

if (learningCards) {
  for (let i = 0; i < contentLearningCards.length; i++) {
    const card = document.createElement("div");
    card.className = "learning__card";

    card.innerHTML = `
        <img src="${contentLearningCards[i].image}" alt="${contentLearningCards[i].altImage}" class="learning__card-image" />
        <h3 class="learning__card-title">${contentLearningCards[i].title}</h3>
        <p class="learning__card-desc">${contentLearningCards[i].desc}</p>
        <button class="btn btn--small btn--primary">See Class</button>
    `;

    learningCards[0].appendChild(card);
  }
}
