import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { StockService } from '../stock.service'

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss']
})
export class StockEditComponent implements OnInit,OnDestroy {
  stockId:string="";
  stock:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getStockSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private stockServ:StockService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.stockServ.stocks.push(this.stock)
    this.location.back();
  }
  ngOnInit() {
    this.getStockSubscribe = this.route.params.subscribe(params=>{
      this.getStock(params['sid']).then(stock=>{
      console.log(stock)
      this.stockId = stock.id;
      this.stock = stock
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getStockSubscribe.unsubscribe();
  }

  getStock(id: any): Promise<any> {
    console.log("============"+id);
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let stock = {name:""}
        this.isNew = true;
        resolve(stock)
      }
      let stock = this.stockServ.stocks.find(item=>item.index == id)
      if(stock){
        this.isNew = false;
        resolve(stock)
      }else{
        reject("stock not found")
      }
    })
    return p
}

}
