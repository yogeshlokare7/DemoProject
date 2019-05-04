import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Customer } from 'src/app/models/customer';
import { SalesOrderDto } from 'src/app/models/sales-order-dto';
import { Product } from 'src/app/models/product';
import { ProductItem } from 'src/app/models/product-item';
import { SalesOrder } from 'src/app/models/sales-order';
import { SalesOrdersService } from 'src/app/services/sales-orders.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { ProductItemService } from 'src/app/services/product-item.service';
import { SalesItem } from 'src/app/models/sales-item';
import { SalesItemDto } from 'src/app/models/sales-item-dto';
import { Location } from '@angular/common';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';


@Component({
  selector: 'app-create-sales-order',
  templateUrl: './create-sales-order.component.html',
  styleUrls: ['./create-sales-order.component.css']
})

export class CreateSalesOrderComponent implements OnInit {

  customers: Customer[];
  salesOrderForm: FormGroup;
  salesOrderDto: SalesOrderDto;
  billingAddress: string;
  shippingAddress: string;
  products: Product[];
  product: Product;
  customeremail: string;
  productItemList: ProductItem[];
  productItem: ProductItem;
  selectedCustomer: Customer;
  salesOrderNo: string;
  salesOrder: SalesOrder;
  length: number = 0;
  orderDate = new Date();
  minDate = new Date();
  id:number;
  cmpId : number;

  constructor(private salesOrdersService: SalesOrdersService,
    private customerService: CustomerService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productItemService: ProductItemService,
    private tokenService: TokenStorageService,
    private dialog: MatDialog,
    private location: Location) {
      this.cmpId = this.tokenService.getCompanyId();
  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams["id"];
    if (this.id != null && this.id > 0) {
      this.getFullSOInformation(this.id);
    }
    this.getCustomers();
    this.getProductItems();
    this.createForm();
  }

  getFullSOInformation(id:number){
    this.salesOrdersService.getSalesOrder(id).subscribe(data=>{
      this.salesOrder = data;
      this.setForm(this.salesOrder);
      this.minDate = this.salesOrder.orderdate;
      this.orderDate = this.salesOrder.orderdate;
    })
  }

  setForm(salesOrder:SalesOrder):void {
    const taxPercent = (salesOrder.tax * 100 / salesOrder.subtotal);
    this.salesOrderForm.patchValue({
      id: salesOrder.id,
      salesorderno: salesOrder.salesorderno,
      reference: salesOrder.reference,
      orderdate: salesOrder.orderdate,
      expecteddate: salesOrder.expecteddate,
      salesperson: salesOrder.salesperson,
      shipvia: salesOrder.shipvia,
      status: salesOrder.status,
      subtotal: salesOrder.subtotal,
      tax: salesOrder.tax,
      taxpercent: taxPercent.toFixed(2),
      total: salesOrder.total,
      notes: salesOrder.notes,
      terms: salesOrder.terms,
      packaged: salesOrder.packaged,
      shiped: salesOrder.shiped,
      invoiceno:salesOrder.invoiceno,
      customerid: salesOrder.customerid.id,
    })
    this.setItemTableValue(this.salesOrder.salesItemsCollection);
    this.selectedCustomer = salesOrder.customerid;
    this.customeremail = salesOrder.customerid.emailid;
    this.billingAddress = this.selectedCustomer.billstreetno + " " + this.selectedCustomer.billstreetname + "\n" + this.selectedCustomer.billcity + " " + this.selectedCustomer.billstate + " " + this.selectedCustomer.billpostalcode;
    this.shippingAddress = this.selectedCustomer.shipstreetno + " " + this.selectedCustomer.shipstreetname + "\n" + this.selectedCustomer.shipcity + " " + this.selectedCustomer.shipstate + " " + this.selectedCustomer.shippostalcode;
  }

  setItemTableValue(items: SalesItem[]) {
    var arr = [];
    let totalQuantity = 0;
    for (var i = 0; i < items.length; i++) {
      arr.push(this.buildItem(items[i]));
      totalQuantity += items[i].quantity;
    }
    const addressFormArray = this._formBuilder.array(arr);
    this.salesOrderForm.setControl('orderedItems', addressFormArray);
  }

  buildItem(item: SalesItem): FormGroup {
    return this._formBuilder.group({
      id: [item.id],
      barcode: [item.itemid.barcode],
      itemid: [item.itemid.id],
      productid: [item.productid],
      productname:[item.productname],
      quantity: [item.quantity],
      unit: [item.itemid.productid.unit],
      rate: [item.rate],
      discount: [item.discount],
      amount: [item.amount],
    })
  }

  setValue() {
    this.salesOrderForm.patchValue({
      salesorderno: this.salesOrderNo
    })
  }

  getCustomers(): void {
    this.customerService.getCustomerList(this.cmpId).subscribe(result => {
      this.customers = result;
    }, err=> {

    })
  }

  getProductItems(): void {
    this.productItemService.getProductItems().subscribe(result => {
      this.productItemList = result;
    })
  }

  createForm(): void {
    this.salesOrderForm = this._formBuilder.group({
      id: '',
      salesorderno: ['', Validators.required],
      reference: ['', Validators.required],
      orderdate: [this.orderDate, Validators.required],
      expecteddate: ['', Validators.required],
      salesperson: ['', Validators.required],
      shipvia: ['', Validators.required],
      status: [''],
      subtotal: ['0.0'],
      tax: ['0.0'],
      taxpercent: ['0.0'],
      total: ['0.0'],
      notes: [''],
      terms: [''],
      packaged: [''],
      shiped: [''],
      invoiceno:[''],
      customerid: [''],
      orderedItems: this._formBuilder.array([this.initAddress()])
    })
  }

