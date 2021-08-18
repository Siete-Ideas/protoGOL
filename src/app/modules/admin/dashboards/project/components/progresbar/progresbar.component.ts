import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-progresbar',
	templateUrl: './progresbar.component.html',
	styleUrls: ['./progresbar.component.scss']
})
export class ProgresbarComponent implements OnInit {

	@Input('progress') progress: number;
	@Input('total') total: number;
	@Input('where') where: string;
	color: string;

	middleBar: number = 65;
	endBar: number = 95;
	showTrueLimite:number;
	shoowTrueProgress: number;
	showDisp: number;


	constructor() { 
		
	}

	ngOnInit(): void {
		console.log(this.total, this.progress	)
		if(!this.progress){
			this.progress = 0;
		}

		if(this.total === 0){
			this.total = this.progress;
		}else if(!this.total) {
			this.total = 100;
		}

		this.showTrueLimite = this.total;
		this.shoowTrueProgress = this.progress;
		this.showDisp = this.progress - this.total;

		// limiteTotalBar1 - totalBar1
		//[progress]="totalBar1" [total]="limiteTotalBar1"

		if(this.progress > this.total) {
			this.progress = 100;
			this.total = 100;
		}

		this.progress = (this.progress / this.total) * 100;

		if(this.progress < this.middleBar) {
			this.color = 'green';
		}else if(this.progress < this.endBar) {
			this.color = 'yellow';
		}else {
			this.color = 'red';
		}
	}

}