import { Component } from "@angular/core";
import { map, pluck } from "rxjs/operators";
import { ApiService } from "./api.service";
import { forkJoin } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = {};
  constructor(apiService: ApiService) {
    forkJoin(apiService.getData(), apiService.getData())
      .pipe(
        map(x => {
          const orders = [...x[0]["orders"], ...x[1]["orders"]];
          return {
            page: 1,
            startIx: 0,
            orders: orders,
            totalOrders: orders.length
          };
        })
      )
      .subscribe(x => {
        console.log(x);
        this.data = x;
      });
  }
}
