import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Product } from '../_models/product';


@Component({
  selector: 'app-admin-p-image-edit',
  templateUrl: './admin-p-image-edit.component.html',
  styleUrls: ['./admin-p-image-edit.component.css']
})
export class AdminPImageEditComponent implements OnInit {

  @Input()
  gettingProduct?:Product;

  @Output()
  public onUploadFinished = new EventEmitter();

  public message?: string;
  loading:boolean = false;
  private rootUrl:string = "https://sahinkerestewebapi.me";
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  UploadFile(files:any)
  {
    this.loading = true;

    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http
      .post(this.rootUrl+'/image', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {

            var a = event.total;
            if(a==undefined)a=1;

            this.loading = false;

        }
        else if(event.type === HttpEventType.Response)
        {

          this.message = "upload success";
          this.onUploadFinished.emit(event.body);// bu içersinde upload edilen dosyaya ait db path ini saklar. Bu da bize upload edilmiş dosyaya erişmek için ilgili pathi bize verir(seerver daki).
          this.loading = false;
        }

      });
  }

}
