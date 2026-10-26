// ----------------------------------------------------
// DATA DEFAULT MODUL PEMBELAJARAN PREDIKSI CUACA
// ----------------------------------------------------
const defaultModules = [
    {
        id: "modul-1",
        title: "Modul 1: Pengantar Meteorologi & Cuaca vs Iklim",
        category: "dasar",
        icon: "fa-cloud-sun",
        summary: "Memahami perbedaan fundamental antara kondisi atmosfer jangka pendek (cuaca) dan rata-rata jangka panjang (iklim).",
        content: `
            <p class="text-slate-600 mb-4 leading-relaxed">
                <strong>Meteorologi</strong> adalah cabang ilmu atmosfer yang mempelajari sains tentang cuaca, proses fisika, dan kimia yang terjadi di atmosfer bumi. Memahami cuaca berawal dari membedakan skala waktu atmosfer.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div class="p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <h4 class="font-bold text-sky-800 text-sm mb-2"><i class="fa-solid fa-cloud-showers-heavy mr-1"></i> Cuaca (Weather)</h4>
                    <p class="text-xs text-slate-600">Kondisi atmosfer pada suatu lokasi spesifik dalam kurun waktu singkat (menit, jam, hingga hari). Bersifat dinamis dan cepat berubah. Contoh: Hujan lokal sore hari.</p>
                </div>
                <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <h4 class="font-bold text-emerald-800 text-sm mb-2"><i class="fa-solid fa-earth-americas mr-1"></i> Iklim (Climate)</h4>
                    <p class="text-xs text-slate-600">Rata-rata pola cuaca pada wilayah yang luas dalam jangka waktu yang panjang (biasanya 30 tahun sesuai standar WMO). Contoh: Iklim Tropis Indonesia.</p>
                </div>
            </div>
            <h4 class="font-semibold text-slate-900 text-sm mt-4 mb-2">Mengapa Prediksi Cuaca Sangat Penting?</h4>
            <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
                <li><strong>Keselamatan Jiwa:</strong> Peringatan dini bencana cuaca ekstrem (siklon, banjir bandang, puting beliung).</li>
                <li><strong>Sektor Pertanian & Maritim:</strong> Menentukan masa tanam, panen, serta navigasi kapal nelayan.</li>
                <li><strong>Penerbangan:</strong> Menghindari turbulensi udara ekstrem dan <em>wind shear</em> saat lepas landas/mendarat.</li>
            </ul>
        `
    },
    {
        id: "modul-2",
        title: "Modul 2: Unsur-Unsur Utama Cuaca",
        category: "unsur",
        icon: "fa-temperature-three-quarters",
        summary: "6 Komponen fisik atmosfer yang diukur secara berkala untuk memprediksi perubahan kondisi cuaca.",
        content: `
            <p class="text-slate-600 mb-4 leading-relaxed">
                Prediksi cuaca dilakukan dengan menganalisa 6 unsur utama atmosfer yang saling berinteraksi secara kontinu:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div class="p-3 bg-slate-50 border rounded-xl">
                    <div class="font-semibold text-xs text-slate-800 mb-1"><i class="fa-solid fa-temperature-high text-rose-500 mr-1"></i> 1. Suhu Udara</div>
                    <p class="text-[11px] text-slate-500">Derajat panas/dingin atmosfer akibat radiasi matahari. Mempengaruhi intensitas konveksi udara.</p>
                </div>
                <div class="p-3 bg-slate-50 border rounded-xl">
                    <div class="font-semibold text-xs text-slate-800 mb-1"><i class="fa-solid fa-gauge-high text-blue-500 mr-1"></i> 2. Tekanan Udara</div>
                    <p class="text-[11px] text-slate-500">Berat kolom udara di atas permukaan. Perbedaan tekanan memicu pergerakan angin dari daerah bertekanan tinggi ke rendah.</p>
                </div>
                <div class="p-3 bg-slate-50 border rounded-xl">
                    <div class="font-semibold text-xs text-slate-800 mb-1"><i class="fa-solid fa-droplet text-sky-500 mr-1"></i> 3. Kelembapan Udara</div>
                    <p class="text-[11px] text-slate-500">Jumlah uap air di udara. Kelembapan relatif (RH) menentukan titik embun dan potensi pembentukan awan.</p>
                </div>
                <div class="p-3 bg-slate-50 border rounded-xl">
                    <div class="font-semibold text-xs text-slate-800 mb-1"><i class="fa-solid fa-wind text-teal-500 mr-1"></i> 4. Angin (Arah & Kecepatan)</div>
                    <p class="text-[11px] text-slate-500">Udara yang bergerak horizontal. Memindahkan massa udara basah atau kering dari satu area ke area lain.</p>
                </div>
                <div class="p-3 bg-slate-50 border rounded-xl">
                    <div class="font-semibold text-xs text-slate-800 mb-1"><i class="fa-solid fa-cloud text-slate-400 mr-1"></i> 5. Tutupan Awan</div>
                    <p class="text-[11px] text-slate-500">Kumpulan tetes air/kristal es melayang di udara. Jenis awan (seperti Cumulonimbus) mengindikasikan jenis cuaca buruk.</p>
                </div>
                <div class="p-3 bg-slate-50 border rounded-xl">
                    <div class="font-semibold text-xs text-slate-800 mb-1"><i class="fa-solid fa-cloud-rain text-indigo-500 mr-1"></i> 6. Curah Hujan (Presipitasi)</div>
                    <p class="text-[11px] text-slate-500">Jumlah air cair atau padat yang jatuh dari awan mencapai tanah, diukur dalam satuan milimeter (mm).</p>
                </div>
            </div>
        `
    },
    {
        id: "modul-3",
        title: "Modul 3: Alat & Teknologi Pengamatan Cuaca",
        category: "teknologi",
        icon: "fa-satellite-dish",
        summary: "Peralatan konvensional hingga instrumen penginderaan jauh (Remote Sensing) untuk mengumpulkan data atmosfer.",
        content: `
            <p class="text-slate-600 mb-4 leading-relaxed">
                Data observasi presisi adalah bahan baku utama prakiraan cuaca. Tanpa pengamatan akurat, model prediksi tidak akan optimal.
            </p>
            <div class="space-y-3 text-xs">
                <div class="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border">
                    <div class="p-2 bg-sky-100 text-sky-700 rounded-lg"><i class="fa-solid fa-square-poll-vertical text-base"></i></div>
                    <div>
                        <h5 class="font-bold text-slate-800">Stasiun Cuaca Otomatis (AWS) & Manual</h5>
                        <p class="text-slate-600 mt-0.5">Menggunakan <strong>Termometer</strong> (suhu), <strong>Barometer</strong> (tekanan), <strong>Anemometer</strong> (kecepatan angin), <strong>Vane</strong> (arah angin), dan <strong>Penakar Hujan Ombrometer</strong>.</p>
                    </div>
                </div>
                <div class="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border">
                    <div class="p-2 bg-amber-100 text-amber-700 rounded-lg"><i class="fa-solid fa-plane-up text-base"></i></div>
                    <div>
                        <h5 class="font-bold text-slate-800">Radiosonde (Balon Cuaca)</h5>
                        <p class="text-slate-600 mt-0.5">Dilepaskan ke atmosfer atas hingga ketinggian >30 km untuk mengukur profil vertikal suhu, kelembapan, dan tekanan udara (sounding).</p>
                    </div>
                </div>
                <div class="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border">
                    <div class="p-2 bg-indigo-100 text-indigo-700 rounded-lg"><i class="fa-solid fa-tower-cell text-base"></i></div>
                    <div>
                        <h5 class="font-bold text-slate-800">Radar Cuaca Doppler</h5>
                        <p class="text-slate-600 mt-0.5">Mempancarkan gelombang mikro untuk mendeteksi intensitas reflektifitas curah hujan, pergerakan perawanan, dan indikasi awan badai secara real-time.</p>
                    </div>
                </div>
                <div class="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border">
                    <div class="p-2 bg-teal-100 text-teal-700 rounded-lg"><i class="fa-solid fa-satellite text-base"></i></div>
                    <div>
                        <h5 class="font-bold text-slate-800">Satelit Meteorologi (Geostasioner & Polar)</h5>
                        <p class="text-slate-600 mt-0.5">Mengambil citra inframerah dan uap air bumi dari luar angkasa untuk memantau siklon, sistem perawanan skala luas, dan pergerakan massa udara.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "modul-4",
        title: "Modul 4: Metode Prediksi Cuaca Modern",
        category: "prediksi",
        icon: "fa-microchip",
        summary: "Dari prediksi sinoptik tradisional, Numerical Weather Prediction (NWP), hingga implementasi kecerdasan buatan (AI/ML).",
        content: `
            <p class="text-slate-600 mb-4 leading-relaxed">
                Prakiraan cuaca telah bertransformasi dari analisa visual subjektif menjadi komputasi superkomputer berskala tinggi.
            </p>
            <div class="space-y-4">
                <div class="border-l-4 border-sky-500 pl-4 py-1">
                    <h4 class="font-bold text-slate-900 text-sm">1. Numerical Weather Prediction (NWP)</h4>
                    <p class="text-xs text-slate-600 mt-1">
                        Metode standar global saat ini. Memodelkan atmosfer menggunakan persamaan diferensial fisika dan termodinamika cairan. Komputer super memproses triliunan kalkulasi data observasi untuk memproyeksikan cuaca beberapa hari ke depan (contoh model: GFS, ECMWF, WRF).
                    </p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4 py-1">
                    <h4 class="font-bold text-slate-900 text-sm">2. Metode Sinoptik & Klimatologi</h4>
                    <p class="text-xs text-slate-600 mt-1">
                        <strong>Sinoptik:</strong> Menganalisa peta cuaca saat ini untuk memprediksi pergerakan sistem cuaca (front, tekanan rendah). <br>
                        <strong>Klimatologi:</strong> Menggunakan rata-rata data historis jangka panjang untuk memprediksi tren musim.
                    </p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4 py-1">
                    <h4 class="font-bold text-slate-900 text-sm">3. Artificial Intelligence & Machine Learning (AI/ML)</h4>
                    <p class="text-xs text-slate-600 mt-1">
                        Perkembangan terbaru di mana model AI (seperti GraphCast atau Pangu-Weather) dilatih menggunakan puluhan tahun data historis untuk menghasilkan prakiraan global akurat dalam hitungan detik dengan konsumsi energi komputasi yang jauh lebih efisien.
                    </p>
                </div>
            </div>
        `
    },
    {
        id: "modul-5",
        title: "Modul 5: Membaca Peta Cuaca & Garis Isobar",
        category: "prediksi",
        icon: "fa-map-location-dot",
        summary: "Panduan praktis menginterpretasikan garis tekanan isobar, pusat tekanan tinggi/rendah, dan pola angin.",
        content: `
            <p class="text-slate-600 mb-4 leading-relaxed">
                Peta sinoptik atau peta isobar adalah alat visual dasar yang digunakan meteorolog untuk mengidentifikasi pola cuaca ekstrem.
            </p>
            <div class="bg-slate-900 text-white p-4 rounded-xl text-xs space-y-3 mb-4">
                <div class="flex items-center gap-2 text-sky-400 font-bold border-b border-slate-700 pb-2">
                    <i class="fa-solid fa-compass"></i> Konsep Utama Garis Isobar
                </div>
                <p><strong>Isobar:</strong> Garis khayal pada peta cuaca yang menghubungkan titik-titik dengan tekanan udara rata-rata permukaan laut (MSLP) yang sama.</p>
                <ul class="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong class="text-rose-400">Isobar Rapat:</strong> Menandakan gradien tekanan udara tinggi $\rightarrow$ Angin sangat kencang.</li>
                    <li><strong class="text-blue-400">Isobar Renggang:</strong> Menandakan gradien tekanan lemah $\rightarrow$ Angin tenang / bertiup perlahan.</li>
                </ul>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 border border-slate-200 rounded-xl bg-slate-50">
                    <span class="font-bold text-rose-600 text-sm">Sistem Tekanan Rendah (L / Depresi)</span>
                    <p class="text-slate-600 mt-1">Pusat udara naik. Memicu pembentukan awan tebal, hujan, dan cuaca buruk. Di belahan bumi utara bergerak berlawanan arah jarum jam (Siklonik).</p>
                </div>
                <div class="p-3 border border-slate-200 rounded-xl bg-slate-50">
                    <span class="font-bold text-sky-600 text-sm">Sistem Tekanan Tinggi (H / Antisiklon)</span>
                    <p class="text-slate-600 mt-1">Pusat udara turun. Mencegah pembentukan awan sehingga menghasilkan cuaca cerah, stabil, dan minim hujan.</p>
                </div>
            </div>
        `
    },
    {
        id: "modul-6",
        title: "Modul 6: Glosarium & Panduan Praktis",
        category: "dasar",
        icon: "fa-book-atlas",
        summary: "Daftar referensi istilah dan langkah dasar membaca laporan cuaca harian.",
        content: `
            <p class="text-slate-600 mb-4 leading-relaxed">
                Modul ini memuat referensi penting dan rangkuman istilah dasar agar Anda dapat membaca prakiraan cuaca publik dari lembaga resmi seperti BMKG secara efektif.
            </p>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 space-y-2">
                <h4 class="font-bold flex items-center gap-2 text-amber-900">
                    <i class="fa-solid fa-lightbulb text-amber-600"></i> Tips Membaca Prakiraan Cuaca Harian:
                </h4>
                <ol class="list-decimal pl-5 space-y-1">
                    <li><strong>Perhatikan Probabilitas Presipitasi (% Hujan):</strong> Peluang terjadinya hujan di lokasi tertentu.</li>
                    <li><strong>Cek Indeks UV:</strong> Mengukur intensitas radiasi sinar ultraviolet matahari untuk perlindungan kulit.</li>
                    <li><strong>Kecepatan Angin & Hembusan (Gust):</strong> Kecepatan rata-rata vs kecepatan kejutan angin mendadak.</li>
                </ol>
            </div>
            <p class="text-xs text-slate-500 mt-4">
                *Untuk melihat glosarium lengkap secara interaktif, silakan scroll ke section Glosarium di bawah.
            </p>
        `
    }
];

// GLOSSARY DATA
const glossaryData = [
    { term: "Adveksi", desc: "Perpindahan horizontal sifat-sifat atmosfer (seperti panas atau kelembapan) oleh pergerakan angin." },
    { term: "Anemometer", desc: "Alat pengukur kecepatan angin." },
    { term: "Barometer", desc: "Alat pengukur tekanan udara/atmosfer." },
    { term: "Cumulonimbus (Cb)", desc: "Awan konvektif menjulang tinggi yang dapat menghasilkan hujan lebat, petir, dan angin kencang." },
    { term: "Dew Point (Titik Embun)", desc: "Suhu di mana udara harus didinginkan agar uap air di dalamnya mengembun menjadi air." },
    { term: "Front Cuaca", desc: "Batas transisi antara dua massa udara dengan kerapatan dan suhu yang berbeda." },
    { term: "Isobar", desc: "Garis pada peta cuaca yang menghubungkan tempat-tempat dengan tekanan udara yang sama." },
    { term: "NWP (Numerical Weather Prediction)", desc: "Prediksi cuaca berbasis pemodelan persamaan matematika sains fisik pada superkomputer." },
    { term: "Radiosonde", desc: "Instrumen bersensor yang diterbangkan dengan balon cuaca untuk mengukur parameter atmosfer atas." },
    { term: "Siklon Tropis", desc: "Sistem badai berputar kencang yang terbentuk di atas lautan tropis bertekanan rendah." },
    { term: "Turbulensi", desc: "Pergerakan udara yang tidak teratur dan tidak stabil yang kerap dialami pesawat penerbangan." },
    { term: "Wind Shear", desc: "Perubahan mendadak dalam kecepatan dan/atau arah angin dalam jarak yang pendek." }
];

// QUIZ DATA
const quizQuestions = [
    {
        id: 1,
        question: "Alat yang digunakan untuk mengukur tekanan udara adalah...",
        options: ["Termometer", "Barometer", "Anemometer", "Higrometer"],
        answer: 1,
        explanation: "Barometer digunakan khusus untuk mengukur tekanan atmosfer (hPa/mb)."
    },
    {
        id: 2,
        question: "Garis pada peta cuaca yang menghubungkan area dengan tekanan udara yang sama disebut...",
        options: ["Isoterm", "Isobar", "Isohyet", "Isotach"],
        answer: 1,
        explanation: "Isobar menghubungkan titik-titik dengan tekanan udara rata-rata permukaan laut yang sama."
    },
    {
        id: 3,
        question: "Apa arti jika garis-garis isobar pada peta cuaca digambarkan sangat rapat?",
        options: ["Udara sangat tenang", "Gradien tekanan kuat & angin kencang", "Suhu udara sangat dingin", "Kelembapan udara 100%"],
        answer: 1,
        explanation: "Isobar rapat menandakan perbedaan tekanan udara yang besar dalam jarak singkat, memicu angin kencang."
    },
    {
        id: 4,
        question: "Jenis awan menjulang tinggi yang sering menyebabkan hujan lebat, petir, dan cuaca ekstrem adalah...",
        options: ["Cirrus", "Stratus", "Cumulonimbus", "Altocumulus"],
        answer: 2,
        explanation: "Awan Cumulonimbus (Cb) adalah awan konvektif badai bertingkat tinggi."
    },
    {
        id: 5,
        question: "Metode prediksi cuaca modern berbasis komputasi persamaan matematika fisika disebut...",
        options: ["NWP (Numerical Weather Prediction)", "Metode Astrologi", "Pengamatan Visual", "Analisa Manual"],
        answer: 0,
        explanation: "NWP memproses persamaan diferensial atmosfer menggunakan superkomputer."
    }
];

// STATE MANAGEMENT
let currentCategory = 'all';
let customMaterials = [];

// Load Custom Materials from LocalStorage on Init
function getStoredMaterials() {
    try {
        const stored = localStorage.getItem('meteo_custom_materials');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveCustomMaterials(mats) {
    try {
        localStorage.setItem('meteo_custom_materials', JSON.stringify(mats));
    } catch (e) {
        console.error("Gagal menyimpan materi lokal", e);
    }
}

// INITIALIZATION ON WINDOW LOAD
window.onload = function() {
    customMaterials = getStoredMaterials();
    renderSidebar();
    renderModules();
    renderGlossary();
    renderQuiz();

    // Mobile menu toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('hidden');
    });
};

// RENDER SIDEBAR MODULE NAVIGATION
function renderSidebar() {
    const nav = document.getElementById('sidebarModuleNav');
    const allItems = [...defaultModules, ...customMaterials];
    
    let filtered = allItems.filter(item => {
        const catMatch = currentCategory === 'all' || item.category === currentCategory || (currentCategory === 'user' && item.isUserAdded);
        return catMatch;
    });

    document.getElementById('moduleCountBadge').innerText = `${filtered.length} Modul`;

    if (filtered.length === 0) {
        nav.innerHTML = `<div class="text-xs text-slate-400 p-2 text-center">Tidak ada modul ditemukan</div>`;
        return;
    }

    nav.innerHTML = filtered.map(mod => `
        <a href="#${mod.id}" class="group flex items-center justify-between p-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition border border-transparent hover:border-sky-100">
            <div class="flex items-center gap-2.5 truncate pr-2">
                <i class="fa-solid ${mod.icon || 'fa-book'} text-sky-600 group-hover:scale-110 transition-transform"></i>
                <span class="truncate">${mod.title}</span>
            </div>
            ${mod.isUserAdded ? '<span class="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">User</span>' : ''}
        </a>
    `).join('');
}

// RENDER MODULE CONTENT CARDS
function renderModules() {
    const container = document.getElementById('moduleContentArea');
    const searchVal = document.getElementById('searchInput').value.toLowerCase();
    const allItems = [...defaultModules, ...customMaterials];

    let filtered = allItems.filter(mod => {
        const matchCat = (currentCategory === 'all') || 
                         (currentCategory === 'user' && mod.isUserAdded) || 
                         (mod.category === currentCategory);
        const matchSearch = mod.title.toLowerCase().includes(searchVal) || 
                            mod.summary.toLowerCase().includes(searchVal) || 
                            mod.content.toLowerCase().includes(searchVal);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <i class="fa-solid fa-folder-open text-4xl text-slate-300 mb-3"></i>
                <h4 class="font-bold text-slate-700">Materi Tidak Ditemukan</h4>
                <p class="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian atau filter kategori Anda.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(mod => `
        <article id="${mod.id}" class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 relative overflow-hidden">
            ${mod.isUserAdded ? `
                <button onclick="deleteCustomMaterial('${mod.id}')" title="Hapus Catatan Ini" class="absolute top-6 right-6 text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition">
                    <i class="fa-solid fa-trash-can text-sm"></i>
                </button>
            ` : ''}
            
            <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-lg">
                    <i class="fa-solid ${mod.icon || 'fa-book'}"></i>
                </div>
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                        ${getCategoryName(mod.category)}
                    </span>
                    <h3 class="text-lg sm:text-xl font-bold text-slate-900 mt-1">${mod.title}</h3>
                </div>
            </div>

            <p class="text-xs sm:text-sm text-slate-500 font-medium italic border-l-2 border-sky-400 pl-3 mb-5">
                "${mod.summary}"
            </p>

            <div class="prose prose-sm max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed">
                ${mod.content}
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span><i class="fa-solid fa-circle-info mr-1"></i> Modul Pembelajaran Prediksi Cuaca</span>
                <a href="#hero" class="hover:text-sky-600 transition flex items-center gap-1">Kembali ke Atas <i class="fa-solid fa-arrow-up"></i></a>
            </div>
        </article>
    `).join('');
}

function getCategoryName(catKey) {
    const map = {
        dasar: 'Konsep Dasar',
        unsur: 'Unsur Cuaca',
        teknologi: 'Alat & Teknologi',
        prediksi: 'Metode Prediksi'
    };
    return map[catKey] || 'Catatan Pengguna';
}

// FILTER FUNCTIONS
function filterCategory(cat) {
    currentCategory = cat;
    
    // Update button UI active states
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-sky-600', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-600');
    });
    event.currentTarget.classList.remove('bg-slate-100', 'text-slate-600');
    event.currentTarget.classList.add('bg-sky-600', 'text-white');

    renderSidebar();
    renderModules();
}

function filterModules() {
    renderModules();
}

// RENDER GLOSSARY
function renderGlossary() {
    const grid = document.getElementById('glossaryGrid');
    grid.innerHTML = glossaryData.map(item => `
        <div class="glossary-card bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-teal-300 transition">
            <h4 class="font-bold text-slate-900 text-sm text-teal-700 flex items-center gap-2">
                <i class="fa-solid fa-bookmark text-xs"></i>
                ${item.term}
            </h4>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed">${item.desc}</p>
        </div>
    `).join('');
}

function filterGlossary() {
    const val = document.getElementById('glossarySearch').value.toLowerCase();
    const cards = document.querySelectorAll('.glossary-card');
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(val) ? 'block' : 'none';
    });
}

// RENDER QUIZ
function renderQuiz() {
    const container = document.getElementById('quizQuestionsContainer');
    container.innerHTML = quizQuestions.map((q, idx) => `
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <p class="font-semibold text-xs sm:text-sm text-slate-800 mb-3">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-sky-600 text-white rounded-full text-[10px] mr-1.5">${idx + 1}</span>
                ${q.question}
            </p>
            <div class="space-y-2 pl-6">
                ${q.options.map((opt, oIdx) => `
                    <label class="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer hover:text-sky-700">
                        <input type="radio" name="q_${q.id}" value="${oIdx}" class="text-sky-600 focus:ring-sky-500">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function submitQuiz(e) {
    e.preventDefault();
    let score = 0;
    let total = quizQuestions.length;
    let feedback = [];

    quizQuestions.forEach(q => {
        const selected = document.querySelector(`input[name="q_${q.id}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        } else {
            feedback.push(`Soal ${q.id}: ${q.explanation}`);
        }
    });

    const resultBox = document.getElementById('quizResultBox');
    resultBox.classList.remove('hidden');

    const percentage = (score / total) * 100;
    let isPass = percentage >= 60;

    resultBox.className = `mt-6 p-5 rounded-xl border ${isPass ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`;
    
    resultBox.innerHTML = `
        <div class="flex items-center gap-3 mb-2">
            <i class="fa-solid ${isPass ? 'fa-circle-check text-emerald-600' : 'fa-circle-xmark text-rose-600'} text-2xl"></i>
            <div>
                <h4 class="font-bold text-sm">Hasil Kuis: ${score} / ${total} Benar (${percentage}%)</h4>
                <p class="text-xs mt-0.5">${isPass ? 'Luar biasa! Pemahaman Anda tentang sains prediksi cuaca sangat baik.' : 'Tetap semangat! Pelajari kembali modul-modul di atas.'}</p>
            </div>
        </div>
        ${feedback.length > 0 ? `
            <div class="mt-3 pt-3 border-t border-slate-200 text-xs space-y-1">
                <p class="font-semibold">Catatan Evaluasi:</p>
                ${feedback.map(f => `<p>• ${f}</p>`).join('')}
            </div>
        ` : ''}
    `;
}

function resetQuiz() {
    document.getElementById('quizForm').reset();
    const resultBox = document.getElementById('quizResultBox');
    resultBox.classList.add('hidden');
}

// MODAL ADD MATERIAL FUNCTIONS
function openAddModal() {
    document.getElementById('addModal').classList.remove('hidden');
}

function closeAddModal() {
    document.getElementById('addModal').classList.add('hidden');
    document.getElementById('addMaterialForm').reset();
}

function handleAddNewMaterial(e) {
    e.preventDefault();
    const title = document.getElementById('matTitle').value;
    const category = document.getElementById('matCategory').value;
    const icon = document.getElementById('matIcon').value;
    const summary = document.getElementById('matSummary').value;
    const content = document.getElementById('matContent').value;

    const newMat = {
        id: `user-mod-${Date.now()}`,
        title: title,
        category: category,
        icon: icon,
        summary: summary,
        content: `<p class="whitespace-pre-line">${content}</p>`,
        isUserAdded: true
    };

    customMaterials.push(newMat);
    saveCustomMaterials(customMaterials);

    renderSidebar();
    renderModules();
    closeAddModal();

    setTimeout(() => {
        const el = document.getElementById(newMat.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function deleteCustomMaterial(id) {
    if (confirm("Apakah Anda yakin ingin menghapus catatan materi ini?")) {
        customMaterials = customMaterials.filter(m => m.id !== id);
        saveCustomMaterials(customMaterials);
        renderSidebar();
        renderModules();
    }
}
