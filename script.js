// ===== Sample Data =====
const sampleData = [
    { date: '2026-01-28', product: 'โน้ตบุ๊ก', category: 'เทคโนโลยี', quantity: 5, price: 25000, total: 125000 },
    { date: '2026-01-28', product: 'เมาส์ไร้สาย', category: 'เทคโนโลยี', quantity: 15, price: 500, total: 7500 },
    { date: '2026-01-28', product: 'คีย์บอร์ด', category: 'เทคโนโลยี', quantity: 8, price: 1500, total: 12000 },
    { date: '2026-01-29', product: 'โน้ตบุ๊ก', category: 'เทคโนโลยี', quantity: 3, price: 25000, total: 75000 },
    { date: '2026-01-29', product: 'มอนิเตอร์', category: 'เทคโนโลยี', quantity: 2, price: 8000, total: 16000 },
    { date: '2026-01-30', product: 'เมาส์ไร้สาย', category: 'เทคโนโลยี', quantity: 20, price: 500, total: 10000 },
    { date: '2026-01-30', product: 'โน้ตบุ๊ก', category: 'เทคโนโลยี', quantity: 4, price: 25000, total: 100000 },
    { date: '2026-01-30', product: 'คีย์บอร์ด', category: 'เทคโนโลยี', quantity: 6, price: 1500, total: 9000 },
    { date: '2026-01-31', product: 'มอนิเตอร์', category: 'เทคโนโลยี', quantity: 3, price: 8000, total: 24000 },
    { date: '2026-01-31', product: 'โน้ตบุ๊ก', category: 'เทคโนโลยี', quantity: 6, price: 25000, total: 150000 },
    { date: '2026-02-01', product: 'เมาส์ไร้สาย', category: 'เทคโนโลยี', quantity: 12, price: 500, total: 6000 },
    { date: '2026-02-01', product: 'คีย์บอร์ด', category: 'เทคโนโลยี', quantity: 5, price: 1500, total: 7500 },
    { date: '2026-02-02', product: 'โน้ตบุ๊ก', category: 'เทคโนโลยี', quantity: 7, price: 25000, total: 175000 },
    { date: '2026-02-02', product: 'มอนิเตอร์', category: 'เทคโนโลยี', quantity: 4, price: 8000, total: 32000 },
    { date: '2026-02-03', product: 'เมาส์ไร้สาย', category: 'เทคโนโลยี', quantity: 18, price: 500, total: 9000 },
    { date: '2026-02-03', product: 'โน้ตบุ๊ก', category: 'เทคโนโลยี', quantity: 5, price: 25000, total: 125000 },
    { date: '2026-02-04', product: 'คีย์บอร์ด', category: 'เทคโนโลยี', quantity: 9, price: 1500, total: 13500 },
    { date: '2026-02-04', product: 'มอนิเตอร์', category: 'เทคโนโลยี', quantity: 2, price: 8000, total: 16000 },
    { date: '2026-02-05', product: 'โน้ตบุ๊ก', category: 'เทคโนโลยี', quantity: 8, price: 25000, total: 200000 },
    { date: '2026-02-05', product: 'เมาส์ไร้สาย', category: 'เทคโนโลยี', quantity: 14, price: 500, total: 7000 },
];

let allData = [...sampleData];
let filteredData = [...sampleData];
let salesChart = null;
let productChart = null;
let selectedProduct = 'all';

// ===== Initialize Dashboard =====
document.addEventListener('DOMContentLoaded', function () {
    setDefaultDates();
    displayCurrentDate();
    updateDashboard();
    initCharts();
    
    // Add event listeners for real-time filtering
    document.getElementById('startDate').addEventListener('change', applyFilter);
    document.getElementById('endDate').addEventListener('change', applyFilter);
    document.getElementById('searchProduct').addEventListener('input', applyFilter);
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});

// ===== Set Default Dates =====
function setDefaultDates() {
    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    document.getElementById('startDate').valueAsDate = thirtyDaysAgo;
    document.getElementById('endDate').valueAsDate = today;
}

// ===== Display Current Date =====
function displayCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const today = new Date().toLocaleDateString('th-TH', options);
    document.getElementById('currentDate').textContent = today;
}

// ===== Apply Filter =====
function applyFilter() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const searchProduct = document.getElementById('searchProduct').value.toLowerCase();

    filteredData = allData.filter(item => {
        const itemDate = item.date;
        const matchDate = (!startDate || itemDate >= startDate) && (!endDate || itemDate <= endDate);
        const matchProduct = !searchProduct || item.product.toLowerCase().includes(searchProduct);
        const matchSelectedProduct = selectedProduct === 'all' || item.product === selectedProduct;
        return matchDate && matchProduct && matchSelectedProduct;
    });

    updateDashboard();
}

// ===== Filter by Product =====
function filterByProduct(product, element) {
    selectedProduct = product;
    
    // Update active button
    document.querySelectorAll('.sidebar-item').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
    
    applyFilter();
}

