import React, { Component } from 'react';
import MealService from '../services/MealService';
import { withRouter } from './withRouter';

class ListMealComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.router.params.id,
      meals: []
    }
  }
  componentDidMount() {
    MealService.mealByCategoryId(this.state.id).then((res) => {
      this.setState({
        meals: res.meals
      });
    })
  }
  viewMeal(id) {
    this.props.router.navigate(`/meal/${id}`)
  }
  render() {
    return (
      <section className="food_section layout_padding-bottom" style={{paddingTop: '90px'}}>
          <div className="container">
          <div className="heading_container heading_center">
              <h2>
              { this.state.id } Meals
              </h2>
          </div>

          <div className="filters-content">
              <div className="row grid">
                  {
                      this.state.meals.map(
                          meal =>
                          <div className="col-sm-6 col-lg-4 cursor-pointer" key = {meal.idMeal}>
                              <div className="box" style={{height: '341px'}} onClick={()=>this.viewMeal(meal.idMeal)}>
                                  <div>
                                      <div className="img-box">
                                          <img src= {meal.strMealThumb} />
                                      </div>
                                      <div className="detail-box">
                                          <h2>
                                              {meal.strMeal}
                                          </h2>                                          
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
    )
  }
}

export default withRouter(ListMealComponent)