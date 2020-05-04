import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable()
export class ApiService {

  constructor() {}
  getData() {
    return of({
"startIx": 0,
"page": 1,
"orders":[
    {"orderNumber":"756984",
    "date":"2020-04-02",
    "status":"ORDER_PARTIALLY_PROCESSED",
    "price":7.84,
    "links":[
        {"rel":"store.order",
        "href":"history.jsf"
    }]},
    {"orderNumber":"756985",
    "date":"2020-04-03",
    "status":"ORDER_PARTIALLY_PROCESSED",
    "price":8.54,
    "links":[
        {"rel":"store.order",
        "href":"history.jsf"
        }]}],
"totalOrders":2
});
    
    // return this.http.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${pair1}&to_currency=${pair2}&apikey=demo`);
  }
}