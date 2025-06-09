// Konfigurasi Kampus UIN Jakarta
const UIN_CONFIG = {
  mapCenter: [-6.306746570045115, 106.75417799196325],
  mapZoom: 17,
  routeOptions: {
    color: '#006641',
    weight: 6,
    opacity: 0.8,
    dashArray: '5, 5'
  },
  orsApiKey: '5b3ce3597851110001cf6248364af2109235455990095e433d9ae7ec', // OpenRouteService API key
  locationCategories: {
    "Fakultas": [
      "Fakultas Dirasat Islamiyah",
      "Fakultas Sains & Teknologi",
      "Fakultas Ilmu Tarbiyah",
      "Fakultas Adab dan Humaniora",
      "Fakultas Dakwah dan Komunikasi",
      "Fakultas Psikologi",
      "Fakultas Ilmu Sosial dan Ilmu Politik",
      "Fakultas Ekonomi dan Bisnis",
      "Fakultas Kedokteran"
    ],
    "Administrasi": [
      "Gedung Rektorat",
      "Gedung Administrasi"
    ],
    "Fasilitas": [
      "Perpustakaan Pusat",
      "Auditorium Harun Nasution",
      "Student Center",
      "Fathullah Mosque",
      "Syarif Hidayatullah Hospital",
      "Wisma Syahida Inn",
      "Pusat TIK Nasional"
    ],
    "Asrama": [
      "Mabna Syekh Nawawi",
      "Mabna Syekh Abdul Karim",
      "Mabna Sultan Hasanuddin",
      "Mabna Syarifah Muda'im",
      "Mabna Rusunawa",
      "Mabna Syarifah Khadijah"
    ]
  },
  locations: {
    "Fakultas Dirasat Islamiyah": {
      coords: [-6.3059883529340315, 106.75643559078415],
      keywords: ["fdi", "islamic studies", "dirasat"],
      description: "Fakultas yang mempelajari studi Islam secara mendalam"
    },
     "Fakultas syariah dan Hukum": {
      coords: [-6.306722016268707, 106.7545059816042],
      keywords: ["FSH", "Hukum", "Syariah"],
      description: "Fakultas yang mempelajari Hukum dan Syariat islam"
    },
    "Gedung Administrasi": {
      coords: [-6.307007791532467, 106.7558318248398],
      keywords: ["administrasi", "tata usaha", "kantor"],
      description: "Gedung pusat administrasi kampus"
    },
    "Gedung Rektorat": {
      coords: [-6.306608887163159, 106.75616739180641],
      keywords: ["rektor", "pimpinan", "pusat"],
      description: "Gedung utama tempat rektor dan pimpinan universitas"
    },
    "Fakultas Sains & Teknologi": {
      coords: [-6.306157186313671, 106.75281285841355],
      keywords: ["saintek", "sains", "teknik", "FST"],
      description: "Fakultas untuk program studi sains dan teknologi"
    },
    "Perpustakaan Pusat": {
      coords: [-6.306227977538005, 106.75365260913802],
      keywords: ["perpustakaan", "buku", "pustaka", "baca"],
      description: "Perpustakaan utama universitas"
    },
    "Auditorium Harun Nasution": {
      coords: [-6.306336006666015, 106.7557905867324],
      keywords: ["auditorium", "acara", "event", "seminar"],
      description: "Auditorium utama untuk acara besar"
    },
    "Fakultas Ilmu Tarbiyah": {
      coords: [-6.30705189168481, 106.75523614973584],
      keywords: ["tarbiyah", "keguruan", "pendidikan"],
      description: "Fakultas ilmu pendidikan dan keguruan"
    },
    "Student Center": {
      coords: [-6.306485312303851, 106.75492517416632],
      keywords: ["mahasiswa", "organisasi", "ukm"],
      description: "Pusat kegiatan mahasiswa"
    },
    "Fakultas Dakwah dan Komunikasi": {
      coords: [-6.306935510813755, 106.75391740213242],
      keywords: ["dakwah", "komunikasi", "FDK"],
      description: "Fakultas untuk studi dakwah dan komunikasi"
    },
    "GEDUNG LABORATORIUM": {
      coords: [-6.306093105536057, 106.75307299736478],
      keywords: ["lab", "praktikum", "penelitian"],
      description: "Gedung laboratorium untuk praktikum"
    },
    "Pascasarjana Fakultas Ekonomi dan Bisnis": {
      coords: [-6.30654550691705, 106.75268864523281],
      keywords: ["pascasarjana", "ekonomi", "bisnis"],
      description: "Program pascasarjana ekonomi dan bisnis"
    },
    "Wisma Usaha": {
      coords: [-6.307970345754464, 106.75582466754712],
      keywords: ["wisma", "usaha", "enterprise"],
      description: "Wisma untuk kegiatan usaha universitas"
    },
    "Parking Area Kampus 1": {
      coords: [-6.3053835364030695, 106.75599078431142],
      keywords: ["parkir", "motor", "mobil"],
      description: "Area parkir utama kampus"
    },
    "Fathullah Mosque": {
      coords: [-6.308173638635983, 106.75640728092476],
      keywords: ["masjid", "shalat", "ibadah"],
      description: "Masjid utama kampus"
    },
    "Syarif Hidayatullah Hospital": {
      coords: [-6.30786438614345, 106.75672378159103],
      keywords: ["rumah sakit", "klinik", "kesehatan"],
      description: "Rumah sakit universitas"
    },
    "Madrasah Pembagunan": {
      coords: [-6.310983383313933, 106.75811036986426],
      keywords: ["madrasah", "sekolah", "pembangunan"],
      description: "Madrasah pembangunan UIN"
    },
    "Fakultas Adab dan Humaniora": {
      coords: [-6.3134829115665045, 106.75532430501362],
      keywords: ["adab", "humaniora", "sastra"],
      description: "Fakultas untuk studi humaniora"
    },
    "Mabna Syekh Nawawi": {
      coords: [-6.3113716893994924, 106.7550296864754],
      keywords: ["asrama", "nawawi", "mabna"],
      description: "Asrama mahasiswa putra"
    },
    "Mabna Syekh Abdul Karim": {
      coords: [-6.313571178305521, 106.75643458286977],
      keywords: ["asrama", "abdul karim", "msak"],
      description: "Asrama mahasiswa putra"
    },
    "Mabna Sultan Hasanuddin": {
      coords: [-6.313608801192392, 106.756217771776],
      keywords: ["asrama", "hasanuddin", "mabna"],
      description: "Asrama mahasiswa putra"
    },
    "Mabna Syarifah Muda'im": {
      coords: [-6.309457920377901, 106.75773625140874],
      keywords: ["asrama", "putri", "muda'im"],
      description: "Asrama mahasiswi"
    },
    "Mabna Rusunawa": {
      coords: [-6.312493310253032, 106.75845741262023],
      keywords: ["asrama", "rusun", "fatimah"],
      description: "Asrama rusunawa mahasiswi"
    },
    "Mabna Syarifah Khadijah": {
      coords: [-6.314212565549914, 106.75764736337197],
      keywords: ["asrama", "khadijah", "putri"],
      description: "Asrama mahasiswi"
    },
    "Pusat Pelatihan dan Bahasa": {
      coords: [-6.310795272346702, 106.75934069388882],
      keywords: ["pelatihan", "bahasa", "kursus"],
      description: "Pusat pelatihan dan pengembangan bahasa"
    },
    "Pusat Pengkajian Islam dan Masyarakat": {
      coords: [-6.310464574273974, 106.75992371450904],
      keywords: ["ppim", "penelitian", "islam"],
      description: "Pusat penelitian Islam dan masyarakat"
    },
    "Sekolah Pascasarjana": {
      coords: [-6.310617806648334, 106.76025877847444],
      keywords: ["pascasarjana", "s2", "s3"],
      description: "Gedung sekolah pascasarjana"
    },
    "Fakultas Kedokteran": {
      coords: [-6.311952193260399, 106.76017358296926],
      keywords: ["kedokteran", "fk", "kesehatan"],
      description: "Fakultas kedokteran UIN"
    },
    "Wisma Syahida Inn": {
      coords: [-6.310623785082338, 106.76022926323843],
      keywords: ["hotel", "penginapan", "syahida"],
      description: "Penginapan tamu universitas"
    },
    "Fakultas Psikologi": {
      coords: [-6.309722347283999, 106.75902313361495],
      keywords: ["psikologi", "fpsi", "kejiwaan"],
      description: "Fakultas psikologi"
    },
    "Pusat Layanan Psikologi": {
      coords: [-6.3099116304804825, 106.75874686608421],
      keywords: ["konseling", "psikolog", "bimbingan"],
      description: "Layanan konseling psikologi"
    },
    "Pusat TIK Nasional": {
      coords: [-6.308813684335286, 106.75852067900793],
      keywords: ["tik", "teknologi", "informasi"],
      description: "Pusat teknologi informasi dan komunikasi"
    },
    "Fakultas Ilmu Sosial dan Ilmu Politik": {
      coords: [-6.309192614369759, 106.75932678124683],
      keywords: ["fisip", "sosial", "politik"],
      description: "Fakultas ilmu sosial dan politik"
    },
    "Fakultas Ekonomi dan Bisnis": {
      coords: [-6.311038382087485, 106.75658824327301],
      keywords: ["feb", "ekonomi", "bisnis"],
      description: "Fakultas ekonomi dan bisnis"
    },
    
  }
};

