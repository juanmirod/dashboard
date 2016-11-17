/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MetricsComponent } from './metrics.component';
import { IssuesService } from '../issues.service';

describe('Component: Metrics', () => {
  let component, issuesServiceStub;

  beforeEach(() => {
    
    issuesServiceStub = {
      getNumOpenIssues: () => 2
    };

    // Create the component 
    TestBed.configureTestingModule({
      declarations: [ MetricsComponent ],
    });

    // Overwrite the provider to use the stub
    TestBed.overrideComponent(MetricsComponent, {
      set: {
        providers: [{ provide: IssuesService, useValue: issuesServiceStub }]
      }
    });

    component = TestBed.createComponent(MetricsComponent);

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should show the number of active issues', async(() => {
    let compiled = component.nativeElement;
    component.detectChanges();
    expect(compiled.querySelector('#num-issues').textContent).toBe('2');
  }));

  it('should show a line chart with the number of active users over time', async(() => {
    let compiled = component.nativeElement;
    component.detectChanges();
    expect(compiled.querySelector('#active-users')).not.toBe(null);
  }));

  it('should show a bar chart with the number of issues over time', async(() => {
    let compiled = component.nativeElement;
    component.detectChanges();
    expect(compiled.querySelector('#issues-time')).not.toBe(null);
  }));

});
