
let profileButton = document.querySelector('.profile__button-wrapper')
let modalButtonCloses = document.querySelectorAll('.modal__button-close')
let modal = document.querySelector('.modal')
profileButton.addEventListener( 'click', function( e ){
    modal.classList.add( 'modal--active' )
})

modalButtonCloses.forEach( modalButtonClose => {
    modalButtonClose.addEventListener( 'click', function( e ){
        modal.classList.remove( 'modal--active' )
    })
} )
