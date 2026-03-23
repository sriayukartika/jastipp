// Ambil elemen modal dan tombol
var modal = document.getElementById('modal');
var title = document.getElementById('modal-title');
var hargaText = document.getElementById('modal-harga');
var btnKirim = document.getElementById('btn-kirim');
var btnTutup = document.getElementById('btn-tutup');

// Fungsi buka modal
function bukaModal(nama, harga) {
  title.innerText = nama;
  hargaText.innerText = 'Rp' + harga.toLocaleString('id-ID');
  modal.classList.add('active');
}

// Fungsi tutup modal
function tutupModal() {
  modal.classList.remove('active');
}

// Ambil semua tombol pesan
var tombolPesan = document.querySelectorAll('.btn-pesan');

// Pasang event klik pada setiap tombol
tombolPesan.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var nama = btn.getAttribute('data-nama');
    var harga = Number(btn.getAttribute('data-harga'));
    bukaModal(nama, harga);
  });
});

// Event tombol kirim dan tutup
btnKirim.addEventListener('click', function() {
  alert('Pesanan berhasil! Silakan ambil di kantin.');
  tutupModal();
});

btnTutup.addEventListener('click', tutupModal);

// Tutup modal jika klik area luar
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    tutupModal();
  }
});