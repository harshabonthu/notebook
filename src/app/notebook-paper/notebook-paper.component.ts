import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'notebook-paper',
  templateUrl: 'notebook-paper.component.html',
  styleUrls: ['notebook-paper.component.css']
})
export class NotebookPaperComponent implements OnInit {
  currentPage: string;
  pageContent: string;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  onKeyup(newContent: string) {
    sessionStorage.setItem(this.currentPage, newContent);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentPage = params['id'];
      this.pageContent = sessionStorage.getItem(this.currentPage) || `Enter Some Notes Here in Page ${this.currentPage}`;
    });
  }

  gotoNextPage() {
    this.router.navigate(['/page', +this.currentPage + 1]);
  }

  gotoPrevPage() {
    this.router.navigate(['/page', +this.currentPage - 1]);
  }


}
