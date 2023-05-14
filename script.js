const reviews = [
    {
        "name": "Harsh Patel",
        "image": "./img/harsh.webp",
        "role": "Software Developer",
        "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        "name": "Sara Taylor",
        "image": "./img/sara.jpeg",
        "role": "UI-UX Designer",
        "comments": "Ad soluta laudantium nulla magni quaerat autem."
    },
    {
        "name": "Alice Brook",
        "image": "./img/alice.jpg",
        "role": "Technical Lead",
        "comments": "Aliquid minima aperiam neque distinctio eligendi repellendus ipsam nesciunt."
    },
    {
        "name": "Bill Anderson",
        "image": "./img/bill.jpeg",
        "role": "Manager",
        "comments": "Obcaecati officia praesentium provident rerum quisquam."
    }
]

person_name = document.querySelector(".name")
person_role = document.querySelector(".role")
person_comments = document.querySelector(".comments")
person_image = document.querySelector(".image")

let current = 0
const mod = reviews.length

fetch = (person) => {
    person_name.textContent = person.name
    person_role.textContent = person.role
    person_comments.textContent = person.comments
    person_image.src = person.image
}

window.addEventListener("DOMContentLoaded", () => {
    fetch(reviews[current])
})

/*
-4 1
-3 2
-2 3
-1 4
0 1
1 2
2 3
3 4
4 1

*/

document.querySelector(".previous").addEventListener("click", () => {
    current = (current - 1) % mod
    fetch(reviews[current])
})

document.querySelector(".next").addEventListener("click", () => {
    current = (current + 1) % mod
    fetch(reviews[current])
})