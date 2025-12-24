// Default settings
let settings = {
  size: 1024,
  fgColor: '#6907E3',
  bgColor: '#F8F3C6',
  transparentBg: false
};

// DOM Elements
const mainPage = document.getElementById('mainPage');
const settingsPage = document.getElementById('settingsPage');
const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const editBtn = document.getElementById('editBtn');
const backBtn = document.getElementById('backBtn');
const qrImage = document.getElementById('qrImage');
const qrPlaceholder = document.getElementById('qrPlaceholder');

// Settings inputs
const sizeInput = document.getElementById('sizeInput');
const fgColorInput = document.getElementById('fgColorInput');
const bgColorInput = document.getElementById('bgColorInput');
const fgColorPreview = document.getElementById('fgColorPreview');
const bgColorPreview = document.getElementById('bgColorPreview');
const fgColorPicker = document.getElementById('fgColorPicker');
const bgColorPicker = document.getElementById('bgColorPicker');
const transparentBg = document.getElementById('transparentBg');
const saveBtn = document.getElementById('saveBtn');

// Load settings from storage
chrome.storage.local.get(['qrSettings'], (result) => {
  if (result.qrSettings) {
    settings = result.qrSettings;
    updateSettingsUI();
  }
});

// Update settings UI
function updateSettingsUI() {
  sizeInput.value = settings.size;
  fgColorInput.value = settings.fgColor;
  bgColorInput.value = settings.bgColor;
  fgColorPreview.style.backgroundColor = settings.fgColor;
  bgColorPreview.style.backgroundColor = settings.bgColor;
  fgColorPicker.value = settings.fgColor;
  bgColorPicker.value = settings.bgColor;
  transparentBg.checked = settings.transparentBg;
}

// Generate QR Code
function generateQRCode() {
  const text = urlInput.value.trim();
  
  if (text === '') {
    alert('Please enter text or URL');
    return;
  }

  const fgColor = settings.fgColor.replace('#', '');
  const bgColor = settings.transparentBg ? 'transparent' : settings.bgColor.replace('#', '');
  
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${settings.size}x${settings.size}&data=${encodeURIComponent(text)}&color=${fgColor}&bgcolor=${bgColor}`;
  
  qrImage.src = apiUrl;
  qrImage.style.display = 'block';
  qrPlaceholder.style.display = 'none';
}

// Download QR Code
function downloadQRCode() {
  const text = urlInput.value.trim();
  
  if (text === '') {
    alert('Please generate a QR code first');
    return;
  }

  // Generate if not already generated
  if (qrImage.style.display === 'none') {
    generateQRCode();
  }

  // Wait a moment for image to load, then download
  setTimeout(() => {
    const fgColor = settings.fgColor.replace('#', '');
    const bgColor = settings.transparentBg ? 'transparent' : settings.bgColor.replace('#', '');
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${settings.size}x${settings.size}&data=${encodeURIComponent(text)}&color=${fgColor}&bgcolor=${bgColor}`;
    
    fetch(apiUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'qrcode.png';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Download error:', error);
        alert('Failed to download QR code');
      });
  }, 500);
}

// Show settings page
function showSettings() {
  mainPage.classList.add('hidden');
  settingsPage.classList.add('active');
}

// Show main page
function showMain() {
  settingsPage.classList.remove('active');
  mainPage.classList.remove('hidden');
}

// Save settings
function saveSettings() {
  settings.size = parseInt(sizeInput.value);
  settings.fgColor = fgColorInput.value;
  settings.bgColor = bgColorInput.value;
  settings.transparentBg = transparentBg.checked;
  
  chrome.storage.local.set({ qrSettings: settings }, () => {
    // Regenerate QR if text exists
    if (urlInput.value.trim() !== '' && qrImage.style.display !== 'none') {
      generateQRCode();
    }
    showMain();
  });
}

// Event Listeners
generateBtn.addEventListener('click', generateQRCode);
downloadBtn.addEventListener('click', downloadQRCode);
editBtn.addEventListener('click', showSettings);
backBtn.addEventListener('click', showMain);
saveBtn.addEventListener('click', saveSettings);

// Allow Enter key to generate
urlInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    generateQRCode();
  }
});

// Foreground color picker
fgColorPreview.addEventListener('click', () => {
  fgColorPicker.click();
});

fgColorPicker.addEventListener('input', (e) => {
  const color = e.target.value;
  fgColorInput.value = color;
  fgColorPreview.style.backgroundColor = color;
});

fgColorInput.addEventListener('input', (e) => {
  let color = e.target.value;
  if (color.startsWith('#') && (color.length === 7 || color.length === 4)) {
    fgColorPreview.style.backgroundColor = color;
    fgColorPicker.value = color;
  }
});

// Background color picker
bgColorPreview.addEventListener('click', () => {
  bgColorPicker.click();
});

bgColorPicker.addEventListener('input', (e) => {
  const color = e.target.value;
  bgColorInput.value = color;
  bgColorPreview.style.backgroundColor = color;
});

bgColorInput.addEventListener('input', (e) => {
  let color = e.target.value;
  if (color.startsWith('#') && (color.length === 7 || color.length === 4)) {
    bgColorPreview.style.backgroundColor = color;
    bgColorPicker.value = color;
  }
});

// Transparent background toggle
transparentBg.addEventListener('change', (e) => {
  if (e.target.checked) {
    bgColorInput.disabled = true;
    bgColorPreview.style.opacity = '0.3';
  } else {
    bgColorInput.disabled = false;
    bgColorPreview.style.opacity = '1';
  }
});