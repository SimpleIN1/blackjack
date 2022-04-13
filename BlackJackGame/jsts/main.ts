enum CardSuit{
    SUIT_CLUB,
    SUIT_DIAMOND,
    SUIT_HEART,
    SUIT_SPADE,
    MAX_SUITS
}

enum CardRank{
    RANK_2,
    RANK_3,
    RANK_4,
    RANK_5,
    RANK_6,
    RANK_7,
    RANK_8,
    RANK_9,
    RANK_10,
    RANK_JACK,
    RANK_QUEEN,
    RANK_KING,
    RANK_ACE,
    MAX_RANKS
}

const main=(key)=>{
    if(CardRank.RANK_2 ==CardRank.RANK_2)
        console.log(key);   
    // switch (key) {
    //     case CardRank.RANK_2:
    //         console.log(1);
    //         break;
    //     case CardRank.RANK_3:
    //         console.log(3);
    //         break;
    //     case CardRank.RANK_4:
    //         console.log(4);
    //         break;
    //     case CardRank.RANK_5:
    //         console.log(5);
    //         break;
    //     case CardRank.RANK_6:
    //         console.log(6);
    //         break;
    //     case CardRank.RANK_7:
    //         console.log(7);
    //         break;
    //     default:
    //         console.log("Error")
    //         break;
    // }
}
// main(CardRank.RANK_2);

for(let item=0;item<CardRank.MAX_RANKS;++item){
    main(CardRank[item]);
    // console.log(CardRank[item]);
}