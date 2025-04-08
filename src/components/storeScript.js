{/* Not yet implemented:

const getProducts = async () => {
    const url = "https://raw.githubusercontent.com/ErinBlaskowski/ErinBlaskowski.github.io/refs/heads/main/csce242/json/products.json"
    try{
        const response = await fetch(url);
        return await response.json();
    } catch(error){
        console.log(error);
    }
};

const showProducts = async () => {
    let products = await getProducts();

    let productSection = document.getElementById("grid");

    products.forEach(product => {
        productSection.append(getProductItem(product));
    });
};

const getProductItem = product => {
    const gridItem = document.createElement('div');
    gridItem.setAttribute("id", "box");

    let img = document.createElement("img");
    img.src = product.img_name;
    gridItem.append(img);

    let h3 = document.createElement("h3");
    h3.innerText = product.name + " - " + product.price;
    gridItem.append(h3);

    return gridItem;
}

window.onload = () => showProducts();

*/}