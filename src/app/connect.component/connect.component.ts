import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {

  contactUsFormGroup = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  
  constructor( 
    private router : Router, 
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) {

  }

  navToHome() {
    this.router.navigate(['./']);
  }

  onSubmit() {
    if(this.contactUsFormGroup.valid) {
      this.http.post( 'https://travel-enquires-default-rtdb.asia-southeast1.firebasedatabase.app/enquiry.json', this.contactUsFormGroup.value ).subscribe( res => {
        this.snackBar.open('Thank you for your enquiry','Close', {
          duration: 5000
        });
        this.contactUsFormGroup.patchValue({
          phoneNumber: '',
          email: '',
          message: '',      
        });
      });
    }
  }

  ngOnInit() {
    // this.http.get( 'https://travel-enquires-default-rtdb.asia-southeast1.firebasedatabase.app/enquiry.json').subscribe( res => {
    //     console.log(res);
    //   });
  }
}
