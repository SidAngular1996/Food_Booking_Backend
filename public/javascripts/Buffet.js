var Buffet = function (buffetName, items, pricePerPlate){
    // this.buffetId = buffetId;
    this.buffetName = buffetName;
    this.items = items;
    this.pricePerPlate = pricePerPlate;
}

Buffet.toObject = function(result){
    return new Buffet(result.buffetName,result.items,result.pricePerPlate);
}

module.exports = Buffet;