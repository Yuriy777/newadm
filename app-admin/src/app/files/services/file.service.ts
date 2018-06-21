import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "../../shared/toastr.service";
import {Observable} from "rxjs";
import {AuthService} from "../../authentication/services/auth.service";

@Injectable()
export class FileService {

    constructor(private http: HttpClient,
                private authService: AuthService) {
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    }

    // download file
    postFile(file: Blob): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('FilesUploaded[file]', file, 'a.png');
        return this.http.post('/v1/uploads/image', formData, {headers: this.getHeaders()});
    }
}
