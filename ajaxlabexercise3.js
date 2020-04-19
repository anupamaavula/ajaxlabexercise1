// Exercise 3
// Write two functions to chain together. The first function, makeAllCaps, will take in an array of words 
//and capitalize them. A second function, sortWords, will sort the words in alphabetical order. 

// If the array contains anything besides a single word (string), an error should be thrown.

var arrayOfWords=['cat','bat','mat']
var ArrayOfNotStrings=['rat',99]
 function makeAllCaps(array){
 	return new Promise((resolve,reject)=>{
 		let capsArray=array.map(word =>{
 			if(typeof word ==='string'){
 				return word.toUpperCase()

 			}else{
 				reject('Not a string')
 				
 			}
 		})
 		resolve(capsArray)
 	})
 }

 function sortWords(array){
 	return new Promise((resolve,reject)=>{
 		if(array){
 			array.forEach ((el) => {
 				if(typeof el !== 'string'){
 					reject('Error:Not a string!')
 				}

 			})

 			resolve(array.sort());
 		}
 		else{
 			reject('Error: wrong with sorting words.')
 		}
 	
 })
 }

 makeAllCaps(arrayOfWords)
 .then(sortWords)
 .then((result)=>console.log(result))
 .catch(error=>console.log(error))

 makeAllCaps(ArrayOfNotStrings)
 .then (sortWords)
 .then((result)=>console.log(result))
 .catch(error=>console.log(error))