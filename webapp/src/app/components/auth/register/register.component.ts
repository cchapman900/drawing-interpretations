import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
