import React, { Component } from 'react';
import MealCategoryService from '../services/MealCategoryService';
import MealService from '../services/MealService';
import { withRouter } from './withRouter';

class ListMealCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mealCategories: [],
            firstMeal: {},
            secondMeal: {}
        }
    }

    componentDidMount() {
        MealCategoryService.getListOfMealCategory().then((res) => {
            this.setState({
                mealCategories: res.categories
            });
        })
        MealService.randomSingleMeal().then((res) => {
            this.setState({
                firstMeal: res.meals ? res.meals[0] : null,
            })
        })
        MealService.randomSingleMeal().then((res) => {
            this.setState({
                secondMeal: res.meals ? res.meals[0] : null,
            })
        })
    }

    viewMealsByCategory(id) {
        this.props.router.navigate(`/category/${id}`)
    }

    viewMeal(id) {
        this.props.router.navigate(`/meal/${id}`)
    }

    render() {
        return (
            <div>
                <section className="offer_section layout_padding-bottom">
                    <div className="offer_container">
                    <div className="container ">
                        <div className="row">
                            { this.state.firstMeal && 
                            <div className="col-md-6  ">
                                <div className="box ">
                                <div className="img-box">
                                    <img src={this.state.firstMeal.strMealThumb} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                    {this.state.firstMeal.strMeal}
                                    </h5>
                                    <h6>
                                    <span>20%</span> Off
                                    </h6>
                                    <a href="" onClick={()=>this.viewMeal(this.state.firstMeal.idMeal)}>View</a>
                                </div>
                                </div>
                            </div>
                            }
                            { this.state.secondMeal &&
                            <div className="col-md-6  ">
                                <div className="box ">
                                <div className="img-box">
                                    <img src={this.state.secondMeal.strMealThumb} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                    {this.state.secondMeal.strMeal}
                                    </h5>
                                    <h6>
                                    <span>15%</span> Off
                                    </h6>
                                    <a href="" onClick={()=>this.viewMeal(this.state.secondMeal.idMeal)}>View</a>
                                </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    </div>
                </section>
                <section className="food_section layout_padding-bottom">
                    <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                        Store Categories
                        </h2>
                    </div>

                    <div className="filters-content">
                        <div className="row grid">
                            {
                                this.state.mealCategories.map(
                                    category =>
                                    <div className="col-sm-6 col-lg-4 cursor-pointer" key = {category.idCategory}>
                                        <div className="box" style={{height: '441px'}} onClick={()=>this.viewMealsByCategory(category.strCategory)}>
                                            <div>
                                                <div className="img-box">
                                                    <img src= {category.strCategoryThumb} />
                                                </div>
                                                <div className="detail-box">
                                                    <h2>
                                                        {category.strCategory}
                                                    </h2>
                                                    <p>
                                                        {category.strCategoryDescription.length > 100 ? category.strCategoryDescription.substring(0, 150) : category.strCategoryDescription}
                                                    </p>
                                                    <div className="options">
                                                        <h6>
                                                        View more...
                                                        </h6>
                                                        <a className="cart_link" href="#">
                                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }                        
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default withRouter(ListMealCategoryComponent)
// export default ListMealCategoryComponent