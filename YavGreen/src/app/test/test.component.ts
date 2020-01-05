import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  qrcodename : string;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href : string;
  generateQRCode(){
    if(this.qrcodename == ''){
      this.display = false;
      alert("Please enter the name");
      return;
    }
    else{
      this.value = this.qrcodename;
      this.display = true;
    }
  }
  downloadImage(){
    this.href = document.getElementsByTagName('img')[0].src;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  constructor() { }

  ngOnInit() {
  }

}
