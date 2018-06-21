import {Injectable} from '@angular/core';
import {Title}     from '@angular/platform-browser';

@Injectable()
export class TitleService {
    private static titleService: Title = new Title('');
    private static titleBase: string = "CrazySOB v2.0.1";

    public static setTitle(newTitle: string) {
        this.titleService.setTitle(this.titleBase + " | " + newTitle);
    }
}