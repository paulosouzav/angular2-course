import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover(){
  	this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave(){
  	this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor(){
  	return this.backgroundColor;
  };

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';

  // private backgroundColor = this.defaultColor;
  private backgroundColor: string;

  constructor() {
  // constructor(private elementRef: ElementRef, private renderer: Renderer) {
  	// this.elementRef.nativeElement.style.backgroundColor = "pink";
  	// this.renderer.setElementStyle(
  	// 	this.elementRef.nativeElement, 
  	// 	'background-color', 'pink');
  }

  ngOnInit(){
  	this.backgroundColor = this.defaultColor;
  }

}
