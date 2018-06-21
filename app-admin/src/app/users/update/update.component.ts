import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {CreateComponent} from "../create/create.component";

@Component({
    selector: 'app-user-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent extends CreateComponent {

    ngOnInit() {

    }
}
