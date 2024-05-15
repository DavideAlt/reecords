import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'ree-callback',
    template: '<p>Logging in...</p>'
})

export class CallbackComponent implements OnInit {
    
    constructor(private _authService: AuthService, private _router: Router) {}

    ngOnInit(): void {
        this._authService.configure();
        this._router.navigate(['/']);
    }
    
}