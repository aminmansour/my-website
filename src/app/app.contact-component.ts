import {Component} from '@angular/core';
import {InformationProvider} from "app/information-provider.service";
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import {FirebaseListObservable,FirebaseObjectObservable,AngularFireDatabase} from "angularfire2/database";


@Component({
  selector: 'contact',
  templateUrl: './app.contact-component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactComponent {
  form;
  items: FirebaseListObservable < any[] > ;
  countOfSent = 0;
  defaultInputValue = " ";
  isSubmitted: boolean = false;

  constructor(private db: AngularFireDatabase, public infoSource: InformationProvider, private formBuilder: FormBuilder) {
    this.items = db.list('/messages');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control("", Validators.required),
      email: this.formBuilder.control("", Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+")])),
      number: this.formBuilder.control("", Validators.pattern("/+?[0-9]+")),
      message: this.formBuilder.control("", Validators.required)
    });
  }

  onSubmit() {
    if (!this.form.valid||this.countOfSent>=1) {
      this.isSubmitted = true;
      if(this.countOfSent!=0){
        this.countOfSent++;
      }
    } else {
      this.clearSearch();
      this.items.push(this.form.value);
      this.countOfSent++;
    }
  }

  clearSearch(){
    this.defaultInputValue = "";
  }


}
