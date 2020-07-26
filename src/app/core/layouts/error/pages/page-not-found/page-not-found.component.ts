import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-error-page-not-found',
    templateUrl: 'page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.printPath('', this.router.config);
    }

    /**
     * Debugging function for print all route (root and childen)
     * @param parent Set parent route
     * @param config Set route config list
     */
    printPath(parent: string, config: Route[]) {
        for (let i = 0; i < config.length; i++) {
            const route = config[i];

            console.log(parent + '/' + route.path);

            if (route.children) {
                const currentPath = route.path
                    ? parent + '/' + route.path
                    : parent;
                this.printPath(currentPath, route.children);
            }
        }
    }

    onReturnHome(): void {
        this.router.navigate(['']);
    }
}
