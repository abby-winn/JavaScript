let name1 = prompt("Enter your last name");
let name2 = prompt("Enter another last name");
let name3 = prompt("Enter another last name");
const names = [name1, name2, name3];
const calcLongestName = (names) => {
    let highest = 0;
    for (let i = 0; i<names.length; i++) {
        before = names[i].length;
        if (before > highest) {
            highest = names[i];
        }
    }
    console.log(highest);
}
calcLongestName(names);