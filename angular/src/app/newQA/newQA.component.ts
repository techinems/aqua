import { Component } from '@angular/core';
import { QA }    from '../qa';


@Component({
  selector: 'NewAQ',
  templateUrl: './newQA.component.html',
  styleUrls: ['./newQA.component.css']
})
export class NewQAComponent {
  title = 'New QA';
  isActive = false;
  qa: object = {
    date: "",
    prid: 0,
    problem: "",
    determinant: "NONE",
    tic: "SELECT",
    ticnine: "SELECT",
    preceptor: "SELECT",
    precnine: "SELECT",
    noPrec: false,
    yn1: "",
    yn2: "",
    yn3: "",
    yn4: "",
    yn5: "",
    yn6: "",
    yn7: "",
    yn8: "",
    flagged: ""
  };

  public sendQA(){
    console.log(this.qa);
  }

  public activateButton() {
    console.log("CLICKED!")
    this.isActive = true;
  }

}