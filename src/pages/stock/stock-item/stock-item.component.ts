import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {StockService} from "../stock.service";

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {
  @Input() stock:any
  @Output() stockClick = new EventEmitter<any>();
  constructor(private stockServ:StockService) { 
  }
  onUserClick(){
    this.stockClick.emit(this.stock)
  }
  check(){
    this.stock.check = true;
  }
  isChecked(){
    if(this.stock.check&&this.stock.check==true){
      return true
    }else{
      return false
    }
  }
  delete(){
    let index = this.stock.index
    this.stockServ.stocks.forEach((item,id,array)=>{
      if(item.index == index){
        array.splice(id,1)
      }
    })
  }
  ngOnInit() {
  }
}
