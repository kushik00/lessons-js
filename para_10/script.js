// let student = {
//     name: 'John Doe',
//     role: 'student'
// }
// console.log(student.name);
// console.log(document.body);

// let heading = document.getElementsByTagName('h1')
// let headingId = document.getElementById('profile_name')
// let skills = document.getElementsByClassName('skill')
// let skills2 = document.querySelector('.skills')
// let skills = document.querySelectorAll('.skills')

// for (let skill of skills) {
//     console.log(skill);
// }

let student = {
    name: 'Shcherbakova Lada',
    role: 'ліцеїст 11 класу',
    city: 'Київ',
    portfolio: 'https//github.com'
}

let nameElement = document.querySelector('#profile_name')
nameElement.textContent = 'Shcherbakova Lada'

let nameElement = document.querySelector('.#profile_name')
let roleElement = document.querySelector('.profile_role')
let cityElement = document.querySelector('.#profile_city')
let portfolioElement = document.querySelector('#profile_link')

nameElement.textContent = student.name
roleElement.textContent = student.role
cityElement.textContent = student.city

roleElement.innerHTML = '<strong>' + student.role + '</strong>'
portfolioElement.setAttribute('href',student.portfolio)
let skillsElements = document.querySelectorAll('.skills')
skillsElements[0] = 'html';
skillsElements[1] = 'css';
skillsElements[2] = 'js';
for (let skill of skillsElements){
    console.log(skill.textContent);
    
}