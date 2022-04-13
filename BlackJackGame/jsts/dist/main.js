var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["SUIT_CLUB"] = 0] = "SUIT_CLUB";
    CardSuit[CardSuit["SUIT_DIAMOND"] = 1] = "SUIT_DIAMOND";
    CardSuit[CardSuit["SUIT_HEART"] = 2] = "SUIT_HEART";
    CardSuit[CardSuit["SUIT_SPADE"] = 3] = "SUIT_SPADE";
    CardSuit[CardSuit["MAX_SUITS"] = 4] = "MAX_SUITS";
})(CardSuit || (CardSuit = {}));
var CardRank;
(function (CardRank) {
    CardRank[CardRank["RANK_2"] = 0] = "RANK_2";
    CardRank[CardRank["RANK_3"] = 1] = "RANK_3";
    CardRank[CardRank["RANK_4"] = 2] = "RANK_4";
    CardRank[CardRank["RANK_5"] = 3] = "RANK_5";
    CardRank[CardRank["RANK_6"] = 4] = "RANK_6";
    CardRank[CardRank["RANK_7"] = 5] = "RANK_7";
    CardRank[CardRank["RANK_8"] = 6] = "RANK_8";
    CardRank[CardRank["RANK_9"] = 7] = "RANK_9";
    CardRank[CardRank["RANK_10"] = 8] = "RANK_10";
    CardRank[CardRank["RANK_JACK"] = 9] = "RANK_JACK";
    CardRank[CardRank["RANK_QUEEN"] = 10] = "RANK_QUEEN";
    CardRank[CardRank["RANK_KING"] = 11] = "RANK_KING";
    CardRank[CardRank["RANK_ACE"] = 12] = "RANK_ACE";
    CardRank[CardRank["MAX_RANKS"] = 13] = "MAX_RANKS";
})(CardRank || (CardRank = {}));
var main = function (key) {
    if (CardRank.RANK_2 == CardRank.RANK_2)
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
};
// main(CardRank.RANK_2);
for (var item = 0; item < CardRank.MAX_RANKS; ++item) {
    main(CardRank[item]);
    // console.log(CardRank[item]);
}
