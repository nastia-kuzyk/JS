function StringToArray (str){
    if (str){
    const split = str.split(' ');
    return split;
    }
    return [''];
}
console.log(StringToArray ('Ревуть воли як ясла повні'))