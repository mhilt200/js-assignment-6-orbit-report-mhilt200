import { Component, OnInit, Input } from '@angular/core';
import { empty } from 'rxjs';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

	countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }

 typeArr: string[] = ["Communication", "Positioning", "Probe", "Space Debris", "Space Station", "Telescope"];

// 	typeNames(): string[] {
// 		let emptyArr: string[] = [];

// 		for (let i = 0; i < this.satellites.length; i++) {
// 			if (!emptyArr.includes(this.satellites['type'])) {
// 			emptyArr.push(this.satellites['type']);
// 		}
// 	}
// 		return emptyArr;
//  }

}