import { formatDate } from "./formatDate.js";
//main store of tasks, similarly with redux store
export let listOfAchives = [
    {
      id: 0,
      archived: true,
      name: "Shopping list",
      created: "April 20, 2021",
      category: "Shop",
      content: "Tomato, milk, bread, oil, salt, flour, butter, meat.",
      date: "",
    },
    {
      id: 1,
      archived: false,
      name: "Random thought",
      created: "June 5, 2022",
      category: "Random Thought",
      content:
        "Life is like a box of chocolates; you never know what you're gonna get.",
      date: "",
    },
    {
      id: 2,
      archived: true,
      name: "Great idea",
      created: "January 15, 2023",
      category: "Random Thought",
      content:
        "A mobile app that helps people learn new languages through interactive games.",
      date: "",
    },
    {
      id: 3,
      archived: true,
      name: "Workout routine",
      created: "March 2, 2023",
      category: "Gym",
      content: "30 minutes of cardio, 20 minutes of strength training.",
      date: "",
    },
    {
      id: 4,
      archived: false,
      name: "Journal entry",
      created: "August 10, 2022",
      category: "Random Thought",
      content: "Today, I learned that the key to happiness is gratitude.",
      date: "",
    },
    {
      id: 5,
      archived: false,
      name: "Travel plans",
      created: "April 3, 2023",
      category: "Idea",
      content: "Start saving money for a trip to Japan next year from 12/10/2023",
      date: "12/10/2023",
    },
    {
      id: 6,
      archived: false,
      name: "Recipe",
      created: "July 12, 2023",
      category: "Idea",
      content:
        "Delicious chocolate chip cookie recipe: butter, sugar, eggs, flour, chocolate chips.",
      date: "",
    },
  ];
export let listOfArchivedTasks = []
//reducers
export const filterDeletedList = (id) => {
   listOfAchives =  listOfAchives.filter(key => key.id !== id)
}
export const filterArchiveList = (id) => {
    listOfAchives.forEach(key => {
        if(key.id === id) {
            key.archived = !key.archived
        }
    })
 }
 export const addTask = (category, name, content) => {
  const regex = /\d{1,2}\/\d{1,2}\/\d{2,4}/g;
  const date = content.match(regex)
    const currDate = formatDate()
    listOfAchives.push({
        id: listOfAchives.length ? listOfAchives[listOfAchives.length - 1].id + 1 : 0,
        archived: false,
        category: category,
        name: name,
        created: currDate,
        content: content,
        date: date ? date.join(', ') : '' 
    })    
    
}

export const onClicKDeleteAll = () => {
  
  if(confirm('Are you sure you want to delete all tasks?')) {
    listOfAchives = []
  }
}

export const onEditContent = (content, id, name) => {
  const regex = /\d{1,2}\/\d{1,2}\/\d{2,4}/g;
  const date = content.match(regex)
  listOfAchives.forEach(key => {
    if(key.id === id) {
      key.date = date ? date.join(', ') : '' 
        key.content = content
        key.name = name
    }
})
}