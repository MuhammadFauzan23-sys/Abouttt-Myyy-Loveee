const images = [
    { src: 'https://source.unsplash.com/200x150/?nature', text: 'Keindahan alam yang menakjubkan' },
    { src: 'https://source.unsplash.com/200x150/?city', text: 'Suasana kota yang sibuk dan modern' },
    { src: 'https://source.unsplash.com/200x150/?ocean', text: 'Lautan luas yang menenangkan' },
    { src: 'https://source.unsplash.com/200x150/?forest', text: 'Hutan hijau yang asri dan sejuk' },
    { src: 'https://source.unsplash.com/200x150/?mountain', text: 'Gunung megah yang menjulang tinggi' }
];

const galleryContainer = document.getElementById('gallery');
images.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    
    const img = document.createElement('img');
    img.src = item.src;
    
    const text = document.createElement('p');
    text.textContent = item.text;
    
    if (index % 2 === 0) {
        galleryItem.appendChild(img);
        galleryItem.appendChild(text);
    } else {
        galleryItem.appendChild(text);
        galleryItem.appendChild(img);
    }
    
    galleryContainer.appendChild(galleryItem);
});
