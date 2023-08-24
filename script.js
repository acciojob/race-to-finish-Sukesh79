//window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let a = new Promise((resolve) => {
	setTimeout(() => {
		resolve(1)
	} ,2000)
})
let b = new Promise((resolve) => {
	setTimeout(() => {
		resolve(2)
	} , 3000)
})
let c = new Promise((resolve) => {
	setTimeout(() => {
		resolve(3)
	} , 4000)
})
let d = new Promise((resolve) => {
	setTimeout(() => {
		resolve(4)
	} , 5000)
})
let e = new Promise((resolve) => {
	setTimeout(() => {
		resolve(5)
	} , 1000)
})

let x = Promise.any([a,b,c,d ,e]);
window.promises =[a,b,c,d ,e];
x.then((data) => {
	const elm = document.getElementById("output");
	elm.innerText = data;
})