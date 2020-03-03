import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appOnHover]'
})
export class OnHoverDirective {
    @Input() public defaultColor: string;
    @Input() public hoverColor: string;


    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.setBgColor('white');
      }
      setBgColor(color: string) {
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'backgroundColor',
          color
        );
      }

      @HostListener('mouseenter') onMouseEnter() {
        this.setBgColor('gray');
      }

      @HostListener('mouseleave') onMouseLeave() {
        this.setBgColor('white');
      }
}
