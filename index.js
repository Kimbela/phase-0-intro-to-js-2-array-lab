const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
function appendCat(Tom) {
    const newCats = [...cats, Tom];
    return newCats;
}
function prependCat(Tom){
    const newCats = [Tom, ...cats];
    return newCats;
}
function removeLastCat(name) {
    const newCats = cats.slice(0,cats.length-1);
    return newCats;
}
function removeFirstCat(name) {
    const newCats = cats.slice(1);
    return newCats;
   }


