import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{

  formularioContacto: FormGroup
  tipoDni: string = 'DNI'
  usuarioActivo: any = {
    nombre:"Pedro",
    apellido:'Perez',
    dni:'34091442'
  }

  constructor(private form: FormBuilder){

    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''], 
      email: ['', [Validators.email, Validators.required]]
    })

  }
  ngOnDestroy(): void {
    console.log("Se destruyó el componente")
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formularioContacto)
  }
/*
  ngOnInit(): void {
    this.formularioContacto.patchValue({
      nombre:this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni
    })
    this.formularioContacto.get('nombre')?.disable()
    this.formularioContacto.get('apellido')?.disable()
    this.formularioContacto.get('dni')?.disable()
  }*/
/*
  ngOnInit(): void {
    this.formularioContacto.valueChanges.subscribe(valor=>{
      console.log(valor)
    })
  }*/

  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value=>{
      this.tipoDni = value
    })
  }

  
  

}
