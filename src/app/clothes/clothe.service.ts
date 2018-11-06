import { Injectable } from '@angular/core'
import { Clothe } from './clothe'

@Injectable(
  {providedIn: 'root'}
)
export class ClotheService{
  getClothes():Clothe[]{
    return [
      {
        "id": 1,
        "size": 122,
        "url": 'https://img.joemonster.org/images/vad/img_45861/a63319c1ce9ac2ad134f598c218f5c0e.jpg'
      },
      {
        "id": 2,
        "size": 116,
        "url": 'https://img.joemonster.org/images/vad/img_45861/a63319c1ce9ac2ad134f598c218f5c0e.jpg'
      }
    ];
  }
}
