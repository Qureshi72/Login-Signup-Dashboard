
const tables = document.querySelector('.table');
tables.addEventListener('click', () => {
    const bootstrap = document.querySelector('.bootstrap-drop');
    const chevron = document.querySelector('.fa-chevron-right')
    chevron.classList.toggle('rotate')
    bootstrap.classList.toggle('bootstrap-show')

})



const page = document.querySelector('.page');

page.addEventListener('click', () => {
    const pageDown = document.querySelector('.page-drop')
    pageDown.classList.toggle('page-drop-show')
    const pageChevron = document.querySelector('.page-chevron')
    pageChevron.classList.toggle('rotate')
})

const component = document.querySelector('.component')
component.addEventListener('click', () => {
    const pageDown = document.querySelector('.component-drop')
    pageDown.classList.toggle('component-drop-show')
    const pageChevron = document.querySelector('.component-chevron')
    pageChevron.classList.toggle('rotate')
})



const bell = document.querySelector('.fa-bell');
const notifications = document.querySelector('.notifications')
const profile = document.querySelector('.profile');
const profile2 = document.querySelector('.profile2')


bell.addEventListener('click', () => {
    if (notifications.classList.contains('show')) {
        notifications.classList.remove('show')
    }
    else {
        notifications.classList.add('show')
        if (profile2.classList.contains('show2')) {
            profile2.classList.remove('show2')
        }
    }
});




profile.addEventListener('click', () => {

    if (profile2.classList.contains('show2')) {
        profile2.classList.remove('show2')
    }
    else {
        profile2.classList.add('show2')
        if (notifications.classList.contains('show')) {
            notifications.classList.remove('show')
        }
    }
})


const newTask = document.querySelector('.new-task')
const newTaskDrop = document.querySelector('.new-task-drop')

newTask.addEventListener('click', () => {
    newTaskDrop.classList.toggle('show3')
})


const hamburger = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.side-bar');
hamburger.addEventListener('click', () => {

    if (!sideBar.hasAttribute('style')) {
        sideBar.setAttribute('style', 'top:0px')
    }

    else {
        sideBar.removeAttribute('style')
    }

})


const cross = document.querySelector('.cross-icon');

cross.addEventListener('click', () => {
    sideBar.removeAttribute('style');
})


const logout = document.getElementsByClassName('log')[0]
logout.addEventListener('click',()=>{
    window.location.href='index.html';
})

const logout2 = document.querySelector('.side-bar-button');

logout2.addEventListener('click',()=>{
    window.location.href='index.html';
})