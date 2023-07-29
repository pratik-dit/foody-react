import axios from 'axios';

axios.defaults.baseURL = 'https://www.themealdb.com'
const LIST_MEAL_CATEGORY_URL = '/api/json/v1/1/categories.php';

class MealCategoryService {
    async getListOfMealCategory() {
        const response = await axios.get(LIST_MEAL_CATEGORY_URL)
        return response.data
    }
}

export default new MealCategoryService();