// Inisialisasi Aplikasi
class CampusNavigator {
  constructor() {
    this.map = null;
    this.startMarker = null;
    this.endMarker = null;
    this.routeLayer = null;
    this.currentLocationMarker = null;
    this.alternativeRoutes = [];
    this.initialize();
  }

  initialize() {
    this.initMap();
    this.initDOM();
    this.bindEvents();
    this.addLocationMarkers();
  }

  initMap() {
    // Inisialisasi peta Leaflet
    this.map = L.map('map', {
      zoomControl: false
    }).setView(UIN_CONFIG.mapCenter, UIN_CONFIG.mapZoom);

    // Tambahkan tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Tambahkan zoom control
    L.control.zoom({
      position: 'topright'
    }).addTo(this.map);
  }

  initDOM() {
    this.dom = {
      startInput: document.getElementById('start-point'),
      endInput: document.getElementById('end-point'),
      routeButton: document.getElementById('route-button'),
      resetButton: document.getElementById('reset-button'),
      directionsPanel: document.getElementById('directions'),
      routeSummary: document.getElementById('route-summary'),
      startSuggestions: document.getElementById('start-suggestions'),
      endSuggestions: document.getElementById('end-suggestions'),
      locateButton: document.getElementById('locate-button'),
      zoomInButton: document.getElementById('zoom-in-button'),
      zoomOutButton: document.getElementById('zoom-out-button'),
      routeOptions: document.getElementById('route-options'),
      alternativeRoutesContainer: document.getElementById('alternative-routes')
    };
  }

