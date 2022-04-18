let CardRank = {
    "RANK_ACE":[0,11],
    "RANK_2":[1,2],
    "RANK_3":[2,3],
    "RANK_4":[3,4],
    "RANK_5":[4,5],
    "RANK_6":[5,6],
    "RANK_7":[6,7],
    "RANK_8":[7,8],
    "RANK_9":[8,9],
    "RANK_10":[9,10],
    "RANK_JACK":[10,10],
    "RANK_QUEEN":[11,10],
    "RANK_KING":[12,10]
    
}

let CardSuit = {
    "SUIT_CLUB":0,
    "SUIT_HEART":1,
    "SUIT_SPADE":2,
    "SUIT_DIAMOND":3
}

class Card{
    constructor(suit, rank){
        this.suit = suit;
        this.rank = rank;
    }
}

const get_random_position_card =()=>{
    return [...Array(52).keys()];
}

const swap_position_card =(random_position_card)=>{
    for(let i=0;i<random_position_card.length;++i){
        let r = Math.floor(Math.random()*51);
        [random_position_card[i],random_position_card[r]]=[random_position_card[r],random_position_card[i]];
    }  
}

const get_arr_card =()=>{
    let card_arr = [];

    for(let suit in CardSuit){
        for(let rank in CardRank){
            card_arr.push(new Card(suit,rank));
        }
    }

    return card_arr;
}

const get_points=(player_arr)=>{
    let points = 0;
    player_arr.forEach(element => {
        points+=CardRank[element.rank][1];
    });
    return points;
}

const take_card=(player_arr)=>{
    player_arr.push(card_arr[random_position_card.shift()]);
}


var random_position_card = get_random_position_card();
swap_position_card(random_position_card);



var dealer=[]; 
var user =[];
var card_arr=get_arr_card();


var count_card=0;
var count_user = 0;
var count_dealer = 0;

const hit=()=>{
    
    if(get_points(user)<=21){
        take_card(user);
        let p = get_points(user);
        
        let cards = document.getElementById("cards_user");
        let div = document.createElement("div");
        div.setAttribute("class", "card_crop");
        div.setAttribute("id", "card"+count_card.toString());
        let img = document.createElement("img");
        img.setAttribute("id", "card"+count_card.toString()+"."+count_card.toString());
        img.setAttribute("src","iimg/Cards.png");
        div.appendChild(img);
        cards.appendChild(div);

        document.getElementById("user").innerHTML="Your points: "+get_points(user);
        
        document.getElementById("card"+count_card.toString()+"."+count_card.toString()).style.transform = "translate(-"+120*CardRank[user[count_user].rank][0]+"px,-"+168*CardSuit[user[count_user].suit]+"px)";
        ++count_card;
        ++count_user;

        if(p>21){
            alert("You lose");
            stand(true);
        }
    }
}

const stand=(f)=>{
    do{
        take_card(dealer);
        if(get_points(dealer)<=21){

            let cards = document.getElementById("cards_dealer");
            let div = document.createElement("div");
            div.setAttribute("class", "card_crop");
            div.setAttribute("id", "card"+count_card.toString());
            let img = document.createElement("img");
            img.setAttribute("id", "card"+count_card.toString()+"."+count_card.toString());
            img.setAttribute("src","iimg/Cards.png");
            div.appendChild(img);
            cards.appendChild(div);

            document.getElementById("dealer").innerHTML="Points of dealer: "+get_points(dealer);
            document.getElementById("card"+count_card.toString()+"."+count_card.toString()).style.transform = "translate(-"+120*CardRank[dealer[count_dealer].rank][0]+"px,-"+168*CardSuit[dealer[count_dealer].suit]+"px)";
            ++count_card;
            ++count_dealer;
        }
        else{
            
            break;
        }

    }
    while(f && get_points(dealer)<21);

	if(f){
	    if(get_points(dealer) > get_points(user)){
	alert("Dealer win");
	document.getElementById("start").disabled="disabled";
        document.getElementById("hit").disabled="disabled";
        document.getElementById("stand").disabled="disabled";
    }
    else if(get_points(dealer) < get_points(user)){
	alert("Dealer win");
        document.getElementById("start").disabled="disabled";
        document.getElementById("hit").disabled="disabled";
        document.getElementById("stand").disabled="disabled";
    }
    else if(/*get_points(dealer)>21 &&*/ get_points(user)<=21){
        alert("You win");
        document.getElementById("start").disabled="disabled";
        document.getElementById("hit").disabled="disabled";
        document.getElementById("stand").disabled="disabled";
    }
    else if(f || get_points(dealer)==21){
        alert("Dealer win");
        document.getElementById("start").disabled="disabled";
        document.getElementById("hit").disabled="disabled";
        document.getElementById("stand").disabled="disabled";
    }
	}
}


const start=()=>{
    document.getElementById("hit").disabled="";
    document.getElementById("stand").disabled="";
    document.getElementById("start").disabled="disabled";
    document.getElementById("reload").disabled="";
    stand(false);
    stand(false);
    hit();
    hit();
}

const reload=()=>{
    document.getElementById("hit").disabled="disabled";
    document.getElementById("stand").disabled="disabled";
    window.location.reload();
}