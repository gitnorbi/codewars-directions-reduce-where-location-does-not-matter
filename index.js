function dirReduc(arr){
    let result=[];

    let howManyNorthDirections=0;
    let howManySouthDirections=0;
    let howManyEastDirections=0;
    let howManyWestDirections=0;

    let areThereNorthOrSouth;
    let areThereEastOrWest;

    arr.forEach((value)=>{
        howManyNorthDirections+=value=="NORTH"?1:0;
        howManySouthDirections+=value=="SOUTH"?1:0;
        howManyEastDirections+=value=="EAST"?1:0;
        howManyWestDirections+=value=="WEST"?1:0;
});

    areThereNorthOrSouth=howManySouthDirections-howManyNorthDirections;
    areThereEastOrWest=howManyWestDirections-howManyEastDirections;

    if(areThereNorthOrSouth<0){
        for(let i=0;i>areThereNorthOrSouth;i--){
        result.push("NORTH");
        }
    }else if(areThereNorthOrSouth>0){
        for(let i=0;i<areThereNorthOrSouth;i++){
            result.push("SOUTH");
            }
    }

    if(areThereEastOrWest<0){
        for(let i=0;i>areThereEastOrWest;i--){
        result.push("EAST");
        }
    }else if(areThereEastOrWest>0){
        for(let i=0;i<areThereEastOrWest;i++){
            result.push("WEST");
            }
    }
    document.querySelector("#result").textContent=`The result is:${result}
    for ${arr}`;
    return result;
    
  }
  dirReduc(["EAST","EAST","NORTH","WEST","WEST","SOUTH","SOUTH","NORTH","NORTH","EAST"]);

