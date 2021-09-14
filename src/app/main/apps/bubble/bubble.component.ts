import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {
  public contentHeader: object;
  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Bubbles',
      actionButton: true,
    };
  }

}
