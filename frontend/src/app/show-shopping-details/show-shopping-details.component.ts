import {Component} from '@angular/core';
import {DataService} from '../services/data.service';
import {ConfirmationService,MessageService,ConfirmEventType} from 'primeng/api';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-show-shopping-details',
  templateUrl: './show-shopping-details.component.html',
  styleUrls: ['./show-shopping-details.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ShowShoppingDetailsComponent {

  shoppingDetails!: any[]
  position!: any
  confirmationInProgress!: boolean
  visible: boolean = false;
  first: number = 0;
  rows: number = 10;
  totalRecords!: any
  page: number = 1
  pageSize: number = 10


  constructor(private dataService: DataService, private confirmationService: ConfirmationService, private messageService: MessageService) {}

  prerequisite() {
    this.getData()
    this.getCount()
  }


  ngOnInit() {
    this.prerequisite()
  }

  getData() {
    this.dataService.getShoppingDetails(this.page, this.pageSize).subscribe(data => {
      this.shoppingDetails = data
    })

  }

  editDetails(uuid: number) {
    console.log(uuid)
    this.dataService.uuid = uuid
    this.dataService.isDisabled = true
  }

  delete(uuid: number) {
    console.log("uuid", uuid);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?', // Message shown in the confirmation dialog
      header: 'Confirmation', // Header of the confirmation dialog
      icon: 'pi pi-exclamation-triangle', // Icon displayed in the dialog header
      accept: () => {
        console.log("here");

        // This callback is executed when the user clicks the "Yes" button
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Deleted successfully'
        });
        this.dataService.deleteDetail(uuid).subscribe(val => {
          console.log(val);

          this.getData()

        })

        this.confirmationService.close()
      },
      reject: (type: ConfirmEventType) => {

        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'Delete unsuccessful'
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled'
            });
            break;
        }
        this.confirmationInProgress = false;
        this.confirmationService.close()
      }

    });


  }

  getCount() {
    this.dataService.countNo().subscribe(val => {
      this.totalRecords = val[0].count
      console.log(this.totalRecords, val);

    })
  }

  onPageChange(event: any) {
    console.log(event);

    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + 1
    this.pageSize = event.rows
    this.getData()
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
}
