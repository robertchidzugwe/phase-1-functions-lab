function distanceFromHqInBlocks(num) {
    num = Number(num);
    if (num<=42){
        let result = 42 - num;
        return result;
    }else if (num>42){
        let result = num - 42;
        return result;
    }
    else { 
        return false;
    }
       
}
function distanceFromHqInFeet(num){
    num = Number(num);
    if(num<=42){
        let result = (42 - num)*264;
        return result;
    }else if (num>42){
        let result = (num - 42)*264;
        return result;
    }
    else {
        return false;
    }

}
function distanceTravelledInFeet(num1,num2) {
    let start = Number(num1);
    let destination = Number(num2);
        let result= (destination-start)*264;
        if (result<0) {
            return ((-1*result));
            
        }else if(result>=0){
            return (result);
        }
        else{
            return false;
        }
    
}  
function calculatesFarePrice(num3, num4){
    let start = num3;
    let destination =num4;
    let result = (destination-start)*264;

    if (result<0) {
        let distance = (-1*result);
        if(distance<=400){
            let farePrice= 0;
            return (farePrice);
        }else if(distance>400 && distance<=2000){
            let farePrice=((distance-400)*0.02);
            return (farePrice);
        }else if(distance>2000 && distance<2500){
            let farePrice = 25;
            return(farePrice);
        }else{
            let farePrice='cannot travel that far';
            return (farePrice);
        }  
        
    }else if(result>=0){
        let distance = result;
        if(distance<=400){
            let farePrice = 0;
            return (farePrice);
        }else if(distance>400 && distance<=2000){
            let farePrice = ((distance-400)*0.02);
            return (farePrice);
        }else if(distance>2000 && distance<2500){
            let farePrice = 25;
            return(farePrice);
        }else{
            let farePrice = 'cannot travel that far';
            return (farePrice);
        } 
        
    }
    else{
        return false;
    }
    
}

let blocks = distanceFromHqInBlocks(43);
console.log( "Distance in blocks is: "+blocks);

let distance = distanceFromHqInFeet(43);
console.log('Distance in feet is: '+distance);

let distanceTravelled1 = distanceTravelledInFeet(42,52);
console.log('Distance Travelled in feet is '+distanceTravelled1);

let distanceTravelled2= distanceTravelledInFeet(42,36);
console.log('Distance Travelled in feet is '+distanceTravelled2);

let farePrice = calculatesFarePrice(42,50);
console.log('The Fare Price is: '+ farePrice);

