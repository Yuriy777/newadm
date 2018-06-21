import {NgModule} from "@angular/core";
import {ErrorHandler} from "./error-handler.service";
import {TitleService} from "./title.service";
import {ToastrService} from "./toastr.service";
import {ListRequestService} from "./list-request.service";

@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [
        ErrorHandler,
        TitleService,
        ToastrService,
        ListRequestService,
    ]
})
export class SharedModule {
    constructor() {

    }
}
