import React, { Component } from 'react';
import data from '../data/data.json';
import EachProduct from './eachProduct';
import '../css/staff.css'
class Staff extends Component {
    state = {
        data:data,
        checkoutProducts:[]
    }
    constructor(props) {
        super(props);
        this.handleCustomerProducts = this.handleCustomerProducts.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.loadProductsData(true);
    }

    // default render of html elements when website loads
    render() {
        return (
            <div>
                <h3 className="sales">Staff</h3>
                <center>
                <h3 className="upload-text">Wanted to update the Products Details ?</h3>
                <button onClick={() => {document.getElementById("file").click()}} className="upload-file">Upload the File</button>
                <input type="file" onChange = { (event) => this.handleFileChange(event.target.files)} className="file" id="file" accept="application/JSON" />
                </center>
                <div className="complete-products">
                <div className="product-heading">  
                    <h3 className="sno">S.No.</h3>
                    <h3 className="code">Code</h3>
                    <h3 className="name">Name</h3>
                    <h3 className="price">Price</h3>
                    <button className="remove-btn-heading">-</button>
                    <h3 className="count">Count</h3>
                    <button className="add-btn-heading">+</button>
                </div>
                {this.displayProducts()}
                </div>
                <button className="checkout-btn" onClick = {this.checkout}>Checkout</button>
            </div>
        );
    }
    // called initially when the website loads and when a new JSON file is uploaded
    loadProductsData = (isDefault) => {
        let tempProducts = [];
        if(this.state.data.length > 0) {
            for(let i = 0; i<this.state.data.length ; i++) {
                if(this.state.data[i].Code && this.state.data[i].Name && this.state.data[i].Price) {
                    tempProducts.push({
                        noOfSelected:0,
                        Code:this.state.data[i].Code,
                        Name:this.state.data[i].Name,
                        Price:this.state.data[i].Price
                    })
                }
                else {
                    alert("Invalid Data Provided");
                    window.location.reload();
                }
            }
        }
        else {
            alert("No Data Present");
            window.location.reload();
        }
        if(!isDefault) {
            this.setState({
                checkoutProducts:tempProducts
            })
        }
        else {
            this.state.checkoutProducts = tempProducts;
        }
    }

    // called when product is added or removed from eachproduct.js file
    handleCustomerProducts = (code,isAdded,index) =>{
        let tempProducts = this.state.checkoutProducts;
        if(isAdded)
            tempProducts[index].noOfSelected = tempProducts[index].noOfSelected + 1;
        else
            tempProducts[index].noOfSelected = tempProducts[index].noOfSelected > 0 ? tempProducts[index].noOfSelected - 1 : 0;
        
        if(code === "VOUCHER") {
            if(tempProducts[index].noOfSelected > 1) {
                    tempProducts[index].discountAdded = true;
            }
            else {
                tempProducts[index].discountAdded = false;
            }
        }
        else if(code === "TSHIRT") {
            if(tempProducts[index].noOfSelected > 2 && !tempProducts[index].discountAdded) {
                tempProducts[index].discountAdded = true;
            }
            else if(tempProducts[index].noOfSelected <= 2 && tempProducts[index].discountAdded) {
                tempProducts[index].discountAdded = false;
            }
                
        }
        this.setState({checkoutProducts:tempProducts},() => {
            console.log(this.state.checkoutProducts);
        });
    };
    displayProducts = () => {
        let products = [];
        for(let i = 0; i<this.state.checkoutProducts.length ; i++) {
            products.push(<EachProduct onSelected = {this.handleCustomerProducts} key={i} productDetails = {this.state.checkoutProducts[i]} index = {i} test = {this.state.internal} />)
        }
        return (products)
    }

    // called when checkout button is clicked
    checkout = () => {
        let total = 0;
        let displayText = "";
        for(let i = 0 ; i < this.state.checkoutProducts.length ; i++) {
            let eachProduct = this.state.checkoutProducts[i];
            let noOfProductsAdded = 0;
            if(eachProduct.noOfSelected > 0) {
                if(eachProduct.Code === "VOUCHER") {
                    if(eachProduct.discountAdded) {
                        eachProduct.discountProducts = Math.floor(eachProduct.noOfSelected/2);
                        noOfProductsAdded = eachProduct.discountProducts;
                        displayText = "No. of products added as discount for VOUCHER is "+noOfProductsAdded+" ";
                    }
                }
                else if(eachProduct.Code === "TSHIRT") {
                    if(eachProduct.discountAdded) {
                        eachProduct.Price = eachProduct.Price - 1;
                        displayText = displayText + "\n Price has been discounted by 1 EURO for each TSHIRT";
                    }
                }

                total = total + ((eachProduct.noOfSelected + (eachProduct.discountProducts != undefined ? eachProduct.discountProducts : 0))*eachProduct.Price);
            }
        }
        displayText = displayText +  "\n Final Total is "+total;
        alert(displayText);
        this.loadProductsData(false);
    }

    // called when a new json file is uploaded
    handleFileChange = (file) => {
        var fileReader = new FileReader();
        let me = this;
        fileReader.onload = function(event) {
            let tempJSON = JSON.parse(event.target.result);
            me.state.data = tempJSON;
            me.loadProductsData(false);
        }
        fileReader.readAsText(file[0]);
    }
}

export default Staff;