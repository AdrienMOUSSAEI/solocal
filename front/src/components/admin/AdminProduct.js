import React, { Component } from 'react';
import '../../components/product/ProductList.css';
import noPic from './../../media/img/noPic.png';

 
export default class AdminProduct extends Component {

    constructor (props){
super(props)
this.state={ 
    modalStatus:false,
    id:0,
    products : [],
    page : 1,
    searchWord:"",
    message:"",
    loading : true,
    loading_delete : false,
    loading_edit : false,
    loading_add : false,

    newProduct:{title:"",description:"",price:0,size:"",color:"",category:"",subCategory:"",note:0,creationDate:"2020-12-16T14:17:01.755Z",image:"",additionalProp1:{}},
    

  

}
    }


componentDidMount(){
    this.getProductRequest();
 }

 


 
 
 
getProductRequest() {
    const { page,searchWord } = this.state;
    this.setState({
         loading : true
    });
   // let searchWord=this.props.searchWord;
//this.state.title
    //http://localhost:40/api/products?page=1

    fetch(`http://localhost:40/api/products?page=${page}&title=${searchWord}`)
        .then(response => response.json())
        .then(json => {
            let products = json['hydra:member'];
           // console.log(JSON.stringify(json['hydra:member']));

            if(products.length > 0) {
                this.setState({

                    products : page === 1 ? products : [...this.state.products , ...products],
                    //page : current_page,
                    loading : false

                })
            }
            //console.log('state.products.length='+this.state.products.length );
            //this.setState({ loading : false})

        })
        .catch(error => console.log(error))
}


addProduct() {
    this.setState({
       loading_add : true
   });
  // console.log(JSON.stringify(this.state.newProduct));
   const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(this.state.newProduct)
   };
  
   fetch(`http://localhost:40/api/products`,requestOptions)
       .then(response => response.json())
       .then(json => {


           this.setState({
            loading_add : false,
            id : -1,
            newProduct:{
             title:"",
             price:0,
             size:"",
             color:"",
             description:"",             
             category:"",
             subCategory:"",
             note:0,
             creationDate:"2020-12-16T14:17:01+01:00",
             image:"",
             additionalProp1:{}
    
            }
           });
           
           this.closeModal();

           this.getProductRequest();
           //console.log('state.products.length='+this.state.products.length );
           //this.setState({ loading : false})

       })
       .catch(error => {     this.getProductRequest();        this.closeModal();
        console.log(error)})
}


prepareEditProduct(id,title,price,size,color,description,category){

    this.setState({
        id : id,
        newProduct:{
         title:title,
         price: parseFloat(price) ,
         size:size,
         color:color,
         description:description,
         category:category,
         subCategory:"",
         note:0,creationDate:"2020-12-16T14:17:01.755Z",
         image:"",
         additionalProp1:{}

        }
    });

}

editProduct(id) {
    
   
    if(parseInt(id)<=0)
    {
        alert("please first select product for edit");
        return false;
    }
    this.setState({
        loading_edit : true
    });
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.newProduct)

    };
   
    fetch(`http://localhost:40/api/products/${id}`,requestOptions)
        .then(response => response.json())
        .then(json => {


            this.setState({
                loading_edit : false,
                id : -1,
                newProduct:{
                 title:"",
                 price:0,
                 size:"",
                 color:"",
                 description:"",                
                 category:"",
                 subCategory:"",
                 note:0,
                 creationDate:"2020-12-16T14:17:01+01:00",
                 image:"",
                 additionalProp1:{}
        
                }
            });
            
            //console.log('state.products.length='+this.state.products.length );
            //this.setState({ loading : false})
            this.closeModal();
            this.getProductRequest();


        })
        .catch(error => {this.setState({loading_edit : false});   this.getProductRequest();           this.closeModal();
        console.log(error)} )
}



deleteProduct(id) {
     this.setState({
        loading_delete : true
    });
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
       
    };

    fetch('http://localhost:40/api/products/'+id,requestOptions)
        .then(response => response.json())
        .then(json => {
                       console.log(JSON.stringify(json));

            this.setState({
                loading_delete : false,
                id : -1,
                newProduct:{
                 title:"",
                 price:0,
                 size:"",
                 color:"",
                 description:"",                
                 category:"",
                 subCategory:"",
                 note:0,
                 creationDate:"2020-12-16T14:17:01+01:00",
                 image:"",
                 additionalProp1:{}
        
                }
            });
            this.getProductRequest();

             
        }).catch(error => {this.setState({loading_delete : false}); this.getProductRequest();   console.log(error)} )

}



renderLoading_edit(){
    
        if(this.state.loading_edit)
        {
            return(<span  className="loading">editing.....</span>)
        }
        else{
            return(<span></span>)
        }
 
}

renderLoading_delete(){
    
    if(this.state.loading_delete)
    {
        return(<span  className="loading">removing.....</span>)
    }
    else{
        return(<span></span>)
    }

}

renderLoading_add(){
    
    if(this.state.loading_add)
    {
        return(<span  className="loading">Adding.....</span>)
    }
    else{
        return(<span></span>)
    }

}

