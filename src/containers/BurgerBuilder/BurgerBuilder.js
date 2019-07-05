import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

export default class BurgerBuilder extends Component {

    state= {
        ingredients : {
            salad:  0,
            bacon:  0,
            cheese: 0,
            meat:   0
        },
        totalPrice : 4,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients).reduce((sum,el) => {return sum += el;},0);
        this.setState({purchasable : sum > 0});
    }

    addIngredientHandler = (type) => {
        const copy = {...this.state.ingredients};
        copy[type]+=1;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients: copy,totalPrice : newPrice});
        this.updatePurchaseState(copy);
    }

    removeIngredientHandler = (type) => {
        const copy = {...this.state.ingredients};
        if(copy[type] > 0){
            copy[type] -=1;
            const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
            this.setState({ingredients: copy, totalPrice: newPrice});
            this.updatePurchaseState(copy);
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }

    purchaseContinueHandler = () => {
        alert("You continued");
    }

    render() {


        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredients={this.state.ingredients} 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}/>
            </>
        )
    }
}
