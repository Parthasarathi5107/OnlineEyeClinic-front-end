import { Spectacles } from './../../details/spectacles';
import { SpectaclesService } from './../../service/spectacles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addspectacles',
  templateUrl: './addspectacles.component.html',
  styleUrls: ['./addspectacles.component.css']
})
export class AddspectaclesComponent implements OnInit {

  registerForm: FormGroup;

  spectaclesModel: FormControl;
  spectaclesDescription: FormControl;
  spectaclesRating: FormControl;
  spectaclesCost: FormControl;
  

  formSubmitted = false;

  constructor(private spectaclesService: SpectaclesService, private router: Router) { }

  ngOnInit(): void {

    this.spectaclesModel = new FormControl('', [Validators.required, Validators.minLength(3),Validators.max(20)]);
    this.spectaclesDescription = new FormControl('', [Validators.required]);
    this.spectaclesRating = new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]);
    this.spectaclesCost = new FormControl('', [Validators.required, Validators.min(1000)]);
    

    this.registerForm = new FormGroup(
      {
        'spectaclesModel': this.spectaclesModel,
        'spectaclesDescription': this.spectaclesDescription,
        'spectaclesRating': this.spectaclesRating,
        'spectaclesCost': this.spectaclesCost,
        
      }
    );
  }

  onSubmit()
  {
    
      this.addSpectacles(this.registerForm.value);
    
  }

  addSpectacles(spectacle: Spectacles)
  {
    this.spectaclesService.addSpectacles(spectacle)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }

}
