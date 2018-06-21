import {Component} from "@angular/core";

@Component({
    selector: 'view',
    template: `
        <div class="twocolumn">
            <nav-component></nav-component>

            <router-outlet></router-outlet>
        </div>

        <!--<footer></footer>-->`
})
export class RootComponent {
    constructor() {
    }
}
