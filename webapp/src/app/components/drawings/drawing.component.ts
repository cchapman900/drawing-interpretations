import { Component, OnInit } from '@angular/core';
import {Drawing} from '../../models/drawing';
import {DrawingService} from '../../services/drawing/drawing.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Interpretation} from '../../models/interpretation';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {
  drawing_id: number;
  drawing: Drawing;

  constructor(
    private drawingService: DrawingService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  username = localStorage.getItem('username');
  interpretation = new Interpretation();

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.drawing_id = +params['drawing_id'];
      if (this.drawing_id) {
        this.drawingService.getDrawing(this.drawing_id)
          .subscribe(drawing => {
            this.drawing = drawing;
          });
      }
    });
  }

  onSubmit() {
    this.interpretation.user_id = this.username;
    this.interpretation.drawing_id = this.drawing_id;
    this.drawingService.createInterpretation(this.interpretation)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['drawings']);
      });
  }

}
