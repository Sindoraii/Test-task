export function startValidation(formValue) {
    let errors = [];

   for (let key in formValue) {
       if(formValue[key] === '') {
           let error = {
               message: `${key} is empty`,
               field: key
           }
           errors.push(error);
       }
   }
    return errors;
}
