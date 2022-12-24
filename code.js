//level1

let a = 4
let b = 3
a>b ?console.log("a is greater than b")
:console.log("a is less than b")

if (a>b){
    console.log("a is greater than b")
}
else
{console.log("a is less than b")
}


let number = prompt("enter a number", "type an integer here")
let remainder = number%2
if (remainder == 0){
    console.log(`${number} is an even number`)
}
else{
    console.log(`${number} is an odd number`)
}
//level2
let grade= prompt("KNOW YOUR GRADE","type your score")
 if (grade>=80 && grade<= 100)
{
   console.log('you got an A')
}
else if (grade>=70 && grade<= 89)
    {console.log('you have a B')
    }
else if (grade>=60 && grade<= 69)
    {console.log('you have a C')
    }
else if (grade>=50 && grade<= 59)
    {console.log('you have a D')
}
else if (grade>=0 && grade<= 49)
    {console.log('F!')
}
else{
        console.log('this is invalid')
}

//level3
let month= prompt("Enter the month","type a month")
switch (month)
{
    case 'january':
        console.log('January has 31 days')
        break
    case 'febuary':
        console.log('Febuary has 28 days')
        break
    case 'march':
        console.log('march has 31 days')
        break
    case 'april':
        console.log('april has 30 days')
        break
    case 'may':
        console.log('may has 31 days')
        break
    case 'june':
        console.log('June has 30 days')
        break
    case 'july':
        console.log('July has 31 days')
        break
    case 'august':
        console.log('August has 31 days')
        break
    case 'september':
        console.log('September has 30 days')
        break
    case 'october':
        console.log('October has 31 days')
        break
    case 'november':
        console.log('November has 30 days')
        break
    case 'december':
        console.log('December has 31 days')
        break
    default:
    console.log('you did not input a valid month')
}