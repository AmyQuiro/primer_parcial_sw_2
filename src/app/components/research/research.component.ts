import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  researches:any[]=[];
  constructor(
    private apiService:ApisService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.apiService.getResearches().subscribe(
      Response=>{
        this.researches=Response.imgs;

        this.researches.forEach(element => {
          let srt='https://image-criselito.herokuapp.com'+'/'+element.url;
          element.url=srt
        });
        console.log(this.researches);
        
      }
    )
  }
}
