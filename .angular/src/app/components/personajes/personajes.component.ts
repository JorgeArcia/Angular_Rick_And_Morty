import { Component, OnInit } from '@angular/core';
import { RmapiService } from 'src/app/services/rmapi.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public characters: any;

  constructor(private rmapi:RmapiService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.rmapi.getPersonajes().subscribe(
      data => {this.characters = data},
      err => {console.dir(err)}
    );
  }

}
