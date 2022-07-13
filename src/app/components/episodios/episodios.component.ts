import { Component, OnInit } from '@angular/core';
import { RmapiService } from 'src/app/services/rmapi.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  public episodes: any;

  constructor(private rmapi:RmapiService) { }

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(){
    this.rmapi.getEpisodes().subscribe(
      data => {
        this.episodes = data
      },
      err => {console.dir(err)}
    );
  }

}
