import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }

  show() {
    // tslint:disable-next-line:max-line-length
    $('body').append("<div class='container-fluid grid-overlay'> <div class='row'> <div class='container content'> <div class='row'> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> <div class='col-md-1'> <h1></h1> </div> </div> </div> </div></div>");
    console.log('Showing Grid!');
  }
}
