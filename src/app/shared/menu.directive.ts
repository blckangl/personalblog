import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective {

  constructor(private elRef: ElementRef, private  renderer: Renderer2) {
  }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleMenu(): void {
    this.isOpen = !this.isOpen;

    const part = this.elRef.nativeElement.querySelector('.dropdown-menu');

    if (this.isOpen) {
      this.renderer.addClass(part, 'show');
    }else{
      this.renderer.removeClass(part, 'show');

    }

  }

}
