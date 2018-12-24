import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { quickMaths } from './probability-calculator.helper';

import * as _ from 'lodash';

@Component({
  selector: 'app-probability-calculator',
  templateUrl: './probability-calculator.component.html',
  styleUrls: ['./probability-calculator.component.css']
})
export class ProbabilityCalculatorComponent implements OnInit {

  public probabilityFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.configForm();
  }

  configForm() {
    this.probabilityFormGroup = this.fb.group({
      popSize: [null, [Validators.required]],
      successSize: [null, [Validators.required]],
      numOfTries: [null, [Validators.required]],
      numOfSuccess: [null, [Validators.required]]

    });
  }

  submit() {
    const popSize = this.probabilityFormGroup.get('popSize').value;
    const successSize = this.probabilityFormGroup.get('successSize').value;
    const numOfTries = this.probabilityFormGroup.get('numOfTries').value;
    const numOfSuccess = this.probabilityFormGroup.get('numOfSuccess').value;

    console.log(quickMaths.cumulativeHyperGeometricDistribution(popSize, successSize, numOfTries, numOfSuccess));

  }

}
