import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  email = '' as string;
  password = '' as string;
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
