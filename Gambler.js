class Gambler{
    play(){
        var Stake=100;
        var day=0;
        var count = 0;
        var flag=true;
        while(flag){
            if(count==50){
                flag=false;
                return;
            }       
            var bet=Math.floor(Math.random() * 2);
            count=count+1;
            console.log(count)
            if(bet==1){
                Stake=Stake+1;
            }else{
                Stake=Stake-1;
            }
        }
        console.log(Stake)
    }  
}
var ref = new Gambler();
ref.play();