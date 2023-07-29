import React, { Component } from "react";
import MealService from "../services/MealService";
import { withRouter } from "./withRouter";

class MealComponents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.router.params.id,
      meal: {}
    }
  }
  componentDidMount() {
    MealService.mealById(this.state.id).then((res) => {
      this.setState({
        meal: res.meals ? res.meals[0] : null,
      });
    })
  }
  viewCategory(id) {
    this.props.router.navigate(`/category/${id}`)
  }
  render() {
    return (
      <section className="about_section layout_padding">
        <div className="container  ">   
        {this.state.meal ? ( 
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src={this.state.meal ? this.state.meal.strMealThumb : 'images/about-img.png'} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box" style={{textAlign: 'left'}}>
                <div className="heading_container">
                  <h2>
                    {this.state.meal ? this.state.meal.strMeal : 'PeryPery'}
                  </h2>
                </div>
                <p>
                    {this.state.meal ? (this.state.meal.strInstructions ? this.state.meal.strInstructions.substring(0,500) + '...' : this.state.meal.strInstructions) : 'No description available for this meal.'}
                </p>
                <div className="heading_container">
                  <h2>
                    Tags: {this.state.meal ? this.state.meal.strTags : ''}
                  </h2>
                </div>
                { this.state.meal.strYoutube &&
                <a href={this.state.meal.strYoutube} target="_blank" className="mr-2.5">
                  Watch Video
                </a>
                }
                <a href="javascript:void(0);" onClick={()=>this.viewCategory(this.state.meal.strCategory)}>
                  Back to {this.state.meal ? this.state.meal.strCategory : 'PeryPery'}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-12">
                <div className="detail-box" style={{textAlign: 'center'}}>
                  <div className="heading_container">
                    <h2>
                        Meal item not available this time. Please contact support!
                    </h2>
                  </div>
                </div>
              </div>
          </div>
        )}
        </div>
      </section>
    )
  }
} 
export default withRouter(MealComponents)