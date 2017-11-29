import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/common.component';
@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  constructor(public router: Router, public http: Http) { }

  prescribe(event, username, paracetamol, panadol) {
  event.preventDefault();
  let content = {"paracetamol":paracetamol,
                  "panadol":panadol};
  let body = JSON.stringify(content);
  this.http.post('https://1ebsxlop:g0tjsgjzzzj36zko@smoke-16773.us-east-1.bonsaisearch.net/try/try/'+username, body, { headers: contentHeaders })
    .subscribe(
      response => {
        localStorage.setItem('id_token', response.json().id_token);
        this.router.navigate(['']);
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
    );
}

home(event) {
  event.preventDefault();
  this.router.navigate(['']);
}
  ngOnInit() {
  }

}
