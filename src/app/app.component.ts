import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CompanyTM';
  dashboards = [
    {
      title: 'Key Metrics',
      description: 'Customers and issues over time',
      routeName: 'metrics'
    },
    {
      title: 'Geospacial view',
      description: 'Number of employees at all company locations',
      routeName: 'geo'
    },
    {
      title: 'Data view',
      description: 'All issues about the product, in a sortable and filterable display',
      routeName: 'data'
    }
  ];
  
}
