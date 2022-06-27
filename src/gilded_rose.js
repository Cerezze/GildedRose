class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

/* I cleaned up the logic and devided the code into methods that I thought would make sense. The following is my refactor
Although its not shorter, I believe that it is easier to read, aswell as easier to scale given the modularization. I tried
my best to make conjured mana cake = 0, but I was short on time and could not test it any further. THank you so much for 
this opportunity. I look forward to meeting with you if possible.*/

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  decrementDay(i){
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }
  }

  specialCasesForIncrementHandler(i){
    if(this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"){
      if(this.items[i].sellIn < 11){
        if(this.items[i].quality < 50){
          this.items[i].quality = this.items[i].quality + 1;
        }
      }
      if(this.items[i].sellIn < 6){
        if(this.items[i].quality < 50){
          this.items[i].quality = this.items[i].quality + 1;
        }
      }
      if(this.items[i].sellIn <= 0){
        if(this.items[i].quality <= 50){
          this.items[i].quality = 0;
        }
      }
    }
  }

  specialCasesForDecrementHandler(i){
    if(this.items[i].name == "Conjured Mana Cake"){
      this.items[i].quality = this.items[i].quality - 2;
    }    
  }

  basicDecrementHandler(i){
    if (this.items[i].quality > 0) {
      this.items[i].quality = this.items[i].quality - 1;
      if (this.items[i].sellIn < 0) {
        this.items[i].quality = this.items[i].quality - 1;
        this.specialCasesForDecrementHandler(i);
      }  
    }
  }

  basicIncrementHandler(i){
    if(this.items[i].quality < 50)
      this.items[i].quality = this.items[i].quality + 1;
    this.specialCasesForIncrementHandler(i);
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.decrementDay(i);
      if (this.items[i].name === '+5 Dexterity Vest' || this.items[i].name === "Elixir of the Mongoose" || this.items[i].name === "Conjured Mana Cake"){
        this.basicDecrementHandler(i);
      }else{
        this.basicIncrementHandler(i);
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
