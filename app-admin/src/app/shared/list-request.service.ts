import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {ListRequest} from "./models/list-request.model";

@Injectable()
export class ListRequestService {
    public static parseRequestObject(requestObj: ListRequest) {
        let str = "";
        for (let keyObj in requestObj) {
            if (!_.isNil(requestObj[keyObj]) && requestObj[keyObj] !== "") {
                if (_.isArray(requestObj[keyObj])) {
                    if (requestObj[keyObj].length > 0) {
                        let pairs = [];
                        for (let key in requestObj[keyObj])
                            if (requestObj[keyObj].hasOwnProperty(key)) {
                                pairs.push(keyObj + "[]" + '=' + encodeURIComponent(requestObj[keyObj][key]));
                            }
                        str += "&" + pairs.join('&');
                    }
                } else {
                    if (str != "") {
                        str += "&";
                    }
                    str += keyObj + "=" + encodeURIComponent(requestObj[keyObj]);
                }
            }
        }
        return str;
    }
}