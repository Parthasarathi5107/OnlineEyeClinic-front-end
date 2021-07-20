import { SpectaclesResponse } from './../../response/spectacles-response';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpectaclesService } from 'src/app/service/spectacles.service';
import { Component, OnInit } from '@angular/core';
import { Spectacles } from 'src/app/details/spectacles';

@Component({
  selector: 'app-deletespectacles',
  templateUrl: './deletespectacles.component.html',
  styleUrls: ['./deletespectacles.component.css']
})
export class DeletespectaclesComponent implements OnInit {

  allSpecs : SpectaclesResponse[]=[];
  specs:SpectaclesResponse;
  registerForm: FormGroup;

  spectaclesId: FormControl;
  
  constructor(private spectaclesService: SpectaclesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.spectaclesId = new FormControl('', [Validators.required]);
    this.registerForm = new FormGroup(
      {
        'spectaclesId': this.spectaclesId
        
      }
    );
    console.log(this.allSpecs)
    this.spectaclesService.viewSpectacles().subscribe(data =>{
      console.log(data);
      this.allSpecs = data;
    });
  }

    onSubmit(){
    this.spectaclesService.viewById(this.spectaclesId.value).subscribe(data =>{
      console.log(data);
      this.specs = data;
      
    });
  }

  delete()
  {
    this.spectaclesService.deleteSpectacles(this.spectaclesId.value).subscribe(data=>{
     
      this.specs = data;
      alert("Spectacles Deleted ")
      console.log(this.specs);
  },
  err=>
  {
    console.log(err.error);
  }
  
  ); 
 
  }
  
}
