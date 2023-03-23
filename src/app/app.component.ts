import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public titulo:string = "Contador";
    public baseMostrada:number = 5;
    public base:number = 5;
    public contador(valor:number):void{
        this.baseMostrada += valor;
    }

}
