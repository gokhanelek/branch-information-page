import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationRequest } from 'src/app/core/models/locations';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit {
  locationForm = this.fb.group({
    name: new FormControl('', Validators.required),
    date: new FormControl(new Date(), Validators.required),
    licenses: new FormControl('', Validators.required),
    modules: new FormGroup({
      exams: new FormControl(true, Validators.required),
      monitoring: new FormControl(true, Validators.required),
      applicationLibrary: new FormControl(true, Validators.required)
    })
  })
  selectedFiles?: FileList;
  preview: string = '';
  branchRequest = new LocationRequest;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.locationForm
  }

  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }


  uploadFile() {
    console.log("upload");
  }

  createBranch() {
    this.branchRequest.name = this.locationForm.controls['name'].value;
    this.branchRequest.licenses = this.locationForm.controls['licenses'].value;
    this.branchRequest.enrollmentDate = formatDate(this.locationForm.controls['date'].value, 'dd/MM/yyyy', 'en-US');
    this.branchRequest.exams = this.locationForm.controls['modules'].value.exams;
    this.branchRequest.monitoring = this.locationForm.controls['modules'].value.monitoring
    this.branchRequest.applicationLibrary = this.locationForm.controls['modules'].value.applicationLibrary
    this.branchRequest.image = this.preview;
    console.log(this.branchRequest);
    alert("Your branch has been created");
  }

}
