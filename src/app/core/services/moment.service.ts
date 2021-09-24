import { Injectable } from '@angular/core';

import * as Moment from 'moment';

@Injectable()
export class MomentService {
    private _moment = Moment;
    public get moment() { return this._moment; }
}
