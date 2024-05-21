import { Component, Input, HostBinding, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'ree-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() isLoading: boolean = true;

  @HostBinding('class.fade-out') get fadeOut() {
    return !this.isLoading;
  }

  @HostListener('transitionend', ['$event'])
  handleTransitionEnd(event: TransitionEvent) {
    if (event.propertyName === 'opacity' && !this.isLoading) {
      console.log('Loading screen fade-out completed');
    }
  }
}
