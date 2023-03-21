import {LocalStorageService} from "../../services/local-storage.service";
import {AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Customer} from "../Model/Customer";
import {Injectable} from "@angular/core";

@Injectable()
export class ValidatorCustomer {
  constructor() {
  }



 static ValidatorName(control:FormControl){

      return !hasNameInDatabase(control.value) ? null : {uniqe: "not uniqe"}

  }

  static ValidatorLastName(g: FormControl) {


    return !hasLastNameInDatabase(g.value)? null : {uniqe: "not uniqe"}

  }

  static ValidtorDataBirth(g: FormControl) {


    return !hasdateOfBirthInDatabase(g.value)? null : {uniqe: "not uniqe"}

  }


}
export function hasNameInDatabase(FirstName: string): boolean {

  const ls = new LocalStorageService();
  let hasName = false;
  const customers = ls.getCustomers();

  customers.forEach((item: Customer) => {

    if (item._firstname == FirstName) {
      hasName = true;
    }
  })

  return hasName;
}

export function hasLastNameInDatabase(LastName: string): boolean {
  if (!LastName) {
    return false;
  }
  let hasName = false;
  const ls = new LocalStorageService();

  ls.getCustomers().forEach(item => {
    if (item._lastName == LastName) {
      hasName = true;
    }
  })
  return hasName;
}

export function hasdateOfBirthInDatabase(dateOfBirth: Date): boolean {
  if (!dateOfBirth) {
    return false;
  }
  const ls = new LocalStorageService();

  let hasdateOfBirth = false;
  ls.getCustomers().forEach(item => {
    if (item._dateOfBirth == dateOfBirth) {
      hasdateOfBirth = true;
    }
  })
  return hasdateOfBirth;
}

