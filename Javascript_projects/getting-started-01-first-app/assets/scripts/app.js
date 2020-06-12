// const backdropElement = document.getElementById('backdrop');
// //const modalLinkElements = document.querySelectorAll('.info-modal');
// console.log(modalLinkElements)
// console.log('dave')
// let infoModal;

// function toggleBackdrop() {
//   backdropElement.classList.toggle('visible');
// }

// function presentInfoModal(event) {
//   console.log('dave')
//   const text = event.target.dataset.text;
//   toggleBackdrop();
//   infoModal = document.createElement('div');
//   infoModal.classList.add('modal');
//   infoModal.innerHTML = `
//     <h2>More Details</h2>
//     <p>${text}</p>
//   `;
//   const closeButton = document.createElement('button');
//   closeButton.addEventListener('click', hideInfoModal);
//   closeButton.textContent = 'Okay';
//   infoModal.appendChild(closeButton);
//   document.body.appendChild(infoModal);
// }

// function hideInfoModal() {
//   toggleBackdrop();
//   document.body.removeChild(infoModal);
// }

// for (const linkElement of modalLinkElements) {
//   console.log('00000000000')
//   linkElement.addEventListener('click', presentInfoModal);
// }

// backdropElement.addEventListener('click', hideInfoModal);