import axios from "axios";

axios.defaults.baseURL = 'https://www.themealdb.com'
const MEAL_BY_CATEGORYID_URL = '/api/json/v1/1/filter.php';
const MEAL_BY_ID = '/api/json/v1/1/lookup.php';
const RANDOM_MEAL = '/api/json/v1/1/random.php'

class MealService {
  async mealByCategoryId(categoryId) {
    const response = await axios.get(MEAL_BY_CATEGORYID_URL + '?c=' + categoryId)
    return response.data
  }

  async mealById(mealId) {
    const response = await axios.get(MEAL_BY_ID + '?i=' + mealId)
    return response.data
  }

  async randomSingleMeal() {
    const response = await axios.get(RANDOM_MEAL)
    return response.data
  }
}

export default new MealService();