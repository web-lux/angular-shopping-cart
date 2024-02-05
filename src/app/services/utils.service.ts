import { Injectable } from '@angular/core';
import CartItem from '../interfaces/cartInterface';

interface hasID {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  compareId(a: hasID, b: hasID) {
    if (a.id < b.id) {
        return -1;
    } else if (a.id > b.id) {
        return 1;
    } else {
        return 0;
    }
  }
}
