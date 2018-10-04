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

  showExtendedNames = false;

  constructor(
    private drawingService: DrawingService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  username = localStorage.getItem('username');
  interpretationGroup = [];
  interpretation = new Interpretation();

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.drawing_id = +params['drawing_id'];
      if (this.drawing_id) {
        this.drawingService.getDrawing(this.drawing_id)
          .subscribe(drawing => {
            this.drawing = drawing;
            this.interpretationGroup = this.getInterpretationGroup(this.drawing.interpretations);
          });
      }
    });
  }

  getInterpretationGroup(drawingInterpretations) {
    // interpretation is {text: 'some interpretation', username: 'some username'}
    const grouping = drawingInterpretations.reduce(function (r, a) {
      r[a.text] = r[a.text] || [];
      r[a.text].push(a.username);
      return r;
    }, Object.create(null));
    const result = Object.keys(grouping).map(function(key) {
      return [key, grouping[key]];
    });

    return result;
  };

  formatNames(names: Array<string>, limit = 3 ) {
    const result = [];
    let additional = '';
    if (names.length <= limit) {
      limit = names.length;
    } else {
      additional = 'and ' + (names.length - limit) + ' others';
    }
    for (let i = 0; i < limit; i++) {
      result.push(names[i]);
    }
    if (additional !== '') {
      result.push(additional);
    }
    return result.join(', ');
  }

  onSubmit() {
    this.interpretation.username = this.username;
    this.interpretation.drawing_id = this.drawing_id;
    this.drawingService.createInterpretation(this.interpretation)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['drawings']);
      });
  }

}
