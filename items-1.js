const items = {
    Milk : 8,
    Papers:17,
    Egg:null,
    Cheese:null,
    Tissues:null,
    Biscuits:null,
    Banana:null,
    water:null,
    Bakery:null,
    Bread:null,
    Meat :null,
    Seafood:null,
    Pasta :null,
    Rice:null,
    Oil:null,
    Sauces:null,
    Salad:null,
    Cereals:null,
    Soups :null,
    Canned_Goods:null,
    Frozen_Foods:null,
    Dairy:null}


function newItems(){
    for(let i in items) {
      if(items[i] == null) {

           if(i.includes('s')) {
               items[i]=i.length*2+3;
             }else {
            items[i]=i.length*2
             }  }

  console.log(i+ ' '+items[i])
   }
}
newItems()
