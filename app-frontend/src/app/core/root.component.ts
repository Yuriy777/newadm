import {Component} from "@angular/core";

@Component({
    selector: 'view',
    template: `
        <div class="twocolumn">
            <router-outlet></router-outlet>
        </div>

        <!--<footer></footer>-->`
})
export class RootComponent {
    constructor() {
    }
}
