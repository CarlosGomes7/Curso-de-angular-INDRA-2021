Informacion util para los decoradores Input y Output
https://medium.com/williambastidasblog/angular-decoradores-input-y-output-70af5f43a04

https://medium.com/angular-chile/comunicaci%C3%B3n-entre-componentes-explicado-con-dragon-ball-z-angular-7-parte-1-f1c67f745515


Nota:
Las interfaces en Typecript estrictamente no tienen valor, ya que son entidades que solo existen para la verificación de tipos y no se compilan en JS.

No se puede definir un decorador en una interfaz porque el decorador tiene valor . Es una función que toma un argumento y le da valor a la propiedad de la clase, no un tipo.

Los @Inputdecoradores de Angular sí tienen un tipo, pero es imposible escribirlos en una clase de orden inferior ya que esa propiedad ya es un tipo, pero el decorador le da un valor :

ejemplo

export interface ITest {

  prop: Input;
  prop2: InputDecorator;

}

export class Test implements ITest {

  @Input('thing') prop: string;
  @Input('thing2') prop2: string;

}

// typeerror: Test does not correctly implement ITest