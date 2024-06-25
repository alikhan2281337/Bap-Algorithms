const a = [
    [3,2,1],
    [5,4,6],
    [8,7,9],
]
for (let i = 0; i < a.length; i++){
    a[i].sort((x, y) => x - y );
}
a.sort((row1, row2) => row1[0] - row2[0])
console.log(a)