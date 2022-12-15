import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit{

  constructor(private el: ElementRef) {

  }
  ngAfterViewInit():void{
    this.el.nativeElement.focus()
  }
  ngOnInit() {
  }
}
