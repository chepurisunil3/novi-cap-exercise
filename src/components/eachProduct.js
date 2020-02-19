import React,{Component} from 'react';
import '../css/each-product.css';
class EachProduct extends Component {
    // called when a product count is increased or decreased
    productCountModify = (added) => {
        if(added)
            this.props.onSelected(this.props.productDetails.Code,true,this.props.index);
        else
            this.props.onSelected(this.props.productDetails.Code,false,this.props.index);
    }
    render() {
        return (
            <div className="each-product">  
                <h3 className="sno">{this.props.index+1}.</h3>
                <h3 className="code">{this.props.productDetails.Code}</h3>
                <h3 className="name">{this.props.productDetails.Name}</h3>
                <h3 className="price">{this.props.productDetails.Price} {this.props.productDetails.discountAdded!= undefined && this.props.productDetails.discountAdded!= false && <span>Discount Added</span>}</h3>
                <button className="remove-btn" onClick={() => {this.productCountModify(false)}}>-</button>
                <h3 className="count">{this.props.productDetails.noOfSelected}</h3>
                <button className="add-btn" onClick={() => {this.productCountModify(true)}}>+</button>
            </div>
        );
    }
}

export default EachProduct;