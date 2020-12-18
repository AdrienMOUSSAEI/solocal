import React, { Component } from 'react';
import './ProductList.css';

import noPic from './../../media/img/noPic.png';

export default class Productlist extends Component {

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
    newProduct:{title:"",description:"",price:0,size:"",color:"",category:"",subCategory:"",note:0,creationDate:"2020-12-16T14:17:01.755Z",image:"",additionalProp1:{}},

  

}
    }


componentDidMount(){
    this.getProductRequest();
}

openModal(){
    this.setState({modalStatus:true});
    }
    
    closeModal(){
        this.setState({modalStatus:false});
        }
    

prepareDetailsProduct(id,title,price,size,color,note,description,category){

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
         note:note,
         creationDate:"2020-12-16T14:17:01.755Z",
         image:"",
         additionalProp1:{}

        }
    });

 
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

renderDetailsBox()
 {
     if(this.state.modalStatus)
     {
        return(
            <div className="backgroundMask">


<div className="productSubmitCan">
                       
                       

                      <div>
                      <img src={noPic}  className="productImg"  ></img>

                      </div>
                      
                      <div> 
                          <span className="label0">title : </span>
                          <span>{this.state.newProduct.title}</span>
                   
                      </div>
              
                      <div> 
                      <span className="label0">note : </span>
                          <span>{this.state.newProduct.note}</span>
                      
                      </div>

                      <div> 
                      <span className="label0">price : </span>
                          <span>{this.state.newProduct.price}</span>
                      
                      </div>
              
                      <div> 
                      <span className="label0">color : </span>
                          <span>{this.state.newProduct.color}</span>
               
                      </div>
                      <div> 
                      <span className="label0">size : </span>
                          <span>{this.state.newProduct.size}</span>
                  
                      </div>
                      <div> 
                      <span className="label0">category : </span>
                          <span>{this.state.newProduct.category}</span>
                       
                      </div>
                      <div> 
                      <span className="label0">description : </span>
                          <span>{this.state.newProduct.description}</span>
                      
              
                      </div>
                     
              
                      <div className="flexRowSpace">
                      
                        <input type="button" onClick={()=> this.closeModal()} value="Close" ></input>
          
                    </div>
                       
                   
              
              
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
                </div>
    
     
    <div className="productListCan">
              {products.map(item => (
                  <div id={item.id} className="productItem" > 

<img src={noPic}></img>

<h2>
                <span className="label0">title:</span>   {item.title}
                </h2>
                <h3>
                <span className="label0">price:</span>
                   {item.price} $
                </h3>
                <h4>
                <span className="label0">note:</span>
                   {item.note} 
                </h4>
                <div className="flexRowSpace">
<span><span className="label0">color:</span>{item.color}</span>
<span><span className="label0"> size:</span>{item.size}</span>
<span><span className="label0">category:</span>{item.category}</span>


                </div>
                <div>
                <input type="button" className="editProductBtn" onClick={()=> {this.openModal(); this.prepareDetailsProduct(item.id,item.title,item.price,item.size,item.color,item.note,item.description,item.category)}} value="details" ></input>
                </div>
             

               


                </div>
              ))}
            </div>
              
    
            {this.renderDetailsBox()}


            </div>



    
    
    
        )
    
      }
















}


}