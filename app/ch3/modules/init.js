System.import('./app6.js')
.then( app => {
	app.main();
})
.catch( error => {
	console.log('Terrible error happened', error );
})
