import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public files:any
  constructor(
    private apiService:ApisService
  ) { }

  ngOnInit(): void {
  }
  upload(event:any){
    const file=event.target.files[0];
    this.files=file  
  }
  analize(forma:NgForm){
    const data= new FormData();
    data.append('file',this.files);
    data.append('description',forma.value.description);
    this.apiService.upload(data).subscribe(
      Response=>{
        console.log(Response)
      }
    )
  }
}
