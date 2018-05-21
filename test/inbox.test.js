const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor function and is used to create instances
const web3  = new Web3(ganache.provider()); //instance of the web3 

// class Car  {
// 	park() {
// 		// code
// 		return 'stopp'
// 	}

// 	drive(){
// 		return 'audi'
// 	}

// 	// methods
// }

// let car; //global scope for variable

// beforeEach(()=>{
// 	 car   = new Car();
// });

// describe('Car Class test',() =>{ //grouping together the tests
// 	it('test for park function ',()=>{
// 		//const car = new Car() //duplicated below and can be eliminated using beforeEach helper
// 		assert.equal(car.park(),'stopp');
// 	});

// 	it('can drive' , ()=>{
// 		//const car = new Car();
// 		assert.equal(car.drive(),'audi')
// 	});
// });
  
let accounts;
//get a list of accounts
	//all funcn in web3 is asynchronous in nature means it will return a promise
	// web3.eth.getAccounts().then(fetchedAccounts =>{
	// 		console.log(fetchedAccounts)
	// }); 
	// a promise above replacing with the await funcn

let fetchedAccounts;
let inbox
beforeEach(async () =>{
	
	web3.eth.getAccounts().then(fetchedAccounts =>{
			fetchedAccounts = fetchedAccounts
			console.log(fetchedAccounts)
	});
	//use one of those accounts to deploy
	// new web3.eth.Contract(JSON.parse(interface))
	// .deploy({data : bytecode, arguments : ['helllo there']})
	// .send({from : fetchedAccounts[0], gas:'1000000'})
});

describe('Inbox',() => {
	it('deploys a contract' , () => {
	
		console.log("here is the accont list")
	});
})