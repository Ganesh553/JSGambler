const readLine = require('readLine-sync')
class Gambler{
    NumberOfdays(){
        var day = new Map()
        for(var i=1;i<=20;i++){
            var value=this.play();
            day[i] = value;
        }   
        console.log(day)
        var y = Object.keys(day).reduce(function(a, b){return day[a] > day[b] ? a:b});
        console.log("Lackist day is :", y)

        let key = Object.keys(day).reduce((key, v) => day[v] < day[key] ? v : key);
        console.log("UnLackist day is :",key)
    }
    play(){
        var Stake=100;
        var day=0;
        var count=0
        var flag=true;
        while(flag){
            if(count==50){
                flag=false;
            }       
            var bet=Math.floor(Math.random() * 2);
            count=count+1;    
            if(bet==1){
                Stake=Stake+1;
            }else{
                Stake=Stake-1;
            }
        }
        return Stake;
    }     
}
var ref = new Gambler();
while (flage=true)
{
    var select = readLine.question("If you want to continue(y/n): ");
    if(select=='y')
        ref.NumberOfdays()
    else if(select=='n'){
        flage=false;
        return;
    }
    else
    {
        console.log("You select Wrong please select proper: ")
        flage=false;
    }
}