  get orderedItems(): FormArray {
    return this.salesOrderForm.get('orderedItems') as FormArray;
  };

  removeAddress(i: number) {
    const control = <FormArray>this.salesOrderForm.controls['orderedItems'];
    control.removeAt(i);
    this.setTotalValue();
    this.applyTax();
  }

  addLair() {
    this.orderedItems.push(this._formBuilder.group({
      id: '',
      barcode: '',
      itemid: '',
      productid: '',
      productname: '',
      quantity: '1',
      unit: '',
      rate: '',
      discount: '0.00',
      amount: '',
    }));
  }


  initAddress() {
    return this._formBuilder.group({
      id: '',
      barcode: '',
      itemid: '',
      productid: '',
      productname: '',
      quantity: '1',
      unit: '',
      rate: '',
      discount: '0.00',
      amount: '',
    });
  }

  choosedCustomer(id:number) {
    this.selectedCustomer = this.customers.find(x => x.id === id);
    this.customeremail = this.selectedCustomer.emailid;
    this.billingAddress = this.selectedCustomer.billstreetno + " " + this.selectedCustomer.billstreetname + "\n" + this.selectedCustomer.billcity + " " + this.selectedCustomer.billstate + " " + this.selectedCustomer.billpostalcode;
    this.shippingAddress = this.selectedCustomer.shipstreetno + " " + this.selectedCustomer.shipstreetname + "\n" + this.selectedCustomer.shipcity + " " + this.selectedCustomer.shipstate + " " + this.selectedCustomer.shippostalcode;
  }

  scanBarcode(i: number) {
    const formModel = this.salesOrderForm.value;
    const barcodeId = formModel.orderedItems[i].barcode;
    this.productItem = this.productItemList.find(x => x.barcode == barcodeId);
    if (this.productItem != null) {
      this.product = this.productItem.productid;
      const control = <FormArray>this.salesOrderForm.controls['orderedItems'];
      const amt = (formModel.orderedItems[i].quantity * this.product.sellingPrice);
      control.at(i).patchValue({
        itemid: this.productItem,
        productid: this.product.id,
        productname: this.product.productName,
        rate: this.product.sellingPrice,
        amount: amt,
        unit: this.product.unit
      })
    } else {
      const control = <FormArray>this.salesOrderForm.controls['orderedItems'];
      control.at(i).patchValue({
        itemid: '',
        productid: '',
        productname: '',
        rate: '',
        amount: '',
        unit: ''
      })
    }
    this.setTotalValue();
    this.applyTax();
  }

  setTotalValue(){
    const formModel2 = this.salesOrderForm.value;
    let arrlength = this.orderedItems.length;
    let subtotalAmt = 0.0;
    let totalAmt = 0.0;
    for (let k = 0; k < arrlength; k++) {
      subtotalAmt += parseFloat(formModel2.orderedItems[k].amount);
    }
    totalAmt = (subtotalAmt + parseFloat(formModel2.tax));
    let subTotal = subtotalAmt;
    this.salesOrderForm.patchValue({
      subtotal: subTotal.toFixed(2),
      total: totalAmt.toFixed(2),
    })
  }

  applyDiscount(i: number) {
    const formModel = this.salesOrderForm.value;
    const barcodeId = formModel.orderedItems[i].barcode;
    this.productItem = this.productItemList.find(x => x.barcode == barcodeId);
    this.product = this.productItem.productid;
    let originalAmount = formModel.orderedItems[i].quantity * this.product.sellingPrice;
    const control = <FormArray>this.salesOrderForm.controls['orderedItems'];
    let amt = (originalAmount) - (formModel.orderedItems[i].discount * originalAmount / 100);
    let amt2 = amt.toFixed(2);
    control.at(i).patchValue({
      amount: amt2,
    })
    this.setTotalValue();
    this.applyTax();
  }

  applyTax() {
    const formModel = this.salesOrderForm.value;
    let subTotal = formModel.subtotal;
    let taxPercent = formModel.taxpercent;
    let taxValue = (subTotal * taxPercent / 100);
    let totalAmount = parseFloat(subTotal + taxValue);
    this.salesOrderForm.patchValue({
      tax: taxValue.toFixed(2),
      total: totalAmount.toFixed(2),
    })
  }

  confirmAdd(type: string): void {
    this.salesOrderDto = this.preparedSaveSalesOrder();
    this.salesOrderDto.status = type;
    this.salesOrdersService.addSalesOrder(this.salesOrderDto);
  }

  preparedSaveSalesOrder(): SalesOrderDto {
    const formModel = this.salesOrderForm.value;

    const salesItemDeepCopy: SalesItemDto[] = formModel.orderedItems.map(
      (salesItem: SalesItemDto) => Object.assign({}, salesItem)
    );

    const saveSalesOrder: SalesOrderDto = {
      id: formModel.id as number,
      salesorderno: formModel.salesorderno as string,
      reference: formModel.reference as string,
      orderdate: formModel.orderdate as Date,
      expecteddate: formModel.orderdate as Date,
      salesperson: formModel.salesperson as string,
      shipvia: formModel.shipvia as string,
      status: formModel.status as string,
      subtotal: formModel.subtotal as number,
      tax: formModel.tax as number,
      total: formModel.total as number,
      notes: formModel.notes as string,
      terms: formModel.terms as string,
      customerid: formModel.customerid as number,
      packaged: formModel.packaged as string,
      shiped: formModel.shiped as string,
      invoiceno:formModel.invoiceno as string,
      salesItemsCollection: salesItemDeepCopy
    };
    return saveSalesOrder;
  }



  goBack() {
    this.location.back();
  }

}


