Description of task:
    Novicap have a physical store and they have some products to sell. Novicap needs an interface where they can able to check the total cost of the products buying by the customer with the discounts they are providing. On checkout they can be able to understand the discounts applied on each product and grand total.

Features Added:
    Add, remove, update products dynamically with the upload of JSON file.
    Dynamic update of discount details for each product.

Features that can be added:
    Connection to database for the products and discount decreases less hard coding but now I've used json file and hardcoded the discounts. If the discounts details are taken from database, we can add discounts for any product. This is not done because I feel it needs more environment setup for database and interface to add,remove and update products to database(Admin panel).

Description of working:
    By default the products details will be loaded from local JSON file and display them. When the customer buys some products which are available in the data, staff will adds the quantity of each products and the interface automatically updates whether the discount is added or not. Once the staff clicks the checkout, the grand total(with the discount)and what are the discounts added will be displayed.

    Staff can update,add,remove products with the upload of JSON file which is present below the header.

Technologies Used:
    Environment - Node.js
    React.js, HTML, CSS, Javascript

Instructions to run the code:
    -> Make sure we have node.js and react.js installed.
    -> If we doesn't have node.js installed, you can download it from https://nodejs.org/en/
    -> If we doesn't have react.js installed, after node.js is installed, run the command 'npm install  -g create-react-app'
    -> Paste the complete project in a directory.
    -> Go the project root directory and run the command npm install or npm update.
    -> Once the process is done run the command 'npm start'. The window will automatically opens in your default browser and process the exercise.

Code Description:
    * Reusable Code
    * clean Code with actual representation of what the particular task does.
    * Easy to add new functionalities
