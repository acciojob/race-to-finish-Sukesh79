window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let promise1 = new Promise((resolve, reject) => {
	queueMicrotask(resolve("Sukesh is a good boy"));
})
let promise2 = new Promise((resolve, reject) => {
	reject("Sukesh is a bad boy");
})
let promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Sukesh, You are going to next ruler of the world");
	}, 1000);
})
let promise4 = new Promise((resolve, reject) => {
	resolve("Sukesh, You are going to next ruler of the world");
})
let promise5 = new Promise((resolve, reject) => {
	resolve("Sukesh, You are going to next ruler of the world");
})
let output = document.getElementById("output");

Promise.any([promise1, promise2, promise3, promise4, promise5]).then((value) => {
	output.innerText = value;
})