  bindEvents() {
    // Event untuk input pencarian
    this.dom.startInput.addEventListener('input', (e) => this.handleInput(e, 'start'));
    this.dom.endInput.addEventListener('input', (e) => this.handleInput(e, 'end'));
    
    // Event untuk klik suggestion
    this.dom.startSuggestions.addEventListener('click', (e) => this.selectSuggestion(e, 'start'));
    this.dom.endSuggestions.addEventListener('click', (e) => this.selectSuggestion(e, 'end'));
    
    // Event untuk tombol
    this.dom.routeButton.addEventListener('click', () => this.showRoute());
    this.dom.resetButton.addEventListener('click', () => this.reset());
    this.dom.locateButton.addEventListener('click', () => this.locateUser());
    this.dom.zoomInButton.addEventListener('click', () => this.map.zoomIn());
    this.dom.zoomOutButton.addEventListener('click', () => this.map.zoomOut());
    
    // Event untuk keyboard navigation
    this.dom.startInput.addEventListener('keydown', (e) => this.handleKeyDown(e, 'start'));
    this.dom.endInput.addEventListener('keydown', (e) => this.handleKeyDown(e, 'end'));
    
    // Klik di luar untuk menutup suggestions
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrapper')) {
        this.dom.startSuggestions.style.display = 'none';
        this.dom.endSuggestions.style.display = 'none';
      }
    });
  }

  addLocationMarkers() {
    // Tambahkan marker untuk semua lokasi penting
    Object.entries(UIN_CONFIG.locations).forEach(([name, data]) => {
      const marker = L.marker(data.coords)
        .addTo(this.map)
        .bindPopup(`
          <div class="popup-content" style="font-family: 'Poppins', sans-serif; max-width: 250px;">
            <h3 style="font-size: 1.1rem; font-weight: 600; color: #006641;">${name}</h3>
            <p style="font-size: 0.9rem; color: #555;">${data.description}</p>
            <div style="display: flex; gap: 8px; margin-top: 8px;">
              <button class="use-as-start" data-location="${name}" style="flex: 1; padding: 6px 8px; background-color: #006641; color: white; border: none; border-radius: 4px;">Asal</button>
              <button class="use-as-end" data-location="${name}" style="flex: 1; padding: 6px 8px; background-color: #0e7490; color: white; border: none; border-radius: 4px;">Tujuan</button>
            </div>
          </div>
        `)
      
      marker.on('popupopen', () => {
        document.querySelector('.use-as-start').addEventListener('click', (e) => {
          const locationName = e.target.getAttribute('data-location');
          this.setLocation(locationName, 'start');
          this.map.closePopup();
        });
        
        document.querySelector('.use-as-end').addEventListener('click', (e) => {
          const locationName = e.target.getAttribute('data-location');
          this.setLocation(locationName, 'end');
          this.map.closePopup();
        });
      });
    });
  }

  handleInput(event, type) {
    const input = event.target.value.trim();
    const suggestionsContainer = type === 'start' ? this.dom.startSuggestions : this.dom.endSuggestions;
    
    if (input.length < 2) {
      suggestionsContainer.style.display = 'none';
      return;
    }
    
    const filtered = this.searchLocations(input);
    this.showSuggestions(filtered, suggestionsContainer);
  }

  searchLocations(query) {
    const lowerQuery = query.toLowerCase();
    return Object.entries(UIN_CONFIG.locations)
      .filter(([name, data]) => {
        return name.toLowerCase().includes(lowerQuery) || 
               data.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
      })
      .map(([name, data]) => ({ name, ...data }));
  }

  showSuggestions(results, container) {
    container.innerHTML = '';
    
    if (results.length === 0) {
      container.style.display = 'none';
      return;
    }
    
    results.slice(0, 5).forEach(result => {
      const div = document.createElement('div');
      div.className = 'suggestion-item';
      div.dataset.name = result.name;
      div.innerHTML = `
        <strong>${result.name}</strong>
        <small>${result.description}</small>
      `;
      container.appendChild(div);
    });
    
    container.style.display = 'block';
  }

  selectSuggestion(event, type) {
    const item = event.target.closest('.suggestion-item');
    if (!item) return;
    
    const locationName = item.dataset.name;
    this.setLocation(locationName, type);
    
    const container = type === 'start' ? this.dom.startSuggestions : this.dom.endSuggestions;
    container.style.display = 'none';
  }

  setLocation(locationName, type) {
    const input = type === 'start' ? this.dom.startInput : this.dom.endInput;
    input.value = locationName;
    
    // Tambahkan marker jika lokasi valid
    const locationData = UIN_CONFIG.locations[locationName];
    if (locationData) {
      this.addLocationMarker(locationData.coords, type);
    }
  }

  addLocationMarker(coords, type) {
    // Hapus marker sebelumnya
    if (type === 'start' && this.startMarker) {
      this.map.removeLayer(this.startMarker);
    } else if (type === 'end' && this.endMarker) {
      this.map.removeLayer(this.endMarker);
    }
    
    // Buat marker baru
    const marker = L.marker(coords, {
      icon: this.createCustomIcon(type)
    }).addTo(this.map);
    
    // Simpan ke state
    if (type === 'start') {
      this.startMarker = marker;
    } else {
      this.endMarker = marker;
    }
    
    // Buka popup
    marker.bindPopup(`<b>${type === 'start' ? 'Asal' : 'Tujuan'}</b><br>${this.dom[`${type}Input`].value}`).openPopup();
  }

  createCustomIcon(type) {
    return L.divIcon({
      className: `custom-marker ${type}-marker`,
      html: `<div>${type === 'start' ? 'A' : 'T'}</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });
  }

  async showRoute() {
    // Validasi input
    const startLocation = this.dom.startInput.value.trim();
    const endLocation = this.dom.endInput.value.trim();
    
    if (!startLocation || !endLocation) {
      alert('Harap pilih lokasi asal dan tujuan');
      return;
    }
    
    const startData = UIN_CONFIG.locations[startLocation];
    const endData = UIN_CONFIG.locations[endLocation];
    
     if (!startData) {
    startData = {
      coords: this.startMarker ? this.startMarker.getLatLng() : UIN_CONFIG.mapCenter,
      name: startLocation,
      description: ''
    };
  }
  if (!endData) {
    endData = {
      coords: this.endMarker ? this.endMarker.getLatLng() : UIN_CONFIG.mapCenter,
      name: endLocation,
      description: ''
    };
  }
  
    
    // Tampilkan loading
    this.dom.routeSummary.innerHTML = '<div class="loading">Mencari rute...</div>';
    this.dom.directionsPanel.innerHTML = '';
    this.dom.alternativeRoutesContainer.innerHTML = '';
    
    try {
      // Hapus rute sebelumnya
      if (this.routeLayer) {
        this.map.removeLayer(this.routeLayer);
      }
      
      // Hapus rute alternatif sebelumnya
      this.alternativeRoutes.forEach(route => {
        this.map.removeLayer(route.layer);
      });
      this.alternativeRoutes = [];
      
      // Dapatkan rute dari OpenRouteService API
      const routes = await this.getRoutesFromAPI(startData.coords, endData.coords);
      
      // Tampilkan rute utama
      this.displayMainRoute(routes[0], startData, endData);
      
      // Tampilkan rute alternatif jika ada
      if (routes.length > 1) {
        this.displayAlternativeRoutes(routes.slice(1), startData, endData);
      }
    } catch (error) {
      console.error('Error fetching route:', error);
      this.dom.routeSummary.innerHTML = '<div class="error">Gagal mendapatkan rute. Silakan coba lagi.</div>';
    }
  }

  async getRoutesFromAPI(startCoords, endCoords) {
    const body = {
      coordinates: [
        [startCoords[1], startCoords[0]], // ORS expects [lon, lat]
        [endCoords[1], endCoords[0]]
      ],
      instructions: true,
      instructions_format: 'html',
      alternative_routes: {
        target_count: 2, // Maksimal 2 rute alternatif
        weight_factor: 1.4
      },
      preference: 'recommended',
      units: 'm'
    };
    
    const response = await fetch('https://api.openrouteservice.org/v2/directions/foot-walking', {
      method: 'POST',
      headers: {
        'Authorization': UIN_CONFIG.orsApiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.routes || [data];
  }

  displayMainRoute(routeData, startData, endData) {
    // Decode polyline
    const geometry = routeData.geometry;
    const coordinates = this.decodePolyline(geometry);
    
    // Buat polyline untuk peta
    this.routeLayer = L.polyline(coordinates, {
      color: UIN_CONFIG.routeOptions.color,
      weight: UIN_CONFIG.routeOptions.weight,
      opacity: UIN_CONFIG.routeOptions.opacity
    }).addTo(this.map);
    
    // Sesuaikan view peta
    this.map.fitBounds(this.routeLayer.getBounds());
    
    // Tampilkan petunjuk arah
    this.showRouteSummary(routeData);
    this.showDirections(routeData, startData, endData);
  }

  displayAlternativeRoutes(alternativeRoutes, startData, endData) {
    this.dom.alternativeRoutesContainer.innerHTML = '<h3>Rute Alternatif</h3>';
    
    alternativeRoutes.forEach((route, index) => {
      // Decode polyline
      const coordinates = this.decodePolyline(route.geometry);
      
      // Buat polyline dengan warna berbeda
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];
      const routeLayer = L.polyline(coordinates, {
        color: colors[index % colors.length],
        weight: 4,
        opacity: 0.7,
        dashArray: '5, 3'
      }).addTo(this.map);
      
      // Simpan rute alternatif
      this.alternativeRoutes.push({
        layer: routeLayer,
        data: route
      });
      
      // Buat elemen untuk panel alternatif
      const altRouteDiv = document.createElement('div');
      altRouteDiv.className = 'alternative-route';
      altRouteDiv.innerHTML = `
        <div class="alt-route-summary">
          <span class="alt-route-color" style="background-color: ${colors[index % colors.length]}"></span>
          <span class="alt-route-distance">${(route.summary.distance / 1000).toFixed(1)} km</span>
          <span class="alt-route-duration">${Math.round(route.summary.duration / 60)} menit</span>
        </div>
      `;
      
      altRouteDiv.addEventListener('click', () => {
        // Highlight rute yang dipilih
        this.alternativeRoutes.forEach(r => {
          r.layer.setStyle({
            weight: 4,
            opacity: 0.7
          });
        });
        routeLayer.setStyle({
          weight: 6,
          opacity: 1
        });
        
        // Tampilkan petunjuk untuk rute ini
        this.showRouteSummary(route);
        this.showDirections(route, startData, endData);
      });
      
      this.dom.alternativeRoutesContainer.appendChild(altRouteDiv);
    });
  }

  decodePolyline(encoded) {
    const points = [];
    let index = 0;
    const len = encoded.length;
    let lat = 0;
    let lng = 0;
    
    while (index < len) {
      let b;
      let shift = 0;
      let result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      
      const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
      lat += dlat;
      shift = 0;
      result = 0;
      
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      
      const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
      lng += dlng;
      
      points.push([lat * 1e-5, lng * 1e-5]);
    }
    
    return points;
  }

  showRouteSummary(route) {
    const distance = route.summary.distance;
    const duration = route.summary.duration;
    
    this.dom.routeSummary.innerHTML = `
      <div class="route-summary-item">
        <i class="icon-distance"></i> ${distance < 1000 ? distance.toFixed(0) + ' meter' : (distance / 1000).toFixed(1) + ' km'}
      </div>
      <div class="route-summary-item">
        <i class="icon-time"></i> ${Math.round(duration / 60)} menit
      </div>
    `;
  }

  showDirections(route, startData, endData) {
  const startName = this.dom.startInput.value.trim();
  const endName = this.dom.endInput.value.trim();
  
let directionsHTML = '';

// Langkah awal
directionsHTML += `
  <div class="route-step flex gap-3 items-start mb-4">
    <div class="step-number bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full">1</div>
    <div class="step-content text-left">
      <p class="font-semibold">Mulai dari <strong>${startName}</strong></p>
      ${startData?.description ? `<p class="text-sm text-gray-500 italic">${startData.description}</p>` : ''}
    </div>
  </div>
`;

// Langkah-langkah dari API
let stepCount = 2;
route.segments.forEach(segment => {
  segment.steps.forEach(step => {
    directionsHTML += `
      <div class="route-step flex gap-3 items-start mb-4">
        <div class="step-number bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full">${stepCount++}</div>
        <div class="step-content text-left">
          <p class="font-medium text-gray-800">${step.instruction}</p>
          ${step.distance > 0 ? `<p class="text-sm text-gray-500">${step.distance < 1000 ? `${step.distance.toFixed(0)} meter` : `${(step.distance / 1000).toFixed(1)} km`}</p>` : ''}
        </div>
      </div>
    `;
  });
});

// Langkah akhir
directionsHTML += `
  <div class="route-step flex gap-3 items-start mb-4">
    <div class="step-number bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full">${stepCount}</div>
    <div class="step-content text-left">
      <p class="font-semibold">Tiba di <strong>${endName}</strong></p>
      ${endData?.description ? `<p class="text-sm text-gray-500 italic">${endData.description}</p>` : ''}
    </div>
  </div>
`;

this.dom.directionsPanel.innerHTML = directionsHTML;

}

  locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = [position.coords.latitude, position.coords.longitude];
          
          // Hapus marker sebelumnya
          if (this.currentLocationMarker) {
            this.map.removeLayer(this.currentLocationMarker);
          }
          
          // Tambahkan marker baru
          this.currentLocationMarker = L.marker(userCoords, {
            icon: L.divIcon({
              className: 'current-location-marker',
              html: '<div>📍</div>',
              iconSize: [32, 32],
              iconAnchor: [16, 32]
            })
          }).addTo(this.map)
          .bindPopup('<b>Lokasi Anda Saat Ini</b>')
          .openPopup();
          
          // Geser view peta
          this.map.setView(userCoords, 18);
          
          // Otomatis set sebagai titik awal
          this.dom.startInput.value = 'Lokasi Saya';
          if (this.startMarker) this.map.removeLayer(this.startMarker);
          this.startMarker = this.currentLocationMarker;
        },
        (error) => {
          alert('Tidak dapat mengakses lokasi Anda: ' + error.message);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert('Browser Anda tidak mendukung geolokasi');
    }
  }

  reset() {
    // Reset input
    this.dom.startInput.value = '';
    this.dom.endInput.value = '';
    
    // Hapus semua marker dan layer
    if (this.startMarker) this.map.removeLayer(this.startMarker);
    if (this.endMarker) this.map.removeLayer(this.endMarker);
    if (this.routeLayer) this.map.removeLayer(this.routeLayer);
    if (this.currentLocationMarker) this.map.removeLayer(this.currentLocationMarker);
    
    // Hapus rute alternatif
    this.alternativeRoutes.forEach(route => {
      this.map.removeLayer(route.layer);
    });
    this.alternativeRoutes = [];
    
    // Reset directions panel
    this.dom.directionsPanel.innerHTML = '';
    this.dom.routeSummary.innerHTML = '';
    this.dom.alternativeRoutesContainer.innerHTML = '';
    
    // Kembalikan view ke default
    this.map.setView(UIN_CONFIG.mapCenter, UIN_CONFIG.mapZoom);
  }

  handleKeyDown(event, type) {
    const suggestions = Array.from(
      type === 'start' ? this.dom.startSuggestions.children : this.dom.endSuggestions.children
    );
    
    let activeIndex = suggestions.findIndex(item => item.classList.contains('highlighted'));
    const container = type === 'start' ? this.dom.startSuggestions : this.dom.endSuggestions;
    
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      activeIndex = (activeIndex + 1) % suggestions.length;
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      activeIndex = (activeIndex - 1 + suggestions.length) % suggestions.length;
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      const selectedItem = suggestions[activeIndex];
      this.setLocation(selectedItem.dataset.name, type);
      container.style.display = 'none';
      return;
    } else {
      return;
    }
    
    // Update highlight
    suggestions.forEach((item, index) => {
      item.classList.toggle('highlighted', index === activeIndex);
    });
    
    // Scroll ke item yang aktif
    if (suggestions[activeIndex]) {
      suggestions[activeIndex].scrollIntoView({
        block: 'nearest'
      });
    }
  }
  
}

// Jalankan aplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  new CampusNavigator();
});


const directionsBox = document.getElementById("directions-box");
const routeButton = document.getElementById("route-button");
const resetButton = document.getElementById("reset-button");

routeButton.addEventListener("click", () => {
  // Logika cari rute jalan ...
  directionsBox.classList.remove("hidden"); // tampilkan box arah
});

resetButton.addEventListener("click", () => {
  // Reset map dan input ...
  directionsBox.classList.add("hidden"); // sembunyikan box arah
});
