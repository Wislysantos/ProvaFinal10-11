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

  select: any = document.getElementById('tipoQuarto');

  //valor: any = this.select.options[this.select.selectedIndex].value;
  valor = "";

  constructor(public service: ReservasService, public quar: QuartoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmitt(form: NgForm) {
    if (this.quar.listQuarto.find(q => q.quartoID == this.quar.formDataQuarto.quartoID))
    this.updateRecord(form);
    else
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.quar.postQuarto().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.error('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.quar.putQuarto().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.error('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.quar.formDataQuarto = new Quarto();
  }

  povuarForm(selectedRecord: Reservas){
    this.quar.formDataQuarto = Object.assign({}, selectedRecord);
    //console.log("PAssseis sqioqow");

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

  selecionarImg(){
    if(this.quar.formDataQuarto.tipoQuarto == "Premiun"){
      this.quar.formDataQuarto.imageUrl ="1.jpg"
    }
  }

  lala(b:string){
    b
    console.log(b)
  }


  onAddCidade(){ // Função que foi chamada
  //  this.value = this.value;
    //console.log("estou no cidade compo... " + this.value); // Imprimiu o valor no Console log.
  }


  //value = this.select.options[this.select.selectedIndex].value;
}