renderLabel(){
    
    if(this.state.id>0)
    {
        return(<h5>Edit Product</h5>)
    }
    else{
        return(<h5>Add New Product</h5>)
    }

}



setTitle(val){
    this.setState(prevState => ({
        newProduct: {                  
            ...prevState.newProduct,    
            title: val    
        }
    }))
}
setPrice(val){
    this.setState(prevState => ({
        newProduct: {                  
            ...prevState.newProduct,    
            price: parseFloat(val)     
        }
    }))
}
setSize(val){
    this.setState(prevState => ({
        newProduct: {                  
            ...prevState.newProduct,    
            size: val    
        }
    }))
}
setColor(val){
    this.setState(prevState => ({
        newProduct: {                  
            ...prevState.newProduct,    
            color: val    
        }
    }))
}
setCategory(val){
    this.setState(prevState => ({
        newProduct: {                  
            ...prevState.newProduct,    
            category: val    
        }
    }))
}
setDescription(val){
    this.setState(prevState => ({
        newProduct: {                  
            ...prevState.newProduct,    
            description: val    
        }
    }))
}

openModal(){
this.setState({modalStatus:true});
}

closeModal(){
    this.setState({modalStatus:false});
    }

 renderNewBox()
 {
     if(this.state.modalStatus)
     {
        return(
            <div className="backgroundMask">


<div className="productSubmitCan">
                       
                       <div>{this.renderLabel()}</div>

                      <div>
                      <img src={noPic}  className="productImg"  ></img>

                      </div>
                      
                      <div> 
                      <input type="text" className="formInputText" value={this.state.newProduct.title} onChange={(event)=>this.setTitle(event.target.value)}  placeholder="product name"></input>
              
                      </div>
              
                      <div> 
                      <input type="number" className="formInputText"  value={this.state.newProduct.price} onChange={(event)=>this.setPrice(event.target.value)}  placeholder="product price"></input>
              
                      </div>
              
                      <div> 
                      <input type="text" className="formInputText"  value={this.state.newProduct.color} onChange={(event)=>this.setColor(event.target.value)}  placeholder="product color"></input>
              
                      </div>
                      <div> 
                      <input type="text" className="formInputText"  value={this.state.newProduct.size} onChange={(event)=>this.setSize(event.target.value)}  placeholder="product size"></input>
              
                      </div>
                      <div> 
                      <input type="text" className="formInputText"  value={this.state.newProduct.category} onChange={(event)=>this.setCategory(event.target.value)}  placeholder="category"></input>
              
                      </div>
                      <div> 
                      <textarea type="text" className="formInputText"  value={this.state.newProduct.description}  onChange={(event)=>this.setDescription(event.target.value)}  placeholder="description">
                        
                        </textarea>
              
                      </div>
                     
              
                      <div className="flexRowSpace">
                      <input type="button" onClick={()=> this.addProduct()} value="ADD New Product" ></input>
                        <input type="button" onClick={()=> this.editProduct(this.state.id)} value="Submit Edit" ></input>
              
                        <input type="button" onClick={()=> this.closeModal()} value="Close" ></input>
          
                    </div>
                       
                    <div>{this.renderLoading_edit()}</div>
              
                        <div>{this.renderLoading_add()}</div>
              
              
              
              </div>
              



            </div>
  
    
    
    
        );
     }
     else{
         return(<div></div>)
     }


 }




render(){

    const { products,loading,loading_edit,loading_delete } = this.state;

      if(loading)
      {
          return(
<div className="loading">Loading...</div>

          )
      }
      else{
        return (
            <div style={{flex:1}}>
    
    <div>
                    <input type="text" className="searchTxt" value={this.state.searchWord} onChange={(event)=>this.setState({searchWord:event.target.value})}  placeholder="search word"></input>
                   <input type="button" className="searchBtn" onClick={()=> this.getProductRequest()} value="search" ></input>
                
                   <input type="button" className="newProductBtn" onClick={()=> this.openModal()} value="Add New Product" ></input>

                
                </div>
    
     
    <div className="productListCan">
              {products.map(item => (
                  <div id={item.id} className="productItem" > 

<img src={noPic}></img>

<h2>
                   {item.title}
                </h2>
                <h3>
                   {item.price} $
                </h3>

                <div className="flexRowSpace">
<span>{item.color}</span>
<span>{item.size}</span>
<span>{item.category}</span>


                </div>
                 <div className="flexRowSpace">
                 <input type="button" className="editProductBtn" onClick={()=> {this.openModal(); this.prepareEditProduct(item.id,item.title,item.price,item.size,item.color,item.description,item.category)}} value="edit" ></input>
                <input type="button" className="deleteProductBtn" onClick={()=> this.deleteProduct(item.id)} value="delete" ></input>
             
                </div>
                 

               


                </div>
              ))}
            </div>
              
            <div>{this.renderLoading_delete()}</div>
    
{this.renderNewBox()}


              
            </div>



    
    
    
        )
    
      }
















}


}