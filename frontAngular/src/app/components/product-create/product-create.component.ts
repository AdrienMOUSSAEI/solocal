import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Article } from 'src/app/core/models/article';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.sass']
})
export class ProductCreateComponent implements OnInit {
  product: Article;
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product  = {} as Article;
  }

  createProduct(): void {
    const data =this.product;

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {} as Article;
  }

}