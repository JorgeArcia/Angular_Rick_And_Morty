import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RmapiService } from 'src/app/services/rmapi.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

  public characterReg: any;

  constructor(private rmapi: RmapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacterReg(this.route.snapshot.params['id']);
  }

  getCharacterReg(id:number){
    this.rmapi.getPersonaje(id).subscribe(
      data => {this.characterReg = data},
      err => {console.dir(err)}
    );
  }

}
