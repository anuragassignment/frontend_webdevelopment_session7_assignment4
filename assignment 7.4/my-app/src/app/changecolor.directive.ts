import { Directive, OnInit, HostListener, Input, EventEmitter, Output } from '@angular/core';

// custom directive which changes background color for odd and even values of index
@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements OnInit {
  @Input() index: any;
  hoverIndex: any;
  color: string;
  // custom event which emits value of property color based on index value. @Output makes it available to parent component
  @Output() emitHoverIndex = new EventEmitter<number>();
  // custom event which emits index of hovered element
  @Output() emitColor = new EventEmitter<string>();
  constructor() { }
  // listnes to mouseenter event of the element on which custom directive is applied and calls the function
  @HostListener('mouseenter') bgColor() {

    if (this.index % 2 === 0) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
    // triggers the custom event on mouseenter and emits the color value
    this.emitColor.emit(this.color);
    this.hoverIndex = this.index;
    // triggers the custom event on mouseleave and emits the index of hover element
    this.emitHoverIndex.emit(this.hoverIndex);
  }
  // listens to the mouseleave event on the element on which directive is applied
  @HostListener('mouseleave') bgColorRm() {
    this.color = 'black';
    this.emitColor.emit(this.color);
  }

  ngOnInit() {
    this.index += 1;
  }
}
