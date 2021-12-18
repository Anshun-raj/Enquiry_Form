import { FormControl,FormGroup } from '@angular/forms';
import { Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "FirstProject";
EnquiryForm=new FormGroup({
   name:new FormControl("",[Validators.required,Validators.minLength(3)]),
   age:new FormControl(""),
   address:new FormControl("",Validators.required),
   state:new FormControl(""),
   pincode:new FormControl(""),
 });
 getData()
 {
   console.log(this.EnquiryForm.controls['name'].value);
   console.log(this.EnquiryForm.controls['age'].value);
   console.log(this.EnquiryForm.controls['address'].value);
   console.log(this.EnquiryForm.controls['state'].value);
   console.log(this.EnquiryForm.controls['pincode'].value);
 }
}
