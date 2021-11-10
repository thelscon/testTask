'use strict';

const headerButtonMenu = document.getElementById ( 'headerButtonMenu' ) ;
const headerMenu = document.getElementById ( 'headerMenu' ) ;

const header = document.getElementById ( 'header' ) ;
const headerLogo = document.getElementById ( 'headerLogo' ) ;

const showUsers = document.getElementById ( 'showUsers' ) ;
const showUsersSection = document.getElementById ( 'showUsersSection' )

const showCreate = document.getElementById ( 'showCreate' ) ;
const showCreateSection = document.getElementById ( 'showCreateSection' ) ;

const showGet = document.getElementById ( 'showGet' ) ;
const showGetSection = document.getElementById ( 'showGetSection' ) ;

const buttonActionUsers = document.getElementById ( 'buttonActionUsers' ) ;
const buttonActionMenuUsers = document.getElementById ( 'buttonActionMenuUsers' ) ;

const buttonActionGet = document.getElementById ( 'buttonActionGet' ) ;
const buttonActionMenuGet = document.getElementById ( 'buttonActionMenuGet' ) ;

const showUpdate = document.getElementById ( 'showUpdate' ) ;
const showUpdateSection = document.getElementById ( 'showUpdateSection' ) ;

const showDelete = document.getElementById ( 'showDelete' ) ;
const showDeleteSection = document.getElementById ( 'showDeleteSection' ) ;

const showAbout = document.getElementById ( 'showAbout' ) ;
const showAboutSection = document.getElementById ( 'showAboutSection' ) ;
let aboutWrapHeight = {} ;

document.body.addEventListener ( 'click' , event => {
    if ( getComputedStyle ( buttonActionMenuGet ).display !== 'none' 
        && ( event.target !== buttonActionGet && event.target !== buttonActionMenuGet ) ) {
        buttonActionMenuGet.style.display = 'none' ;
    }
    if ( getComputedStyle ( buttonActionUsers ).display !== 'none' 
        && ( event.target !== buttonActionUsers && event.target !== buttonActionMenuUsers ) ) {
            buttonActionMenuUsers.style.display = 'none' ;
    }

    switch ( event.target.className ) {
        case 'section-about__wrap__arrow' :
            const sectionAboutWrapHeader = event.target.closest ( 'div' ) ;
            const sectionAboutWrap = event.target.closest ( 'section' ) ;

            if ( ! ( event.target.id in aboutWrapHeight ) ) {
                aboutWrapHeight[event.target.id] = getComputedStyle ( sectionAboutWrap ).height ;
            }
            sectionAboutWrap.style.height = aboutWrapHeight[event.target.id] ;

            if ( getComputedStyle ( sectionAboutWrap ).height !== getComputedStyle ( sectionAboutWrapHeader ).height ) {
                sectionAboutWrap.style.height = getComputedStyle ( sectionAboutWrapHeader ).height ;
                event.target.style.transform = 'rotate(180deg)' ;
            }
            else {
                sectionAboutWrap.style.height = aboutWrapHeight[event.target.id] ;                
                event.target.style.transform = 'rotate(0deg)' ;
            }
        break ;
    }

    switch ( event.target ) {
        case showUsers :
            if ( getComputedStyle ( showUsersSection ).display === 'none' ) {
                showGetSection.style.display = "none" ;
                showCreateSection.style.display = "none" ;
                showUpdateSection.style.display = 'none' ;
                showDeleteSection.style.display = 'none' ;
                showAboutSection.style.display = 'none' ;
                showUsersSection.style.display = 'grid' ;
            }
        break ;
        case showGet :
            if ( getComputedStyle ( showGetSection ).display === 'none' ) {
                showUsersSection.style.display = "none" ;
                showCreateSection.style.display = "none" ;
                showUpdateSection.style.display = 'none' ;
                showDeleteSection.style.display = 'none' ;
                showAboutSection.style.display = 'none' ;
                showGetSection.style.display = "grid" ;
            }            
        break ;
        case showCreate :
            if ( getComputedStyle ( showCreateSection ).display === 'none' ) {
                showUsersSection.style.display = "none" ;
                showGetSection.style.display = "none" ;
                showUpdateSection.style.display = 'none' ;
                showDeleteSection.style.display = 'none' ;
                showAboutSection.style.display = 'none' ;
                showCreateSection.style.display = "grid" ;
            }
        break ;
        case showUpdate :
            if ( getComputedStyle ( showUpdateSection ).display === 'none' ) {
                showUsersSection.style.display = "none" ;
                showGetSection.style.display = "none" ;
                showCreateSection.style.display = "none" ;
                showDeleteSection.style.display = 'none' ;
                showAboutSection.style.display = 'none' ;
                showUpdateSection.style.display = 'grid' ;
            }
        break ;
        case showDelete :
            if ( getComputedStyle ( showDeleteSection ).display === 'none' ) {
                showUsersSection.style.display = "none" ;
                showGetSection.style.display = "none" ;
                showCreateSection.style.display = "none" ;
                showUpdateSection.style.display = 'none' ;
                showAboutSection.style.display = 'none' ;
                showDeleteSection.style.display = 'grid' ;
            }
        break ;
        case showAbout :
            if ( getComputedStyle ( showAboutSection ).display === 'none' ) {
                showUsersSection.style.display = "none" ;
                showGetSection.style.display = "none" ;
                showCreateSection.style.display = "none" ;
                showUpdateSection.style.display = 'none' ;
                showDeleteSection.style.display = 'none' ;
                showAboutSection.style.display = 'grid' ;
            }
        break ;
        case buttonActionUsers :
            if ( getComputedStyle ( buttonActionMenuUsers ).display === 'none' ) {
                buttonActionMenuUsers.style.display = 'grid' ;
            }
            else {
                buttonActionMenuUsers.style.display = 'none' ;
            }
        break ;
        case buttonActionGet :
            if ( getComputedStyle ( buttonActionMenuGet ).display === 'none' ) {
                buttonActionMenuGet.style.display = 'grid' ;
            }
            else {
                buttonActionMenuGet.style.display = 'none' ;
            }
        break ;
        case headerButtonMenu :
            if ( getComputedStyle ( headerMenu ).display === 'none' ) {
                headerMenu.style.display = 'grid' ;
            }
            else {
                headerMenu.style.display = 'none' ;
            }
        break ;
        case header :
            if ( getComputedStyle ( headerMenu ).display !== 'none' ) {
                headerMenu.style.display = 'none' ;
            }
        break ;
        case headerLogo :
            if ( getComputedStyle ( headerMenu ).display !== 'none' ) {
                headerMenu.style.display = 'none' ;
            }
        break ;
    }
} ) ;