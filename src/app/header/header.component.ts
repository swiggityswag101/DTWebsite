import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginFormGroup: FormGroup;
  public createFormGroup: FormGroup;

  constructor(private modalService: NgbModal,
              private fb: FormBuilder) { }

  ngOnInit() {
  }

  openModal(content) {
    console.log(content);
    this.modalService.open(content, { centered: true });
    this.loginFormGroup = this.fb.group(
      {username: [null, [ Validators.required ]],
       password: [null, [ Validators.required ]]}
       );
  }

  submitForm() {
    const uName = this.loginFormGroup.get('username').value;
    const pWord = this.loginFormGroup.get('password').value;

    console.log(uName);
  }

}
