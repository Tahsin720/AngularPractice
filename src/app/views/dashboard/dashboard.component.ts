import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: any[] = [];
  spiderman: string = '';
  superman: string = '';
  constructor(private dashboardService: DashboardService)
  {
  }
  ngOnInit(): void {
    this.dashboardService.herosList().pipe(map((data: any[]) => {
      const spidermanHero = data.find(hero => hero.name === 'Spiderman');
      return spidermanHero ? 'Peter Parker is ' + spidermanHero.name : '';
    })).subscribe((data: string) => {
      console.log(data);
      this.spiderman = data
    });

    this.dashboardService.herosList().subscribe((data: any[]) => {
      console.log(data);
      this.heroes = data
    });
  }
}

