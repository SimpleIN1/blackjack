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


const game=()=>{
    var random_position_card = get_random_position_card();
    swap_position_card(random_position_card);
    var dealer=[]; 
    var user =[];
    var card_arr=get_arr_card();

    // console.log(random_position_card.join(' '));
    // console.log(card_arr);

    // take_card(dealer);

    // take_card(user);
    // take_card(user);
    // console.log("User "+get_points(user))

    // take_card(dealer);
    // console.log("Dealer "+get_points(dealer));

    // if(get_points(dealer)>get_points(user)){
    //     console.log("You lose");
    // }
    // else{
    //     console.log("You win");
    // }
}

// game();

// const game1=()=>{
//     cards = document.getElementById("cards");
//     for(let i=0;i<13;++i){
//         let div = document.createElement("div");
//         div.setAttribute("class", "card_crop");
//         div.setAttribute("id", "card"+i.toString());
//         let img = document.createElement("img");
//         img.setAttribute("id", "card"+i.toString()+"."+i.toString());
//         img.setAttribute("src","iimg/Cards.png");
//         div.appendChild(img);
//         cards.appendChild(div);
    
//         document.getElementById("card"+i.toString()+"."+i.toString()).style.transform = "translate(-"+120*i+"px,-"+168+"px)";
//     }
// }

// game1();

var random_position_card = get_random_position_card();
swap_position_card(random_position_card);

// console.log(random_position_card);

var dealer=[]; 
var user =[];
var card_arr=get_arr_card();

// game();
var count_card=0;

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

        // console.log(CardRank[user[count_card].rank][0]+" "+CardSuit[user[count_card].suit]);
        
        document.getElementById("card"+count_card.toString()+"."+count_card.toString()).style.transform = "translate(-"+120*CardRank[user[count_card].rank][0]+"px,-"+168*CardSuit[user[count_card].suit]+"px)";
        ++count_card;
        // console.log(p);

        if(p>21){
            // document.getElementById("user").innerHTML="Your points: "+get_points(user);
            //document.getElementById("card"+count_card.toString()+"."+count_card.toString()).style.transform = "translate(-"+120*CardRank[user[count_card].rank][0]+"px,-"+168*CardSuit[user[count_card].suit]+"px)";
            alert("You lose");
        }
        // else{
            
        //     // take_card(user);
    
        //     // console.log(user);
        //     // console.log(get_points(user));
    
        //     // let cards = document.getElementById("cards_user");
        //     // let div = document.createElement("div");
        //     // div.setAttribute("class", "card_crop");
        //     // div.setAttribute("id", "card"+count_card.toString());
        //     // let img = document.createElement("img");
        //     // img.setAttribute("id", "card"+count_card.toString()+"."+count_card.toString());
        //     // img.setAttribute("src","iimg/Cards.png");
        //     // div.appendChild(img);
        //     // cards.appendChild(div);
    
        //     // document.getElementById("user").innerHTML="Your points: "+get_points(user);
    
        //     // // console.log(CardRank[user[count_card].rank][0]+" "+CardSuit[user[count_card].suit]);
            
        //     // document.getElementById("card"+count_card.toString()+"."+count_card.toString()).style.transform = "translate(-"+120*CardRank[user[count_card].rank][0]+"px,-"+168*CardSuit[user[count_card].suit]+"px)";
        //     // ++count_card;
        // }
    }

    // console.log(count_card);
}
let previous_count=count_card;
const stand=()=>{
    take_card(dealer);
    let cards = document.getElementById("cards_dealer");
    let div = document.createElement("div");
    div.setAttribute("class", "card_crop");
    div.setAttribute("id", "card"+count_card.toString());
    let img = document.createElement("img");
    img.setAttribute("id", "card"+count_card.toString()+"."+count_card.toString());
    img.setAttribute("src","iimg/Cards.png");
    div.appendChild(img);
    cards.appendChild(div);

    document.getElementById("dealer").innerHTML="Your points: "+get_points(dealer);

    // console.log(CardRank[user[count_card].rank][0]+" "+CardSuit[user[count_card].suit]);
    
    document.getElementById("card"+count_card.toString()+"."+count_card.toString()).style.transform = "translate(-"+120*CardRank[dealer[count_card-previous_count].rank][0]+"px,-"+168*CardSuit[dealer[count_card-previous_count].suit]+"px)";
    ++count_card;
}

// window.onload = ()=> {
//     game();
// }

// take_card(user);
// take_card(user);
// console.log(user);
// console.log(CardRank[user[0].rank][0]);
// console.log(CardSuit[user[0].suit]);
