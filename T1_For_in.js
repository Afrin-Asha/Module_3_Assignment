function printObjectProperties (obj){
    
    if(isEmpty(myObj)){
        for (let props in obj){
         console.log(props + ": " +obj[props]);
        }
    }else{
        console.log("Object is empty");
    }

}
var  billgates ={
    shirt:"true",
    color:"blue",
    size:"large",
    sweater:"true"
}
printObjectProperties(billgates);