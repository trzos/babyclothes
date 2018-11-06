import { Component, OnInit } from '@angular/core';
import { Clothe } from '../clothe';
import { ClotheService } from '../clothe.service';


@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  clothes: Clothe[];

  constructor(private clotheService:ClotheService) { }

  ngOnInit():void {
    this.clothes = this.clotheService.getClothes();
  }

}
