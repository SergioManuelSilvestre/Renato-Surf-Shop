import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit {

  formRegisto = new FormGroup ({
     primeiroNome: new FormControl(),
     apelido: new FormControl(),
     morada:  new FormControl(),
     distrito:  new FormControl(),
     localidade:  new FormControl(),
     codPostal:  new FormControl(),
     passWord: new FormControl(),
     newPassword:  new FormControl(),
     email:  new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
