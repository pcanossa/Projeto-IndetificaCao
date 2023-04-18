import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  validError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  verificaError():void {
    this.validError = true;
  }

}
