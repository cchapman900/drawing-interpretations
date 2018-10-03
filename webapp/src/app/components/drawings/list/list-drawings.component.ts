import { Component, OnInit } from '@angular/core';
import {DrawingService} from '../../../services/drawing/drawing.service';
import {Drawing} from '../../../models/drawing';

@Component({
  selector: 'app-list-drawings',
  templateUrl: './list-drawings.component.html',
  styleUrls: ['./list-drawings.component.css']
})
export class ListDrawingsComponent implements OnInit {
  drawings: Drawing[];
  constructor(
    private drawingsService: DrawingService
  ) { }

  ngOnInit() {
    this.drawingsService.getDrawings()
      .subscribe((drawings) => {
        this.drawings = drawings;
      });
  }

}
