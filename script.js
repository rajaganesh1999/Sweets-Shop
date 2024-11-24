// Product data
let products = JSON.parse(localStorage.getItem('items')) || [
    { id: 1, name: 'bengalisweets', price: 500, image: 'https://th.bing.com/th/id/OIP.RjdWRRJ0SCKQAdTMFmRJQAHaFD?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', category: 'sweets', isLive: true },
    { id: 2, name: 'Mix Sweets', price: 200, image: 'https://th.bing.com/th/id/OIP.eJo4zrrxm8iU5WrSj_3fegHaE7?rs=1&pid=ImgDetMain', category: 'MixSweets', isLive: false },
    { id: 3, name: 'Candy-Low Sugar', price: 250, image: 'https://ts1.mm.bing.net/th?id=OIP.Zy5_hdiBc2i78D6RlyaWgQHaHa&pid=15.1', category: 'SmartSweets candy', isLive: true },
    { id: 4, name: 'MUNCH Chocolates', price: 150, image: 'https://th.bing.com/th/id/OIP.3tIeX21Q1RPBLAJqbM4ZLAHaHa?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', category: 'Chocolates', isLive: false },
    { id: 5, name: 'bengalisweets', price: 180, image: 'https://www.rajbhog.com/wp-content/uploads/2021/12/Must-try-Bengali-Sweets-Part-2.jpg', category: 'sweets', isLive: true },
    { id: 6, name: 'mix-bengalisweets', price: 500, image: 'https://th.bing.com/th/id/OIP.r7wKPNam9XVLeofSS4I4RgHaFa?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', category: 'sweets', isLive: true },
    { id: 7, name: 'Mix Sweets', price: 200, image: 'https://th.bing.com/th/id/OIP.Lwlpwmy2XqSU9Zw5kl82mwHaFj?w=287&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7', category: 'MixSweets', isLive: false },
    { id: 8, name: 'Mix Sweets', price: 200, image: 'https://th.bing.com/th/id/OIP.Q4yv-2jLCUBYMBILbL-BggHaE8?w=301&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7', category: 'MixSweets', isLive: true },
    { id: 9, name: 'chocolates with nuts', price: 150, image: 'https://th.bing.com/th/id/OIP.PI4Y7S3mSR5H_kMpyb3NuAHaE9?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7', category: 'Chocolates', isLive: true },
    { id: 10, name: 'Chocolate Wrapped Gold Foil', price: 150, image: 'https://thumbs.dreamstime.com/b/sweet-chocolate-balls-almond-wrapped-gold-foil-paper-white-background-67307822.jpg', category: 'Chocolates', isLive: true },
    { id: 11, name: 'Candy-mix', price: 250, image: 'https://th.bing.com/th/id/OIP.Nlut83CINcTqvEuo647kSgAAAA?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', category: 'SmartSweets candy', isLive: true },
    { id: 12, name: 'Candy Marshmallow', price: 250, image: 'https://www.ohnuts.com/noapp/showImage.cfm/extra-large/_MG_69251.jpg', category: 'SmartSweets candy', isLive: true },
  ];
  
  // Carousel data
  let carouselItems = JSON.parse(localStorage.getItem('carouselItems')) || [
    { id: 1, title: 'Sweets', image: 'https://api.time.com/wp-content/uploads/2016/12/gummy-bears.jpeg?quality=85&w=1200&h=628&crop=1' },
    { id: 2, title: 'Candy', image: 'https://th.bing.com/th/id/OIP.MpAvSIYgFPGE_j-5hlCMewHaD4?w=327&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 3, title: 'TRADITIONAL Sweets', image: 'https://th.bing.com/th/id/OIP.9CUyyC3IKniU8PMEYVgVrgHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  ];
  
  // Cart functionality
  let cartCount = 0;
  const cartCountElement = document.querySelector('.cart-count');
  
  function updateCartCount() {
    cartCountElement.textContent = cartCount;
  }
  
  function addToCart() {
    cartCount++;
    updateCartCount();
  }
  
  // Product rendering
  function renderProducts(productList, container) {
    container.innerHTML = '';
    productList.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');
      productCard.innerHTML = `
        <div class="card product-card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹${product.price}</p>
            <button class="btn btn-primary" onclick="addToCart()">Add to Cart</button>
          </div>
        </div>
      `;
      container.appendChild(productCard);
    });
  }
  
