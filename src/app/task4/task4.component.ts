import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit {
  showElement: boolean;
  @ViewChild('element') element: ElementRef;

  constructor() {}

  ngOnInit(): void {
    interval(5000).pipe(
      take(1)
    ).subscribe(() => {
      this.showElement = true;
      this.setText(this.element);
    });
  }

  private setText(element: ElementRef): void {
    const headerElement = element.nativeElement as HTMLHeadingElement;
    headerElement.innerHTML = 'Task 4 Initialized';
  }

}
