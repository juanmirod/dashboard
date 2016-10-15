import { Injectable } from '@angular/core';
import { Issues } from './issues';

@Injectable()
export class IssuesService {

  issues: Array<any> = [];

  constructor() {
    this.issues = Issues;
  }
  
  getOpenIssues() {
    return this.issues.filter(issue => issue.open);
  }

  getNumOpenIssues(): number {
    return this.getOpenIssues().length;
  }

}
