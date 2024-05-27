document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('user-input-form');
  const thankYouMessage = document.getElementById('thank-you-message');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const formContainer = document.querySelector('.form-container');
  const outfitUpload = document.getElementById('outfit-upload');
  const preview = document.getElementById('preview');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    title.style.display = 'none';
    description.style.display = 'none';
    formContainer.style.display = 'none';
    thankYouMessage.classList.remove('hidden');
  });

  outfitUpload.addEventListener('change', () => {
    const file = outfitUpload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        preview.innerHTML = '';
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = '';
    }
  });
});
