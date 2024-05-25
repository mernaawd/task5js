//Task1.1
// function test(x,y){
//     var x;
//     var y;
//     if(arguments.length!==2){
//         throw('please enter two parameters')
//     }else{
//         console.log(x,y);
//     }
// }
// console.log(test(12,13,15));
////////////////////////////////////////
//Task1.2
// var arr=[];
// function getsum(){
//     console.log(arguments);
//      var sum=0;
//      for(i=0;i<arguments.length;i++){
//         if(isFinite(arguments[i]))
//         {
//             x=arr.push(Number(arguments[i]));
//             sum = sum + arr[i];
//         }else{
//             alert('please enter numbers only')
//         }
//      }
//      return sum;
// }
// console.log(getsum(5,5,6,"merna","fady"));

//Another solytion for task 1.2
// function add(){
// console.log(arguments); 
//     var sum=0;
//     for(i=0;i<arguments.length;i++){
//          if(isFinite(arguments[i])){
//                    (Number(arguments[i]));
//                    sum= sum+ arguments[i];
//                }else{
//                    alert('please enter numbers');
//                }
//        }
//         return sum;
// }
// console.log(add(2,5,7,"mohamed",56,"ali"));


//Task1.3
// var arr=[];
// function reverse(){
//     console.log(arguments);
//     for(i=0;i<arguments.length;i++){
//         // if(isFinite(arguments[i])){
//             arr.push(arguments[i])
//             console.log(arr);
//     //     }
//     }
//    var reversed= arr.reverse()
// //    console.log(reversed);
//    return reversed
// }
// console.log(reverse(1,2,3,4,"merna"));



//Task1.4
// var user_date=prompt("Please enter your date as the form (DD-MM-YYYY)");
// console.log();

function date_validation(user_date){
    
    if(user_date.length!==10||user_date[2]!=="-"||user_date[5]!=="-"){
        alert('please enter valid date')
    }else{
        var arr= user_date.split("-");
        console.log(arr);
        var day= arr[0];
        var month= arr[1];
        var year = arr[2];
        
    }
    console.log(day,month,year);
    return  Date= year, month - 1, day;
}
console.log(date_validation("05-10-2022"));
try {
      var user_date = prompt("please enter your date (DD-MM-YYYY)");
      var dateObj = date_validation(user_date);
      console.log(dateObj);
      alert(dateObj);
    } catch (error) {
      console.log(error);
      alert("Wrong Date Format");
    }