import { Injectable } from "@angular/core";

@Injectable()
export class StockService{
    isLogined:boolean = false;
    stocks: Array < any > = [
    { "index":"002714",
      "stockname":"牧原股份",
      "price":27.82,
      "raise":"0.07%",
      "zongshou":57269},
     {"index":"002456",
      "stockname":"欧菲光",
      "price":18.93,
      "raise":"-0.05%",
      "zongshou":312100},
      {"index":"601186",
      "stockname":"中国铁建",
      "price":12.94,
      "raise":"-1.15%",
      "zongshou":536141},
      {"index":"600519",
      "stockname":"贵州茅台",
      "price":473.87,
      "raise":"0.47%",
      "zongshou":19595},
      {"index":"000680",
      "stockname":"三推股份",
      "price":5.83,
      "raise":"-0.68%",
      "zongshou":69857}
  ];

    constructor(){

    }

    getStocks(){
        return this.stocks;
    }

}

