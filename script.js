function hitung() {
    const jumlahmatch = document.getElementById('match').value;
    const winrate = document.getElementById('winrate').value;
    const targetwinrate = document.getElementById('target_winrate').value;
    let hasil = 0;
    const divHasil = document.getElementById('hasil');
    if (winrate > 100) {
        alert("Mohon masukkan winrate dengan benar");
    } else if (!jumlahmatch || !winrate || !targetwinrate) {
        alert("Mohon masukkan winrate dengan benar kontol")
    } else if (targetwinrate >= 100) {
        document.getElementById('hasil').innerHTML = `<h5>Mohon maaf winrate <span>100%</span> yang ditargetkan tidak mungkin dicapai<h5>`;
        divHasil.classList.add('show-border');
    } else {
        hasil = ((targetwinrate / 100 * jumlahmatch) - (winrate / 100 * jumlahmatch)) / (1 - (targetwinrate / 100));
        divHasil.classList.add('show-border');
        document.getElementById('hasil').innerHTML = `<h5>Kamu harus memenangkan sekitar <span>${Math.ceil(hasil)} pertandingan tanpa kekalahan </span> untuk mencapai winrate <span>${targetwinrate}%</span></h5>`;
    }
}