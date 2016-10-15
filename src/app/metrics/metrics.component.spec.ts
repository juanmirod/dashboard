/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MetricsComponent } from './metrics.component';
import { IssuesService } from '../issues.service';

describe('Component: Metrics', () => {
  
  var component, issuesServiceStub;

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
});
