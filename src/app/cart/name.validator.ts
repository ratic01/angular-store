import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";


export function nameValidator(control:AbstractControl):ValidationErrors| null{
    if (!control.value) {
        return null; // Return null if the control value is empty
    }
    const nameIsCorrect=
            control.value.split('').filter((np: any)=>np!=='').length>1;
    return nameIsCorrect ? null : {incorrectName:true};
}