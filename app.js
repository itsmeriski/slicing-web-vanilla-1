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

const contentAboutLists = [
  { desc: "Study and produce creation to get a job" },
  { desc: "Up to date material and created by expert creators" },
  { desc: "Complete classes and projects and get a certificate from us" },
];

const contentCompany = [
  { image: "images/Amazon.png", alt: "amazon logo" },
  { image: "images/Github.png", alt: "Github logo" },
  { image: "images/Linkedin.png", alt: "Linkedin logo" },
  { image: "images/Medium.png", alt: "Medium logo" },
  { image: "images/Microsoft.png", alt: "Microsoft logo" },
  { image: "images/paypal.png", alt: "paypal logo" },
  { image: "images/Reddit.png", alt: "Reddit logo" },
  { image: "images/redis.png", alt: "redis logo" },
];

const contentTestimonial = [
  { image: "images/avatar (1).png", name: "Jason Todd", job: "Entrepreneur" },
  { image: "images/avatar (2).png", name: "Cassandra K", job: "Web Developer" },
  {
    image: "images/avatar (3).png",
    name: "Peter Parker",
    job: "PHP Enthusiast",
  },
  { image: "images/avatar (4).png", name: "Jean Gray", job: "Designer" },
];

function createdIterationElement(
  parent,
  dataArray,
  elementType,
  className,
  templateCallback
) {
  if (!parent || dataArray.length === 0) return;

  dataArray.forEach((item) => {
    const newElement = document.createElement(elementType);
    newElement.classList.add(className);
    newElement.innerHTML = templateCallback(item);
    parent[0].appendChild(newElement);
  });
}

createdIterationElement(
  document.getElementsByClassName("learning__cards"),
  contentLearningCards,
  "div",
  "learning__card",
  (item) => {
    return `
      <img src="${item.image}" alt="${item.altImage}" class="learning__card-image" />
      <h3 class="learning__card-title">${item.title}</h3>
      <p class="learning__card-desc">${item.desc}</p>
      <button class="btn btn--small btn--primary">See Class</button>
    `;
  }
);

createdIterationElement(
  document.getElementsByClassName("about-us__lists"),
  contentAboutLists,
  "li",
  "about-us__list",
  (item) => {
    return `
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <circle cx="25" cy="25" r="25" fill="#DDFFF9" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M33.399 16.6022C33.7933 16.2178 34.3257 16.0015 34.8809 16C35.4361 15.9985 35.9697 16.2119 36.3662 16.5941C36.7627 16.9763 36.9902 17.4966 36.9997 18.0425C37.0092 18.5883 36.7997 19.1159 36.4167 19.5112L25.1685 33.3359C24.9752 33.5406 24.7419 33.7049 24.4825 33.819C24.2231 33.933 23.943 33.9945 23.6589 33.9996C23.3749 34.0048 23.0926 33.9536 22.8291 33.8491C22.5656 33.7446 22.3263 33.5889 22.1254 33.3913L14.6726 26.0606C14.465 25.8704 14.2984 25.641 14.1829 25.3861C14.0674 25.1312 14.0053 24.8561 14.0003 24.5771C13.9953 24.2981 14.0475 24.0209 14.1538 23.7622C14.2601 23.5035 14.4183 23.2685 14.619 23.0711C14.8196 22.8738 15.0587 22.7183 15.3218 22.6138C15.5849 22.5093 15.8668 22.458 16.1506 22.4629C16.4343 22.4678 16.7141 22.5289 16.9734 22.6424C17.2326 22.756 17.4659 22.9197 17.6594 23.1239L23.5596 28.9225L33.3455 16.6631C33.3629 16.6417 33.3817 16.6213 33.4018 16.6022H33.399Z" fill="#00ADB5" />
      </svg>

      <p class="about-us__list-desc">${item.desc}</p>
    `;
  }
);

createdIterationElement(
  document.getElementsByClassName("company__our-partner"),
  contentCompany,
  "li",
  "company__partner-list",
  (item) => {
    return `<img src="${item.image}" alt="${item.alt}"/>`;
  }
);

createdIterationElement(
  document.getElementsByClassName("testimonial__cards"),
  contentTestimonial,
  "div",
  "testimonial__card",
  (item) => {
    return `
      <img src="${item.image}" alt="sebuah foto profile" class="testimonial__image" />
      <h3 class="testimonial__username">${item.name}</h3>
      <p class="testimonial__job">${item.job}</p>
      <blockquote class="testimonial__quote"> <p>“The mentor is cool, how to convey each material is also detailed and easy to understand.. </p> </blockquote>
    `;
  }
);
