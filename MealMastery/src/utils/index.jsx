
export async function fetchRecipes (){

    const url =" http://127.0.0.1:8000/api/recipes/"


    const response = await fetch(url)
    console.log(response)
    const recipe = await response.json();
    console.log(recipe)
    return recipe;
}

// export async function fetchRecipe(id){
// const url = `http://127.0.0.1:8000/api/recipes/${id}/`
// const response = await fetch(url)
// console.log(response)
// const data = await response.json();

// return data[0];
// }
export async function fetchRecipe(id) {
    const url = `http://127.0.0.1:8000/api/recipes/${id}/`;

    try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        throw error;
    }
}
