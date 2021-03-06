//Promises.js
const posts = [
	{title: 'Post One', body: 'This is post one'},
	{title: 'Post Two', body: 'This is post two'},
	{title: 'Post Three', body: 'This is post three'},
	{title: 'Post Four', body: 'This is post four'}
];

function getPosts(){
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			if (!error){
				resolve();
			}else{
				reject('Error: Something went wrong');
			}
		}, 2000);
	});
}

//createPost({title: "Post Five", body: "This is post five"})
//	.then(getPosts)
//	.catch(err => console.log(err));


//Async / Await
async function init(){
	await createPost({title: "Post Five", body: "This is post five"});

	getPosts(); //Waiting for createPos() to complete before calling getPosts();
}
init();


//Async / Await / Fetch





//Promise.all
//const promise1 = Promise.resolve('Hellow World');
//const promise2 = 10;
//const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
//const promise4 = fetch('');

//Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));
