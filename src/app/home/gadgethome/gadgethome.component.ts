import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistributedserviceService } from 'src/app/Services/distributedservice.service';
import { Product } from 'src/app/distrbuted';
import { NavigationComponent } from 'src/app/nav/navigation/navigation.component';
@Component({
  selector: 'gadgethome',
  templateUrl: './gadgethome.component.html',
  styleUrls: ['./gadgethome.component.css']
})
export class GadgethomeComponent implements OnInit {

  
  products!: Product[];
  
  // products: any = [
  //   {'image':'https://rukminim2.flixcart.com/image/400/400/l4pxk7k0/usb-gadget/g/8/v/dlk5526cg-11-philips-original-imagfjxzfsgu7nvu.jpeg?q=70','name':'USB Gadgets','price':'500','class':'bi bi-currency-rupee',isFav:false,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/200/200/kzzw5u80/keyboard/multi-device-keyboard/o/2/d/km3322w-km3322w-keyboard-mouse-combo-anti-fade-spill-resistant-original-imagbvyatqteauf2.jpeg?q=70','name':'Wireless Keyborad & Mouse','price':'1500','class':'bi bi-currency-rupee',isFav:true,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/200/200/kmp7ngw0/monitor/p/b/s/s2421hn-24-kvmtc-dell-original-imagfjphb5ytsfkj.jpeg?q=70','name':'Moniter','price':'50000','class':'bi bi-currency-rupee',isFav:false,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/u/q/-original-imagz69gstmvubhj.jpeg?q=70','name':'Smart Watch','price':'2500','class':'bi bi-currency-rupee',isFav:false,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/612/612/k0cqqvk0/smart-glass/y/7/2/virtual-reality-3d-vr-box-for-all-smartphones-upto-6-inches-jayk-original-imaeryezh9hgruzg.jpeg?q=70','name':'VR Box','price':'5000','class':'bi bi-currency-rupee',isFav:true,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/612/612/xif0q/bp-monitor/r/f/q/automatic-accurate-digital-blood-pressure-machine-homely-cport-original-imaghe8zkhqnafd5.jpeg?q=70','name':'BP Moniter','price':'7000','class':'bi bi-currency-rupee',isFav:false,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/612/612/jwfa5jk0/pendrive/pendrive/z/f/p/sandisk-sdcz50-128g-i35-original-imafh3xkevktvq4w.jpeg?q=70','name':'San Disk Pendrive','price':'350','class':'bi bi-currency-rupee',isFav:false,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/2/h/7/-original-imagm2gtrm4h7nnu.jpeg?q=70','name':'Mouse','price':'240','class':'bi bi-currency-rupee',isFav:false,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/312/312/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70','name':'Apple Ipad','price':'15500','class':'bi bi-currency-rupee',isFav:true,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/612/612/kiqbma80-0/speaker/soundbar/l/l/o/aavante-bar-3100d-boat-original-imafygcgjbcerj7f.jpeg?q=70','name':'Home Theater','price':'8500','class':'bi bi-currency-rupee',isFav:false,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/a/w/airbass-airpods-48-h-playtime-fast-charging-pro-calling-ipx5-original-imagtads57gdn9j6.jpeg?q=70','name':'Air Buds','price':'1300','class':'bi bi-currency-rupee',isFav:true,innerhtml:''},
  //    {'image':'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/0/s/16-s0095ax-gaming-laptop-hp-original-imagsn4eepm7trbu.jpeg?q=70','name':'HP Vitcus','price':'75000','class':'bi bi-currency-rupee',isFav:false,innerhtml:''}
  //   ]
    innerhtml = "favorite_border";
    counter =0;
    Pagination: number = 1;
    size =0;


    // like(index:number){
    //   // alert(index);
    //   if(this.products[index].isFav == true){
    //     this.products[index].isFav = false;
    //     this.products[index].innerhtml ="favorite_border";
    //     this.counter--;
    //     //this.service.getbadge(this.counter);
    //    // this.route.navigateByUrl('nav');
    //     this.nav.badgecount = this.counter;
    //   }
    //   else
    //   {
    //     this.products[index].isFav = true;
    //     this.counter++;
    //     this.products[index].innerhtml= "favorite"
    //     // alert(this.counter);
    //     this.nav.badgecount = this.counter;

    //   }
    // }
    // isFavorite(){
    //   for (let index = 0; index < this.products.length; index++) {
    //     if(this.products[index].isFav == true){
    //       this.counter++;
    //       this.products[index].innerhtml= "favorite";

    //     }
    //     else
    //     {
    //       this.products[index].innerhtml ="favorite_border";
    //     }
    //   }
    //   // alert(this.counter);
    //   }
    constructor(private service:DistributedserviceService,private route:Router,private nav:NavigationComponent){}

    ngOnInit(): void {
      // this.isFavorite();
     //this.service.getbadge(this.counter);
     this.service.getproducts().subscribe((product:any)=>{
      this.products = product.products
      this.size = this.products.length
      console.log(product.products.length);});
    }




}
