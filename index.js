const mainItems = document.querySelector(".list__items__main ");

const categories = {
    "Shop" : 'task.svg',
    "Random Thought": 'thought.svg',
    "Gym" : 'gym.svg',
    "Idea" : 'idea.svg'
}

const listOfAchives = [
  {
    id: 0,
    name: "Shopping list",
    created: "April 20, 2021",
    category: "Shop",
    content: "Tomato, milk, bread, oil, salt, flour, butter, meat.",
    date: "",
  },
  {
    id: 1,
    name: "Random thought",
    created: "June 5, 2022",
    category: "Random Thought",
    content:
      "Life is like a box of chocolates; you never know what you're gonna get.",
    date: "",
  },
  {
    id: 2,
    name: "Great idea",
    created: "January 15, 2023",
    category: "Random Thought",
    content:
      "A mobile app that helps people learn new languages through interactive games.",
    date: "",
  },
  {
    id: 3,
    name: "Workout routine",
    created: "March 2, 2023",
    category: "Gym",
    content: "30 minutes of cardio, 20 minutes of strength training.",
    date: "",
  },
  {
    id: 4,
    name: "Journal entry",
    created: "August 10, 2022",
    category: "Random Thought",
    content: "Today, I learned that the key to happiness is gratitude.",
    date: "",
  },
  {
    id: 5,
    name: "Travel plans",
    created: "April 3, 2023",
    category: "Idea",
    content: "Start saving money for a trip to Japan next year from 12.10.2023",
    date: "12.10.2023",
  },
  {
    id: 6,
    name: "Recipe",
    created: "July 12, 2023",
    category: "Idea",
    content:
      "Delicious chocolate chip cookie recipe: butter, sugar, eggs, flour, chocolate chips.",
    date: "",
  },
];

listOfAchives.forEach((key, i) => {
  console.log(key);

  mainItems.innerHTML += `<ul class="taskContainer">
  <li class ="task"><img class="taskImg" src='./assets/img/${categories[key.category]}' alt='${key.category}'/>${key.name}</li>
  <li class ="task">${key.created}</li>
  <li class ="task">${key.category}</li>
  <li class ="task">${key.content.length > 30 ? key.content.slice(0, 30)+'...' : key.content}</li>
  <li class ="task">${key.date}</li>
  <li class="sidebar">
  <img class='sidebar__buttons' src='./assets/img/archive.svg' alt="archive">
  <img class='sidebar__buttons' src= "./assets/img/pencil.svg" alt="pencil">
  <img class='sidebar__buttons' src= "./assets/img/trash.svg" alt="trash">
  </li>
  </ul>`;
});
