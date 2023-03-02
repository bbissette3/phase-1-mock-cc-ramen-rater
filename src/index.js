document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramen => {
        ramen.forEach((ramen) => renderRamen(ramen))
    });
    

    const ramenMenu = document.getElementById('ramen-menu')

    function renderRamen(ramen) {

        const ramenImg = document.createElement('img')
        ramenImg.src = ramen.image
        ramenMenu.append(ramenImg)  

        ramenImg.addEventListener('click', (e) => {
            
            const ramenDetail = document.querySelector('.detail-image')
            ramenDetail.src = ramen.image

            const ramenName = document.querySelector('.name')
            ramenName.innerText = ramen.name

            const ramenRestaurant = document.querySelector('.restaurant')
            ramenRestaurant.innerText = ramen.restaurant
        });
    };

    const form = document.getElementById('new-ramen')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const newName = document.getElementById('new-name').value
            const newRestaurant = document.getElementById('new-restaurant').value
            const newImg = document.getElementById('new-image').value
            const newRating = document.getElementById('new-rating').value
            const newComment = document.getElementById('new-comment').value

            const newRamenObj = {
                name: newName,
                restaurant: newRestaurant,
                image: newImg,
                rating: newRating,
                comment: newComment,
            }
            renderRamen(newRamenObj)
            form.reset()
        });

});