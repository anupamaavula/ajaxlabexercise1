
// Exercise 2
// Write a function, testNum, that takes a number as an argument and returns a Promise that tests if the value is less than or greater than 50.




function compareToTen(num){
	p=new Promise((resolve,reject)=>{
		if(num>=50){
			resolve(num+" is greater than/equal to 50,Sucess!")
		}else {
			reject (num + " is less than 50,Fail!")
		}
		
	})
return p
}
 compareToTen(50)
 .then(result => console.log(result))
 .catch(error => console.log(error))

 compareToTen(5)
 .then(result => console.log(result))
 .catch(error => console.log(error))