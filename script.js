// var firstName = 'John';
// console.log(firstName);

// var lastName = 'smith';
// var age = 28;


// var fullAge = true;
// console.log(fullAge);

 
// 

//var Mark = 78, height = 1.69 ;
// var john = 92, heightjohn = 1.95;


// var Bmimark =  Mark / (height * height)

// var bmiJohn =  john / (height * height)

// var compare = BmiMark >  bmiJohn;
// console.log(compare);

//   function calculage(birthyear){
//       return 2020 - birthyear;
//   }

// var fun = calculage(1998)
// alert('your aage is ' + fun);
 
  
// function yearsuntilretirement(year, firstName){
// 	var age = calculage(year);
// 	var retirement = 65 - age;

//     if(retirement > 0)
// {
// 	console.log(firstName + ' retires in ' + retirement + ' years.')
// }else{
// 	console.log(firstName + ' is already retired.')
// }

// }

// yearsuntilretirement(1998, 'John')


// var names = ['john', 'Msrk', 'jane'];
// var years = new Array(1998, 200, 1945);

// console.log(names);
// console.log(names.length);


// names[1] = 'Ben';
// console.log(names);

// var john = ['John', 'smith', 2998, 'teacher', false];

// john.push('blue')
// console.log(john);

// john.unshift('Mr. ');
// console.log(john);

// john.pop()
// console.log(john.indexOf(1990));

// var des = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

// console.log(des); 


function tipcalculator(bill){
    var percentage;
    if(bill < 50){
    	percentage = 2; 	
    }else if(bill >= 50 && bill < 200){
    	percentage = 15;
    }else{
    	percentage = 1;
    }
      return percentage * bill;
}

var bills = [134, 45, 266];
var tips = [tipcalculator(bill[0]),
             tipcalculator(bill[1]),
             tipcalculator(bill[2])]; 

      console.log(tips);
           
  