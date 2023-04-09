import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cta2data } from 'src/app/interface/loveandcompanionInterface';
import { LoveCompanionService } from 'src/app/shared/lovecompanion.service';

@Component({
  selector: 'plpm-love-compassion',
  templateUrl: './love-compassion.component.html',
  styleUrls: ['./love-compassion.component.scss'],
})
export class LoveCompassionComponent implements OnInit {
  cta2: Cta2data;
  errorMessage: string = '';
  sub!: Subscription;
  constructor(private cta2Service: LoveCompanionService) {}
  ngOnInit(): void {
    this.sub = this.cta2Service.getLoveCompanion().subscribe({
      next: (cta2) => {
        console.log('LoveandCompanion', cta2);

        this.cta2 = cta2;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