// Render live products on user-facing page
function renderLiveProducts() {
    const liveProductsContainer = document.getElementById('liveProducts');
    liveProductsContainer.innerHTML = '';
    products
      .filter(product => product.isLive)
      .forEach(product => {
        const productCard = `
          <div class="col-md-4">
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">₹${product.price}</p>
              </div>
            </div>
          </div>
        `;
        liveProductsContainer.innerHTML += productCard;
      });
  }
  
  // Product categories
  const productContainers = {
    all: document.getElementById('allProducts'),
    'SmartSweets candy': document.getElementById('SmartSweets candy'),
    sweets: document.getElementById('sweets'),
    Chocolates: document.getElementById('Chocolates'),
    MixSweets: document.getElementById('MixSweets')
};
  
  function renderProductsByCategory() {
    for (const [category, container] of Object.entries(productContainers)) {
      if (container) {
        const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
        renderProducts(filteredProducts, container);
      }
    }
  }
  
  renderProductsByCategory();
  
  // View More functionality
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      window.location.href = 'shop.html';
    });
  }
  
  // Admin functionality
  function addProduct(newProduct) {
    products.push(newProduct);
    renderProductsByCategory();
    saveProducts();
    // If on admin page, update the product table
    const productTable = document.getElementById('productTable');
    if (productTable) {
      renderProductTable();
    }
  }
  
  function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    renderProductsByCategory();
    saveProducts();
    // If on admin page, update the product table
    const productTable = document.getElementById('productTable');
    if (productTable) {
      renderProductTable();
    }
  }
  
  function toggleLive(id) {
    const product = products.find(p => p.id === id);
    if (product) {
      product.isLive = !product.isLive;
      saveProducts();
      renderProductTable();
      if (liveProductsContainer) {
        const liveProducts = products.filter(product => product.isLive);
        renderProducts(liveProducts, liveProductsContainer);
      }
    }
  }
  
  // Save products to localStorage
  function saveProducts() {
    localStorage.setItem('items', JSON.stringify(products));
  }
  
  // Admin login functionality
  let adminCredentials = JSON.parse(localStorage.getItem('adminCredentials')) || {
    username: 'rani',
    password: '123'
  };
  
  const loginForm = document.getElementById('loginForm');
  const adminPanel = document.getElementById('adminPanel');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const logoutBtn = document.getElementById('logoutBtn');
  const changeCredentialsForm = document.getElementById('changeCredentialsForm');
  
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === adminCredentials.username && password === adminCredentials.password) {
        loginForm.style.display = 'none';
        adminPanel.style.display = 'block';
      } else {
        alert('Invalid credentials');
      }
    });
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      loginForm.style.display = 'block';
      adminPanel.style.display = 'none';
      adminLoginForm.reset();
    });
  }
  
  if (changeCredentialsForm) {
    changeCredentialsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const newUsername = document.getElementById('newUsername').value;
      const newPassword = document.getElementById('newPassword').value;
      adminCredentials.username = newUsername;
      adminCredentials.password = newPassword;
      localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));
      alert('Credentials updated successfully');
      changeCredentialsForm.reset();
    });
  }
  
  // Admin page specific functionality
  const productForm = document.getElementById('productForm');
  const productTable = document.getElementById('productTable');
  
  if (productForm && productTable) {
    productForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(productForm);
      const file = formData.get('productImage');
      
      // Image size validation
      const img = new Image();
      img.onload = function() {
        if (this.width !== 300 || this.height !== 300) {
          alert('Please upload an image with dimensions 300x300 pixels.');
          return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
          const newProduct = {
            id: Date.now(),
            name: formData.get('productName'),
            price: Number(formData.get('productPrice')),
            image: event.target.result,
            category: formData.get('productCategory'),
            isLive: formData.get('isLive') === 'on'
          };
          addProduct(newProduct);
          productForm.reset();
        };
        reader.readAsDataURL(file);
      };
      img.src = URL.createObjectURL(file);
    });
  
    function renderProductTable() {
      const tbody = productTable.querySelector('tbody');
      tbody.innerHTML = '';
      products.forEach(product => {
        const row = tbody.insertRow();
        row.innerHTML = `
          <td><img src="${product.image}" alt="${product.name}" width="50" height="50"></td>
          <td>${product.name}</td>
          <td>₹${product.price}</td>
          <td>${product.category}</td>
          <td>
            <input type="checkbox" ${product.isLive ? 'checked' : ''} onchange="toggleLive(${product.id})">
          </td>
          <td>
            <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
          </td>
        `;
      });
    }
  
    renderProductTable();
  }
  
  // Carousel functionality
  function addCarouselItem(newItem) {
    carouselItems.push(newItem);
    saveCarouselItems();
    renderCarouselItemTable();
    renderCarousel();
  }
  
  function deleteCarouselItem(id) {
    carouselItems = carouselItems.filter(item => item.id !== id);
    saveCarouselItems();
    renderCarouselItemTable();
    renderCarousel();
  }
  
  function saveCarouselItems() {
    localStorage.setItem('carouselItems', JSON.stringify(carouselItems));
  }
  
  const carouselItemForm = document.getElementById('carouselItemForm');
  const carouselItemTable = document.getElementById('carouselItemTable');
  
  if (carouselItemForm && carouselItemTable) {
    carouselItemForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(carouselItemForm);
      const file = formData.get('carouselItemImage');
      
      // Image size validation
      const img = new Image();
      img.onload = function() {
        if (this.width !== 1000 || this.height !== 500) {
          alert('Please upload an image with dimensions 1000x500 pixels.');
          return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
          const newItem = {
            id: Date.now(),
            title: formData.get('carouselItemTitle'),
            image: event.target.result
          };
          addCarouselItem(newItem);
          carouselItemForm.reset();
        };
        reader.readAsDataURL(file);
      };
      img.src = URL.createObjectURL(file);
    });
  
    function renderCarouselItemTable() {
      const tbody = carouselItemTable.querySelector('tbody');
      tbody.innerHTML = '';
      carouselItems.forEach(item => {
        const row = tbody.insertRow();
        row.innerHTML = `
          <td><img src="${item.image}" alt="${item.title}" width="100" height="50"></td>
          <td>${item.title}</td>
          <td>
            <button class="btn btn-sm btn-danger" onclick="deleteCarouselItem(${item.id})">Delete</button>
          </td>
        `;
      });
    }
  
    renderCarouselItemTable();
  }
  
  // Render carousel on the main page
  function renderCarousel() {
    const carousel = document.querySelector('#heroCarousel .carousel-inner');
    if (carousel) {
      carousel.innerHTML = '';
      carouselItems.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) carouselItem.classList.add('active');
        carouselItem.innerHTML = `
          <img src="${item.image}" class="d-block w-100" alt="${item.title}">
          <div class="carousel-caption">
            <h1>${item.title}</h1>
          </div>
        `;
        carousel.appendChild(carouselItem);
      });
    }
  }
  
  
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    renderProductsByCategory();
    updateCartCount();
    renderCarousel();
  });

  // Render live products on user-facing page
function renderLiveProducts() {
    const liveProductsContainer = document.getElementById('liveProducts');
    if (liveProductsContainer) {
      liveProductsContainer.innerHTML = '';
      const liveProducts = products.filter(product => product.isLive);
      liveProducts.forEach(product => {
        const productCard = `
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card product-card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">₹${product.price}</p>
                <button class="btn btn-primary" onclick="addToCart()">Add to Cart</button>
              </div>
            </div>
          </div>
        `;
        liveProductsContainer.innerHTML += productCard;
      });
    }
  }
  
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    renderProductsByCategory();
    renderLiveProducts(); // Add this line to render live products
    updateCartCount();
    renderCarousel();
  });

  





  
