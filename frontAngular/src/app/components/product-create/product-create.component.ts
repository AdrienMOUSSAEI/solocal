import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MediaService } from 'src/app/services/mediaobject.service';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.sass']
})
export class ProductCreateComponent implements OnInit {
  product: Article;
  submitted = false;
  selectedFile = null;

  constructor(private productService: ProductService, private mediaService: MediaService) { }

  ngOnInit(): void {
    this.product = {} as Article;
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  createProduct(): void {
    const data = this.product;
    this.mediaService.create(this.selectedFile, this.selectedFile.name)
      .subscribe(re => {
        data.imageFile=re["@id"];
        data.image=re["@id"];
        data.creationDate=this.mediaService.formatDate();
        data.additionalProp1={};
        this.productService.create(data)
          .subscribe(
            response => {
              console.log(response);
              this.submitted = true;
            },
            error => {
              console.log(error);
            });
      }, err => {
        console.log(err);
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {} as Article;
  }

}