import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manipulate-details',
  templateUrl: './manipulate-details.component.html',
  styleUrls: ['./manipulate-details.component.css']
})
export class ManipulateDetailsComponent {
  detailsForm!:any
  isDisabled:boolean=this.dataService.isDisabled
  values!:any
  total!:number
  isInvalid:boolean=false
  

  constructor(private fb:FormBuilder,private dataService:DataService,private router:Router,private messageService:MessageService){}

  prerequisite(){
    this.createDetailsForm()
    this.editForm()
  }

  ngOnInit(){
    this.prerequisite()
  }

  createDetailsForm(){
    this.detailsForm=this.fb.group({
      uuid:[{value:'',disabled:true}],
      product_name:[{value:'',disabled:this.dataService.isDisabled},[
        Validators.required,
        Validators.maxLength(25)
      ]],
      description:[{value:'',disabled:this.dataService.isDisabled},[
        Validators.required,
        Validators.maxLength(100)
      ]],
      price:[0],
      qty:[0],
      total:[{value:'',disabled:true}]
    })
  }

  get detailsFormControls(){
    return this.detailsForm.controls
  }

  save(){
    console.log(this.detailsForm);
    if(!this.detailsForm.invalid){
      
    const details={
      product_name:this.detailsFormControls.product_name.value,
      description:this.detailsFormControls.description.value,
      price:this.detailsFormControls.price.value,
      qty:+this.detailsFormControls.qty.value,
    }
    console.log("details",details.price, typeof(details.price) ,details.qty);
    
    if(this.isDisabled){
      this.dataService.editShoppingDetails(this.dataService.uuid,details).subscribe(val=>{
        console.log(val);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited successfully' });
      })
    }
    else{
    this.dataService.addShoppingDetails(details).subscribe(val=>{
      console.log(val);
    })
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added successfully' });
  }
  
  
  setTimeout(() => {
    this.router.navigate(["/"]).then(() => {
      console.log("Navigated");
    });
  }, 1500);
}
else{
  this.isInvalid=true
}
    
  }

 editForm(){
  if(this.dataService.uuid && this.isDisabled){
    //this.isDisabled=true
      console.log(this.dataService.uuid);
      
       this.dataService.patchShoppingDetails(this.dataService.uuid).subscribe(val=>{
       this.values=val
       this.detailsForm.patchValue({
            uuid:this.values[0].uuid,
            product_name: this.values[0].product_name,
            description: this.values[0].description,
            price: this.values[0].price,
            qty: this.values[0].qty,
            total: this.values[0].total,
        })  
      })
  
}
}

updateTotal(e:any){
  console.log(this.detailsFormControls.price.value);
  
  this.detailsForm.patchValue({
    total:(this.detailsFormControls.price.value * this.detailsFormControls.qty.value).toFixed(2)
  })
}

  cancel(){
    this.dataService.isDisabled=false
  }
}
