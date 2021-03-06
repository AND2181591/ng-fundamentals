import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    templateUrl: "./login.component.html", 
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; animation: appear .1s ease-in; }
        @keyframes appear { 0% { opacity: 0; } 100% { opacity: 1; } }
    `]
})
export class LoginComponent {

    userName: string;
    password: string;
    mouseoverLogin: boolean;

    constructor(
        private authService: AuthService, 
        private router: Router
    ) {}

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(["events"]);
    }

    cancel() {
        this.router.navigate(["events"]);
    }

}