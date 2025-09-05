import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  miFormulario: FormGroup

  constructor(private fb: FormBuilder){
    this.miFormulario = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      contrasenia: ['',[Validators.required, Validators.minLength(6) ]],
      fechaNacimiento: [,[Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      pesoKilogramos: [, [Validators.required, Validators.min(5)]]
    })

  }

  enviar(e: Event){
    e.preventDefault()
    console.log(this.miFormulario)
    alert(`To nombre es ${this.miFormulario.value.nombre}, pesás ${this.miFormulario.value.pesoKilogramos}kg y naciste el ${this.miFormulario.value.fechaNacimiento}`)
  }

  hasErrors(controlName: string, errorType: string){
    return this.miFormulario.get(controlName)?.hasError(errorType) && this.miFormulario.get(controlName)?.touched
  }

}
