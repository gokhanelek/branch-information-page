import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavItem } from 'src/app/core/models/nav-item';
import { Menu } from './menu';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  menu: NavItem[] = Menu;
  pageExplanation: string = '';
  pageTitle: string = ''


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
    this.matIconRegistry.addSvgIcon(
      "overview-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/side-main-nav/navigation-overview-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "plus-circle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/locations/plus-circle-icon.svg")
    );
  }

  ngOnInit(): void {
    this.route.data.subscribe((v) => {
      this.pageTitle = v.title;
      this.pageExplanation = v.explanation;
    });
  }

  // get title(): string {
  //   return this.pageTitle
  // }

  // get explanation(): string {
  //   return this.pageExplanation
  // }

  // setTitle(item: NavItem) {
  //   this.pageTitle = item.displayName;
  //   this.pageExplanation = item.displayExplanation
  //   // this.router.navigateByUrl(`${item.route}`);
  // }
}
