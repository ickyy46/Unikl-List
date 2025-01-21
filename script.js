// List of UniKL campuses in Malaysia
const uniklCampuses = [
    "UniKL Malaysian Institute of Technology (MITEC)",
    "UniKL Malaysian Institute of Aviation Technology (MIAT)",
    "UniKL Business School (UBIS)",
    "UniKL Malaysian Institute of Information Technology (MIIT)",
    "UniKL Malaysian France Institute (MFI)",
    "UniKL Institute of Marine Engineering Technology (MIMET)",
    "UniKL Royal College of Medicine Perak (RCMP)",
    "UniKL Malaysian Institute of Industrial Technology (MIT)",
    "UniKL British Malaysian Institute (BMI)",
    "UniKL Asia Rail Institute (ARI)"
  ];
  
  // Reference to the list container in the HTML
  const uniklList = document.getElementById("unikl-list");
  
  // Populate the list dynamically
  uniklCampuses.forEach((campus) => {
    const listItem = document.createElement("li");
    listItem.textContent = campus;
    uniklList.appendChild(listItem);
  });
  