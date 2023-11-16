import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { ChangeDetectorRef} from "@angular/core";


export interface PeriodicElement {
  title: string;
  porct:boolean;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'TEA (%)', porct: false, value: '0'},
  {title: 'TEM (%)', porct: false, value: '0'},
  {title: 'Seguro Vehicular Mensual (%)', porct: true, value: '0'},
  {title: 'Cuota Inicial', porct: true, value: '0'},
  {title: 'Cuota Final', porct: true, value: '0'},
  {title: 'Monto Del Préstamo', porct: true, value: '0'},
  {title: 'Importe Para Cuotas', porct: true, value: '0'},
  {title: 'Saldo Capitalizado', porct: true, value: '0'},
  {title: 'R (Cuotas Mensuales)', porct: true, value: '0'}
];

@Component({
  selector: 'app-add-data-table',
  templateUrl: './add-data-table.component.html',
  styleUrls: ['./add-data-table.component.css']
})
export class AddDataTableComponent implements OnInit{
  faUser = faUser;

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.form = this.fb.group({
      ingresoMensual: ['', Validators.required],
      precioVehicular: ['', Validators.required],
      cuotaInicial: ['', Validators.required],
      cuotaFinal: ['', Validators.required],
      tna: ['', Validators.required],
      seguroDegravamen: ['', Validators.required],
      seguroVehicularAnual: ['', Validators.required],
      fechaContrato: ['', Validators.required],
      plazo: ['', Validators.required],
      plazoGraciaTotal: ['', Validators.required],
      plazoGraciaParcial: ['', Validators.required],
    });


    this.form.valueChanges.subscribe(()=>{
      this.dataSource[0].value = this.calculateTEA().toString();
      this.dataSource[1].value = this.calculateTEM().toString();
      this.dataSource[2].value = this.calculateSeguroVehicularAnual().toString();
      this.dataSource[3].value = this.calculateCuotaInicial().toString();
      this.dataSource[4].value = this.calculateCuotaFinal().toString();
      this.dataSource[5].value = this.calculateMontoPrestamo().toString();
      this.dataSource[6].value = this.calculateImporteParaCuotas().toString();
    })
  }

  name = 'Willy Valentin';

  displayedColumns: string[] = ['title', 'value'];
  dataSource = ELEMENT_DATA;

  calculateTEA(){
    if(this.form.get('tna')?.value == null ||
      this.form.get('tna')?.value == '') { return 0 }
    let tna = parseFloat(this.form.get('tna')?.value);
    tna = tna/100;
    tna = (((1+(tna/360))**360)-1)*100
    return tna
  }

  calculateTEM(){
    if(this.dataSource[0].value == null ||
       this.dataSource[0].value == '') { return 0 }
    return ((1+(parseFloat(this.dataSource[0].value)/100) )**(30/360)-1)*100
  }

  calculateSeguroVehicularAnual(){
    if(this.form.get('seguroVehicularAnual')?.value == null ||
       this.form.get('seguroVehicularAnual')?.value == '') { return 0 }
    let seguroVA = parseFloat(this.form.get('seguroVehicularAnual')?.value);
    seguroVA = seguroVA/100;
    return ((seguroVA*30)/360)*100
  }

  calculateCuotaInicial(){
    if(this.form.get('precioVehicular')?.value == null ||
      this.form.get('precioVehicular')?.value == '' ||
      this.form.get('cuotaInicial')?.value == null ||
      this.form.get('cuotaInicial')?.value == '' ) { return 0 }

    let precioVehicular = parseFloat(this.form.get('precioVehicular')?.value);
    let cuotaInicial = parseFloat(this.form.get('cuotaInicial')?.value);
    return precioVehicular * (cuotaInicial/100)
  }

  calculateCuotaFinal(){
    if(this.form.get('precioVehicular')?.value == null ||
      this.form.get('precioVehicular')?.value == '' ||
      this.form.get('cuotaFinal')?.value == null ||
      this.form.get('cuotaFinal')?.value == '' ) { return 0 }
  let precioVehicular = parseFloat(this.form.get('precioVehicular')?.value);
  let cuotaFinal = parseFloat(this.form.get('cuotaFinal')?.value);
  return precioVehicular * (cuotaFinal/100)
  }

  calculateMontoPrestamo(){
    if(this.form.get('precioVehicular')?.value == null ||
      this.form.get('precioVehicular')?.value == '' ||
      this.dataSource[3].value == null ||
      this.dataSource[3].value == '' ) { return 0 }
    let precioVehicular = parseFloat(this.form.get('precioVehicular')?.value);
    let cuotaInicial = parseFloat(this.dataSource[3].value);
    return precioVehicular - cuotaInicial
  }

  calculateImporteParaCuotas(){
    //montoPrestamo - cuotaFinal/((1+tem)**(plazo + 1))
    if(this.dataSource[5].value == null ||
       this.dataSource[5].value == '' ||
       this.dataSource[4].value == null ||
       this.dataSource[4].value == '' ||
       this.dataSource[1].value == null ||
       this.dataSource[1].value == '' ||
       this.form.get('plazo')?.value == null ||
       this.form.get('plazo')?.value == '' ) { return 0 }

    let montoPrestamo = parseFloat(this.dataSource[5].value);
    let cuotaFinal = parseFloat(this.dataSource[4].value);
    let tem = parseFloat(this.dataSource[1].value)/100;
    let plazo = parseFloat(this.form.get('plazo')?.value);

    return montoPrestamo - (cuotaFinal/((1+tem)**(plazo + 1)))


  }
}
