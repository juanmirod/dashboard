import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css'],
  providers: [IssuesService]
})
export class MetricsComponent implements OnInit {

  numOpenIssues: number = 0;

  constructor(private issuesService: IssuesService) {
  }

  ngOnInit() {
    this.numOpenIssues = this.issuesService.getNumOpenIssues();
  }

  

}
