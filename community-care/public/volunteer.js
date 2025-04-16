// volunteer.js

document.addEventListener("DOMContentLoaded", () => {
    /* --- Element References --- */
    // Service Modal & Form Elements
    const openServiceModalBtn = document.getElementById("openServiceModal");
    const serviceModal = document.getElementById("serviceModal");
    const closeServiceModalBtn = document.getElementById("closeServiceModal");
    const serviceForm = document.getElementById("serviceForm");
    const serviceList = document.getElementById("serviceList");
    
    // Shop Modal & Form Elements
    const openShopModalBtn = document.getElementById("openShopModal");
    const shopModal = document.getElementById("shopModal");
    const closeShopModalBtn = document.getElementById("closeShopModal");
    const shopForm = document.getElementById("shopForm");
    const shopList = document.getElementById("shopList");
    
    // My Requests Modal Elements
    const myRequestsBtn = document.getElementById("myRequestsBtn");
    const requestsModal = document.getElementById("requestsModal");
    const closeRequestsModalBtn = document.getElementById("closeRequestsModal");
    const requestsList = document.getElementById("requestsList");
    
    /* --- Dummy Data Arrays --- */
    let userServices = []; // Added services by volunteer
    let userShops = [];    // Added shops by volunteer
    
    // Only customer requests (simulated dummy data for now):
    let customerRequests = [
      // Example dummy data (this will come from your Get Help page/backend)
      `<strong>Customer:</strong> John Doe<br>
       <strong>Request:</strong> Need tutoring in math<br>
       <i class="fa-solid fa-location-dot"></i> Downtown Area | 
       <i class="fa-solid fa-phone"></i> 555-1234`
      // You may add more dummy requests here.
    ];
    
    /* --- Utility Functions --- */
    function renderList(list, container) {
      container.innerHTML = "";
      if (list.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "No requests available.";
        container.appendChild(empty);
      } else {
        list.forEach(item => {
          const li = document.createElement("li");
          li.innerHTML = item;
          container.appendChild(li);
        });
      }
    }
    
    /* --- Modal Functions --- */
    function openModal(modal) {
      modal.classList.remove("hidden");
    }
    function closeModal(modal) {
      modal.classList.add("hidden");
    }
    
    /* --- Event Listeners for Modals --- */
    // Service Modal
    openServiceModalBtn.addEventListener("click", () => openModal(serviceModal));
    closeServiceModalBtn.addEventListener("click", () => closeModal(serviceModal));
    
    // Shop Modal
    openShopModalBtn.addEventListener("click", () => openModal(shopModal));
    closeShopModalBtn.addEventListener("click", () => closeModal(shopModal));
    
    // My Requests Modal (shows only customer requests)
    myRequestsBtn.addEventListener("click", () => {
      renderList(customerRequests, requestsList);
      openModal(requestsModal);
    });
    closeRequestsModalBtn.addEventListener("click", () => closeModal(requestsModal));
    
    window.addEventListener("click", (e) => {
      if (e.target === serviceModal) { closeModal(serviceModal); }
      if (e.target === shopModal) { closeModal(shopModal); }
      if (e.target === requestsModal) { closeModal(requestsModal); }
    });
    
    /* --- Form Submissions --- */
    
    // Service Form Submission
    serviceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("serviceName").value.trim();
      const description = document.getElementById("serviceDescription").value.trim();
      const location = document.getElementById("serviceLocation").value.trim();
      const mobile = document.getElementById("serviceMobile").value.trim();
    
      if (name && description && location && mobile) {
        const html = `<strong>${name}</strong> - ${description}<br>
        <i class="fa-solid fa-location-dot"></i> ${location} | 
        <i class="fa-solid fa-phone"></i> ${mobile}`;
        userServices.push(html);
        renderList(userServices, serviceList);
        serviceForm.reset();
        closeModal(serviceModal);
      } else {
        alert("Please fill in all service details.");
      }
    });
    
    // Shop Form Submission
    shopForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("shopName").value.trim();
      const description = document.getElementById("shopDescription").value.trim();
      const location = document.getElementById("shopLocation").value.trim();
      const mobile = document.getElementById("shopMobile").value.trim();
    
      if (name && description && location && mobile) {
        const html = `<strong>${name}</strong> - ${description}<br>
        <i class="fa-solid fa-location-dot"></i> ${location} | 
        <i class="fa-solid fa-phone"></i> ${mobile}`;
        userShops.push(html);
        renderList(userShops, shopList);
        shopForm.reset();
        closeModal(shopModal);
      } else {
        alert("Please fill in all shop details.");
      }
    });
  });
  