// ===== Reset All Filters =====
function resetAllFilters() {
    selectedProduct = 'all';
    document.getElementById('searchProduct').value = '';
    setDefaultDates();
    document.querySelectorAll('.sidebar-item').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.sidebar-item').classList.add('active');
    filteredData = [...allData];
    updateDashboard();
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// ===== Toggle Sidebar (Mobile) =====
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// ===== Update Dashboard =====
function updateDashboard() {
    updateKPICards();
    updateCharts();
    updateTable();
}

// ===== Update KPI Cards =====
function updateKPICards() {
    const totalSales = filteredData.reduce((sum, item) => sum + item.total, 0);
    const totalItems = filteredData.reduce((sum, item) => sum + item.quantity, 0);
    const avgPerItem = filteredData.length > 0 ? totalSales / filteredData.length : 0;
    
    // Find top product
    const productSales = {};
    filteredData.forEach(item => {
        productSales[item.product] = (productSales[item.product] || 0) + item.total;
    });
    const topProduct = Object.keys(productSales).length > 0 
        ? Object.keys(productSales).reduce((a, b) => productSales[a] > productSales[b] ? a : b)
        : '-';

    document.getElementById('totalSales').textContent = formatCurrency(totalSales);
    document.getElementById('totalItems').textContent = totalItems.toLocaleString('th-TH');
    document.getElementById('avgPerItem').textContent = formatCurrency(avgPerItem);
    document.getElementById('topProduct').textContent = topProduct;
}

// ===== Update Charts =====
function updateCharts() {
    updateSalesChart();
    updateProductChart();
}

function updateSalesChart() {
    // Group sales by date
    const salesByDate = {};
    filteredData.forEach(item => {
        salesByDate[item.date] = (salesByDate[item.date] || 0) + item.total;
    });

    const sortedDates = Object.keys(salesByDate).sort();
    const labels = sortedDates.map(date => formatDate(date));
    const data = sortedDates.map(date => salesByDate[date]);

    if (salesChart) {
        salesChart.data.labels = labels;
        salesChart.data.datasets[0].data = data;
        salesChart.update();
    }
}

function updateProductChart() {
    // Group sales by product
    const productSales = {};
    filteredData.forEach(item => {
        productSales[item.product] = (productSales[item.product] || 0) + item.total;
    });

    const products = Object.keys(productSales).sort((a, b) => productSales[b] - productSales[a]).slice(0, 5);
    const sales = products.map(product => productSales[product]);

    const colors = [
        '#2563eb',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#8b5cf6'
    ];

    if (productChart) {
        productChart.data.labels = products;
        productChart.data.datasets[0].data = sales;
        productChart.data.datasets[0].backgroundColor = colors;
        productChart.update();
    }
}

// ===== Initialize Charts =====
function initCharts() {
    const ctxSales = document.getElementById('salesChart').getContext('2d');
    salesChart = new Chart(ctxSales, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'ยอดขาย (บาท)',
                data: [],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#2563eb',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 12, weight: 'bold' },
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '฿' + value.toLocaleString('th-TH');
                        }
                    }
                }
            }
        }
    });

    const ctxProduct = document.getElementById('productChart').getContext('2d');
    productChart = new Chart(ctxProduct, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'ยอดขาย (บาท)',
                data: [],
                backgroundColor: [],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function (value) {
                            return '฿' + value.toLocaleString('th-TH');
                        }
                    }
                }
            }
        }
    });

    updateCharts();
}

// ===== Update Table =====
function updateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    if (filteredData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px; color: #64748b;">ไม่มีข้อมูล</td></tr>';
        return;
    }

    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(item.date)}</td>
            <td>${item.product}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td>฿${item.price.toLocaleString('th-TH')}</td>
            <td><strong>฿${item.total.toLocaleString('th-TH')}</strong></td>
        `;
        tableBody.appendChild(row);
    });
}

// ===== Export to Excel =====
function exportToExcel() {
    if (filteredData.length === 0) {
        alert('ไม่มีข้อมูลในการส่งออก');
        return;
    }

    const ws_data = [
        ['KPI Sales Report', '', '', '', '', ''],
        ['รายงานการขาย', '', '', '', '', ''],
        [formatDate(new Date()), '', '', '', '', ''],
        [],
        ['วันที่', 'ชื่อสินค้า', 'หมวดหมู่', 'จำนวน', 'ราคาต่อหน่วย', 'ยอดขาย'],
        ...filteredData.map(item => [
            item.date,
            item.product,
            item.category,
            item.quantity,
            item.price,
            item.total
        ])
    ];

    // Add summary
    const totalSales = filteredData.reduce((sum, item) => sum + item.total, 0);
    const totalItems = filteredData.reduce((sum, item) => sum + item.quantity, 0);
    
    ws_data.push([]);
    ws_data.push(['รวมยอดขาย:', '', '', '', '', totalSales]);
    ws_data.push(['รวมจำนวนรายการ:', '', '', '', '', totalItems]);
    ws_data.push(['เฉลี่ยต่อรายการ:', '', '', '', '', totalSales / filteredData.length]);

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    
    // Set column widths
    ws['!cols'] = [
        { wch: 15 },
        { wch: 20 },
        { wch: 15 },
        { wch: 10 },
        { wch: 15 },
        { wch: 15 }
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sales Report');
    
    const fileName = `KPI_Sales_Report_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
}

// ===== Export to PDF =====
async function exportToPDF() {
    if (filteredData.length === 0) {
        alert('ไม่มีข้อมูลในการส่งออก');
        return;
    }

    const element = document.querySelector('.wrapper');
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }

    const fileName = `KPI_Sales_Report_${new Date().toISOString().split('T')[0]}.pdf`;
    pdf.save(fileName);
}

// ===== Utility Functions =====
function formatCurrency(value) {
    return '฿' + value.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('th-TH', options);
}
