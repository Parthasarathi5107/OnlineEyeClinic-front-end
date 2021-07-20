import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spectacles } from '../details/spectacles';
import { SpectaclesService } from '../service/spectacles.service';

@Component({
  selector: 'app-spectacles',
  templateUrl: './spectacles.component.html',
  styleUrls: ['./spectacles.component.css']
})
export class SpectaclesComponent implements OnInit {

  allSpecs : Spectacles[]=[];
  
  constructor(private spectaclesService: SpectaclesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    console.log(this.allSpecs)
    this.spectaclesService.viewSpectacles().subscribe(data =>{
      console.log(data);
      this.allSpecs = data;
    });
  }

  // getDetails()
  // {
  //   console.log("inside get detils")
      
  //       this.spectaclesService.viewSpectacles().subscribe(data =>{
  //         console.log(data);
  //         this.allSpecs = data;
  //       });
  //     }
    
  buy()
  {
    alert("Added to cart...");
  }

}
