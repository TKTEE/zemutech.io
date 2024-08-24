let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.classList.add('active'); // Show the preview container
        document.body.classList.add('lock-scroll'); // Add scroll lock to body
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active'); // Show the matching preview
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active'); // Hide the active preview
        preveiwContainer.classList.remove('active'); // Hide the preview container
        document.body.classList.remove('lock-scroll'); // Remove scroll lock from body
    };
});
