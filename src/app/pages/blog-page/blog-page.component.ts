import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, OnDestroy {

  id: string;
  limit: number;

  paramsSubscription: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.activatedRouter);
    this.id = this.activatedRouter.snapshot.params.ref;
    this.limit = this.activatedRouter.snapshot.queryParams.limit;
    this.paramsSubscription = this.activatedRouter.params.subscribe((para: Params) => {
      this.id = para.ref;
    });
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  goBlog(s: string) {
    this.router.navigate(['/blog', s]);
  }

}
