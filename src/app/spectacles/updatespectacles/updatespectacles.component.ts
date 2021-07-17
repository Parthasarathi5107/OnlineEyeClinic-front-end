<<<<<<< HEAD
import { SpectaclesService } from './../../service/spectacles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spectacles } from 'src/app/details/spectacles';
=======
import { Spectacles } from './../../details/spectacles';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpectaclesService } from 'src/app/service/spectacles.service';
>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a

@Component({
  selector: 'app-updatespectacles',
  templateUrl: './updatespectacles.component.html',
  styleUrls: ['./updatespectacles.component.css']
})
export class UpdatespectaclesComponent implements OnInit {

  registerForm: FormGroup;

  spectaclesId:FormControl;
  spectaclesModel: FormControl;
  spectaclesDescription: FormControl;
  spectaclesRating: FormControl;
  spectaclesCost: FormControl;
<<<<<<< HEAD

=======
  
>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a

  formSubmitted = false;

  constructor(private spectaclesService: SpectaclesService, private router: Router) { }

  ngOnInit(): void {

    this.spectaclesId = new FormControl('', [Validators.required]);
    this.spectaclesModel = new FormControl('', [Validators.required, Validators.minLength(3),Validators.max(20)]);
    this.spectaclesDescription = new FormControl('', [Validators.required]);
    this.spectaclesRating = new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]);
    this.spectaclesCost = new FormControl('', [Validators.required, Validators.min(1000)]);
<<<<<<< HEAD

=======
    
>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a

    this.registerForm = new FormGroup(
      {
        'spectaclesId': this.spectaclesId,
        'spectaclesModel': this.spectaclesModel,
        'spectaclesDescription': this.spectaclesDescription,
        'spectaclesRating': this.spectaclesRating,
        'spectaclesCost': this.spectaclesCost,
<<<<<<< HEAD

=======
        
>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a
      }
    );
  }

  onSubmit()
  {
<<<<<<< HEAD

      this.updateSpectacles(this.registerForm.value);

=======
    
      this.updateSpectacles(this.registerForm.value);
    
>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a
  }

  updateSpectacles(spectacle: Spectacles)
  {
    this.spectaclesService.updateSpectacles(spectacle)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }


}
