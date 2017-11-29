import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/common.component';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  constructor(public router: Router, public http: Http) {
  }
  paracetamol = 0;
  panadol= 0;
  showdata(event, username) {
    event.preventDefault();
    let body = JSON.stringify({ username});

    this.http.get('https://58y5ck6e:v7ocw75f729qazw5@box-6748659.us-east-1.bonsaisearch.net/try/try/'+username, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.paracetamol = response.json()._source.paracetamol;
          this.panadol = response.json()._source.panadol;
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  putdata(event) {
    event.preventDefault();
    this.router.navigate(['medication']);
  }

  ngOnInit() {
  }

}
