import { QuartoService } from './../shared/quarto.service';
import { Quarto } from './../shared/quarto.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ReservasService } from '../shared/reservas.service';
import { Reservas } from '../shared/reservas.model';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent implements OnInit {

  constructor(public service: ReservasService, public quar: QuartoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmitt(form: NgForm) {
    if (this.quar.formDataQuarto.quartoID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.quar.postQuarto().subscribe(
      res => {
        this.resetForm(form);
        this.quar.refreshListQuarto();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.quar.putQuarto().subscribe(
      res => {
        this.resetForm(form);
        this.quar.refreshListQuarto();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.quar.formDataQuarto = new Quarto();
  }

  povuarForm(selectedRecord: Reservas){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteReservas(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Payment Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }

}
