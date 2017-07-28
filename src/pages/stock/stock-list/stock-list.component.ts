import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {StockService} from "../stock.service";
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectStock:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  stocks:Array<any>=[];
  deleteLast() {
    this.stocks.pop();
  }
  search(){
    this.searchResult = this.stocks.filter(item=>{
      let result = String(item[this.searchType]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      }
    })
  }
  getUserClick(ev){
    this.selectStock = ev
    console.log(ev);
  }
 
  sortByAsccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.stocks.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.stocks.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 this.stocks.forEach((user,index)=>{
    let j = Math.floor(Math.random() * index);
     [this.stocks[index - 1], this.stocks[j]] = [this.stocks[j], this.stocks[index - 1]];
  })
  }
  constructor(meta: Meta, title: Title, private stockServ:StockService) {
    this.stocks = this.stockServ.getStocks()
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  testTempstocks(){
    console.log(this.stocks.length);
    let tempststocks:Array<any> = []
    this.stocks.forEach(item=>{
      tempststocks.push(item)
    })
    tempststocks.pop()
    tempststocks.pop()
    tempststocks.pop()
    tempststocks.pop()
    tempststocks.pop()
    console.log(tempststocks.length);
  }

  ngOnInit() {}
}
