// things that we need to know before reactjs
/*

1 . variable : var , let , const
2 . if else 
3 . array
4 . length
5 . push pop
6 . shift unshift
7 . slice 
8 . splice
9 . split
10 . for loop
11 . for of
12 . for in
13 . function 
14 . spread
15 . arrow function 
16 . object 
17 . template string
18 . arrow function 
19 . more spread operator
20 . map
21 . 

*/

const mobiles = [
    {name : "nokia",price : 2000, isCamera : true},
    {name : "Samasunge",price : 6000, isCamera : false},
    {name : "iPun",price : 12000, isCamera : false},
    {name : "Pipo",price : 1000, isCamera : true}
]

const result = mobiles.map(mobiles=>mobiles.price)

console.log(result);
