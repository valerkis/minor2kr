async function getResponse() {
  try {
    const response = await fetch("./data/shop.json");
    const content = await response.json();

    const container = document.getElementById("products");

    content.forEach((item) => {
      const cardHTML = `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card h-100">
            <img src="${item.img}" class="card-img-top" alt="${item.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}. Цена: ${item.price} р.</p>

              <input type="hidden" name="vendor_code" value="${item.vendor_code}">

              <div class="mt-auto">
                <label class="form-label">Заказать:</label>
                <input 
                  class="form-control form-control-sm"
                  type="number"
                  name="amount"
                  value="0"
                >
              </div>
            </div>
          </div>
        </div>
      `;

      container.insertAdjacentHTML("beforeend", cardHTML);
    });
  } catch (error) {
    console.error("Ошибка загрузки JSON:", error);
  }
}

getResponse();
