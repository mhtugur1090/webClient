import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable, Output ,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  uploadUrl: string = 'http://localhost:5000/image';
  public progress?: number;
  public message?: string;

  @Output()
  public onUploadFinished = new EventEmitter();

  constructor(private http:HttpClient) {}

  UploadFile(files:any)
  {
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(this.uploadUrl,formData,
      {
        reportProgress:true,
        observe:'events'
      })
      .subscribe((event)=>
      {
        if (event.type === HttpEventType.UploadProgress) {

          var a = event.total;
          if(a==undefined)a=1;

          this.progress=Math.round(100*event.loaded/(a))

      }else if(event.type === HttpEventType.Response)
      {

        this.message = "upload success";
        this.onUploadFinished.emit(event.body);// bu içersinde upload edilen dosyaya ait db path ini saklar. Bu da bize upload edilmiş dosyaya erişmek için ilgili pathi bize verir.

      }
      });
  }

  getImgPathToServer()
  {
    return this.onUploadFinished;
  }
}
