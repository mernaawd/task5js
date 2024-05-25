var table= document.getElementsByTagName("table")[0];
var tbody= document.getElementsByTagName("tbody")[0];


do{
    var num_users= prompt("please enter the no.of persons");
    console.log(num_users);
    var arr_name=[];
    var arr_age=[];

          for(i=0;i<Number(num_users);i++)
        {
            do{
                var Name= prompt("Please enter user" +(i+1)+ "name");
                console.log(Name);
                
            }
            while(isFinite(Name)||Name.length>10 || Name.length<3);
                arr_name.push(Name);
                console.log(arr_name);
            do{
                var age= prompt("Please enter user" +(i+1)+ "age");
                console.log(age);
                var x= parseInt(age);
            }while(isNaN(x)||x<10 || x>60);
            arr_age.push(age);
            console.log(arr_age);
        }
        for(i=0;i<Number(num_users);i++){
    
          var trr= document.createElement("tr");
          console.log(trr);
          console.log(arr_age[i]);
          console.log(arr_name[i]);
          // trr.innerHTML+='<td>''</td><td>hala</td>';
          // trr.innerText='<td>hala</td><td>hala</td>';
          trr.innerHTML+="<td>"+arr_name[i]+"</td><td>"+arr_age[i]+"</td>";
          console.log(trr);
          tbody.append(trr);
        }

}
while(isNaN(num_users));






