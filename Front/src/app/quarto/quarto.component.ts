import { QuartoService } from './../shared/quarto.service';
import { Quarto } from './../shared/quarto.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent implements OnInit {

  constructor(public quarto: QuartoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitt(form: NgForm) {
    if (this.quarto.formDataQuarto.quartoID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.quarto.postQuarto().subscribe(
      res => {
        this.resetForm(form);
        this.quarto.refreshListQuarto();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.quarto.putQuarto().subscribe(
      res => {
        this.resetForm(form);
        this.quarto.refreshListQuarto();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.quarto.formDataQuarto = new Quarto();
  }

}
