import { Component, Input, HostBinding } from '@angular/core';

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
}
