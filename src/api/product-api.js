// Create and export a class named as ProductAPI.
export class ProductAPI{
    // Define a static asynchronous method named fetchAll within the class.
    static async fetchAll(){
        // Inside the fetchAll method, use the await keyword to fetch data from the URL 'http://localhost/ecommerce-api/api/products/get_all_products.php'.
        const response = await fetch('http://localhost/ecommerce-api/api/products/get_all_products.php');
        // Parse the response JSON and destructure the data property from it.
        const {data} = await response.json();
        //  Return the data obtained from the API request.
        return data;
    } 
}