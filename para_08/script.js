let languages = ['py','js','c++']
console.log(languages);
console.log(languages[1]);
console.log(languages.length);

for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]) 
}


function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        
    }
    return sum
}
let numbers = [10, 15, 60, 77]
console.log(getSum(numbers));

let name = ['h'];
name.push('ivan')
name.push('ivan2')
name.pop()
name.unshift('ivan3', 'ivan4')
name.shift()
console.log(name.slice(0, 1))

console.log(name);

let color = ['red','green','blue', 'yellow', 'brown','cyan', 'white']
// color.slice(0, 1, 'pink')
let deleted = color.slice(4, 2)
color.splice(0,0,'pink')
console.log(color);

function registerNames(name) {
    if (name.trim().length === ''){
        alert('введіть імя')
    }
    let dublicationName = false
    for (let i = 0; i < eventNames.length; i++) {
        if (eventNames[i] === name) {
            dublicationName = true;
        }
    }
    if (dublicationName){
        alert('учасник зараєстрований')
    } else{
        eventNames.push(name)
        alert()
    }
}

function removeNames(name) {
    let index = -1;
    for (let i = 0; i < eventNames.length; i++) {
        if(eventNames[i] === name){
            index = 1
            break
        }
    }
    if (index === -1){
        alert('такого учасника нема')
    } else {
        eventNames.slice(index, 1)
        alert('учасник видалений')
    }
}

function printCount() {
    alert(`всього учасників ${eventNames.length}`)
}

let eventNames = ['ivan','olha','maria','stepan','oleh']

registerNames('')
removeNames('olha')
printCount()


for (let i = 0; i < array.length; i++) {
    console.log(`${eventNames[i]}`);    
}

for (const name of eventNames) {
    console.log(`${name}`);
}

eventNames.forEach(function(name,index) {
    console.log(index);
    console.log(name);
})