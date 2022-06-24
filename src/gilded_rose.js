class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

//I See some the problems that arise here, this is a single monolithic program with a bunch of confusing
//nested if statements. I do think that it makes sense that it is kept all under one class though, but I
// will try to modularize this program into smaller methods that interchange data or run independently. 
// I will attempt to make tests for each method that I create aswell.



class Shop {
  constructor(items=[]){
    this.items = items;
  }

  prelog(i){
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.items[i].quality > 0) {
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }
    } else {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].sellIn < 11) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
          if (this.items[i].sellIn < 6) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      this.prelog(i);
     
      //--------------------------------------------------------------------
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      //---------------------------------------------------------------------
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
       //---------------------------------------------------------------------
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
