import { useEffect } from 'react';

import styles from './contactUs.module.css';
import { useState } from 'react';

export default function ContactUs(){

    const [stringLength, setStringLength] = useState(70);

    const addressBook = {
        cityLabel: 'City ',
        city:  'Nice City, Nice Country',
        addressLabel: 'Address ',
        address: ' 23/45 Someplace str.',
        phoneLabel: 'Phone ',
        phone:' +12.345.678.910',
        emailLabel: 'E-mail ',
        email: ' company@message.com',
    }



    useEffect(function(){
        window.addEventListener('resize', function(){
            const baseLength = 35
            const width = window.screen.availWidth;
            const extraDots = dotCalculator(width);
            setStringLength(baseLength + extraDots);
            console.log((baseLength + extraDots))
  
        })}, [])

        function dotCalculator(width){
            const change = Math.floor((width - 640) / 19)
            console.log(change)
            return change
        }


    return (
        <div className={`${styles['contact-us']}`}>
            <div className={`${styles['contact-us__title']}`}>
                <h3 className={`${styles['contact-us__label']}`}>Let's Connect!</h3>
                <img className={styles['contact-us__ornament--image']} src='johnny_automatic_hops_and_barley.svg'  alt="Small company logo"></img>
             </div>
             <div className={`${styles['contact-us__contacts']}`}>
                <ul className={`${styles['contact-us__list']}`}>
                    <li className={`${styles['contact-us__list-item']}`}>
                        {`${addressBook.cityLabel}` + `${addressBook.city.padStart(stringLength - addressBook.cityLabel.length, '. ')}`}
                    </li>
                    <li className={`${styles['contact-us__list-item']}`}>
                        {`${addressBook.addressLabel}` + `${addressBook.address.padStart(stringLength - addressBook.addressLabel.length, '. ')}`}
                    </li>
                    <li className={`${styles['contact-us__list-item']}`}>
                    {`${addressBook.phoneLabel.padEnd(stringLength - addressBook.phone.length, '. ')}`}<a href="tel:+12.345.678.910" className={`${styles['contact-us__anchor']}`}>{addressBook.phone.replaceAll('.', ' ')}</a>
                    </li>
                    <li className={`${styles['contact-us__list-item']}`}>
                        {`${addressBook.emailLabel.padEnd(stringLength - addressBook.email.length, '. ')}`}<a href={`mailto:${addressBook.mail}`}  className={`${styles['contact-us__anchor']}`}>{addressBook.email}</a>
                    </li>
                </ul>
             </div>
             <div className={`${styles['contact-us__links']}`}>
                    <a href='#' className={`${styles['contact-us__anchor']}`}><FacebookIcon></FacebookIcon></a>
                    <a href='#' className={`${styles['contact-us__anchor']}`}><InstagramIcon></InstagramIcon></a>
                    <a href='#' className={`${styles['contact-us__anchor']}`}><TwitterIcon></TwitterIcon></a>
                    <a href='#' className={`${styles['contact-us__anchor']}`}><TiktokIcon></TiktokIcon></a>
                </div>
        </div>
    )
    
}

function FacebookIcon(){
    return (
        <svg width="100px" height="100px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={`${styles['contact-us__icon']} ${styles['animation1']}`} alt="Facebook logo">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4995 7.30874C10.393 8.1575 10.3923 9.05709 10.3923 9.9425C10.3923 10.2186 10.1685 10.4425 9.89231 10.4425H7.5V12.7538H9.89231C10.1685 12.7538 10.3923 12.9777 10.3923 13.2538V21C10.3923 21.2762 10.1685 21.5 9.89231 21.5C9.61617 21.5 9.39231 21.2762 9.39231 21V13.7538H7C6.72386 13.7538 6.5 13.53 6.5 13.2538V9.9425C6.5 9.66636 6.72386 9.4425 7 9.4425H9.39301C9.39614 8.70911 9.41331 7.93296 9.50726 7.18425C9.62293 6.26234 9.85913 5.34093 10.3595 4.55832C11.403 2.92633 13.4341 2.1173 17.0761 2.67781C17.32 2.71535 17.5 2.92522 17.5 3.17199V6.03985C17.5 6.1816 17.4398 6.3167 17.3345 6.41152C17.2291 6.50634 17.0884 6.55198 16.9474 6.53708C15.3986 6.37338 14.83 6.57598 14.5516 6.94147C14.3963 7.14541 14.2786 7.46242 14.2066 7.97235C14.1503 8.37157 14.1261 8.85529 14.1184 9.4425H17C17.1502 9.4425 17.2924 9.51 17.3873 9.62633C17.4823 9.74267 17.5199 9.89552 17.4899 10.0426L16.8129 13.354C16.7654 13.5867 16.5606 13.7538 16.3231 13.7538H14.1154V21C14.1154 21.2762 13.8915 21.5 13.6154 21.5C13.3392 21.5 13.1154 21.2762 13.1154 21V13.2538C13.1154 12.9777 13.3392 12.7538 13.6154 12.7538H15.9149L16.3874 10.4425H13.6154C13.3392 10.4425 13.1154 10.2186 13.1154 9.9425C13.1154 9.12077 13.1342 8.41555 13.2164 7.83262C13.2983 7.25231 13.4498 6.73779 13.7561 6.33563C14.3204 5.5945 15.2517 5.41948 16.5 5.49568V3.60636C13.3324 3.20155 11.9049 3.99772 11.202 5.097C10.8139 5.70397 10.6059 6.46042 10.4995 7.30874Z" fill="currentColor"/>
        </svg>
    )
}

function InstagramIcon(){
    return (
        <svg width="100px" height="100px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={`${styles['contact-us__icon']} ${styles['animation2']}`} alt="Instagram logo">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.43507 2.50027L7.45159 2.5H14.5161C14.7521 2.5 14.9559 2.66498 15.0051 2.89577C15.0543 3.12656 14.9354 3.36033 14.72 3.45655C14.6593 3.48365 14.597 3.51135 14.5334 3.53968C13.3733 4.05603 11.7454 4.78061 10.388 5.92435C8.97183 7.11762 7.88613 8.73644 7.95139 11.0294C8.01908 13.4079 9.16133 14.8348 10.462 15.4521C11.792 16.0833 13.2848 15.8823 14.1629 15.0058C15.0574 14.1128 15.2953 12.6538 14.8856 11.3893C14.4826 10.1456 13.489 9.18937 12 9.18937C11.7238 9.18937 11.5 8.96552 11.5 8.68937C11.5 8.41323 11.7238 8.18937 12 8.18937C14.011 8.18937 15.3297 9.51584 15.8369 11.0811C16.3373 12.6255 16.0833 14.5017 14.8694 15.7135C13.6389 16.9419 11.672 17.1333 10.0332 16.3555C8.36502 15.5637 7.02927 13.7801 6.95179 11.0578C6.87543 8.37462 8.16877 6.48663 9.74364 5.15963C10.5538 4.47699 11.4479 3.93478 12.2798 3.5H7.46023C6.82379 3.52303 5.83518 3.79943 5.00973 4.56665C4.19599 5.32298 3.49998 6.59431 3.49998 8.68937V16.1393C3.5154 16.8606 3.77508 17.9597 4.49704 18.868C5.20332 19.7566 6.37996 20.5 8.32256 20.5H16.1376C16.8471 20.4301 17.9352 20.0733 18.8434 19.2215C19.7457 18.3754 20.5 17.0138 20.5 14.8692V7.32526C20.485 6.94343 20.3407 6.3534 19.9632 5.86468C19.5992 5.39354 18.999 4.98834 17.9915 4.97132C16.9876 4.95436 16.5628 5.3491 16.3908 5.70128C16.2959 5.89557 16.2616 6.10773 16.2739 6.29826C16.2866 6.4961 16.3462 6.63128 16.3934 6.69146C16.7304 7.12121 17.0296 7.13172 17.1841 7.08555C17.3745 7.02867 17.5 6.85671 17.5 6.67847C17.5 6.40233 17.7238 6.17847 18 6.17847C18.2761 6.17847 18.5 6.40233 18.5 6.67847C18.5 7.32177 18.0618 7.86699 17.4704 8.0437C16.8431 8.23112 16.1422 7.99163 15.6065 7.30854C15.4037 7.04992 15.298 6.70472 15.276 6.36253C15.2535 6.01304 15.3149 5.62554 15.4922 5.26248C15.8646 4.49995 16.6897 3.94918 18.0084 3.97146C19.3236 3.99368 20.2072 4.54488 20.7545 5.25331C21.2856 5.94067 21.4806 6.74844 21.4997 7.29878L21.5 7.31608V14.8692C21.5 17.2761 20.6413 18.9064 19.5275 19.951C18.4289 20.9812 17.1108 21.4155 16.2067 21.4979C16.1916 21.4993 16.1764 21.5 16.1613 21.5H8.32256C6.08451 21.5 4.61599 20.6248 3.7142 19.4903C2.82971 18.3775 2.51796 17.0517 2.50008 16.1544L2.49988 16.1444L2.49998 8.68937C2.49998 6.35065 3.28784 4.80182 4.32893 3.83417C5.35491 2.88058 6.58734 2.52829 7.43507 2.50027Z" fill="currentColor"/>
        </svg>
    )
}

function TwitterIcon(){
    return (
        <svg width="100px" height="100px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={`${styles['contact-us__icon']} ${styles['animation3']}`} alt="Twitter/X logo">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.48366 4.50129C3.69784 4.48594 3.89791 4.60907 3.98071 4.8072C4.65474 6.41989 6.0646 7.59126 7.61457 8.40147C8.91301 9.08019 10.2693 9.48367 11.2698 9.67576C11.3709 8.53046 11.6537 7.63841 12.0833 6.96373C12.5876 6.17191 13.2745 5.71137 14.0244 5.49345C15.4431 5.08119 17.0383 5.54585 18.0854 6.07381C18.6178 6.11624 19.1448 6.09377 19.6049 6.01495C20.1007 5.93003 20.4799 5.78646 20.7092 5.62254C20.8683 5.50879 21.0791 5.49826 21.2488 5.59559C21.4185 5.69291 21.5158 5.88022 21.4979 6.07499C21.3903 7.24666 21.0416 8.08435 20.6012 8.67818C20.2507 9.15078 19.8546 9.45218 19.5085 9.64326C18.5033 15.9374 15.5662 18.9348 12.1821 20.0126C8.81153 21.0861 5.13384 20.2091 2.78583 19.0961C2.53631 18.9779 2.4299 18.6797 2.54818 18.4302C2.66646 18.1806 2.96463 18.0742 3.21416 18.1925C5.4305 19.2431 8.83541 20.029 11.8786 19.0598C14.8622 18.1095 17.6361 15.4257 18.5594 9.23745C18.5847 9.06794 18.695 8.92319 18.8518 8.85391C19.1186 8.73599 19.48 8.51128 19.798 8.08247C20.0115 7.79466 20.2143 7.40291 20.3526 6.86843C20.1662 6.92297 19.9717 6.9667 19.7738 7.00059C19.1928 7.1001 18.542 7.12185 17.8975 7.06122C17.8328 7.05514 17.7699 7.03652 17.7124 7.00639C16.7655 6.51067 15.4027 6.13429 14.3035 6.45372C13.7736 6.6077 13.2934 6.92532 12.9268 7.50089C12.554 8.08633 12.2801 8.96901 12.2349 10.276C12.23 10.4171 12.1657 10.5496 12.0579 10.6407C11.9501 10.7318 11.8088 10.7731 11.6689 10.7543C10.5559 10.6054 8.8132 10.1564 7.15132 9.28769C5.88971 8.62822 4.64127 7.70892 3.76425 6.46499C3.63754 7.59792 3.64963 9.00448 3.97614 10.434C4.44702 12.4957 5.56438 14.5813 7.84332 15.9926C8.07393 16.1354 8.14862 16.436 8.01166 16.6701C7.71809 17.172 6.79262 18.0339 5.19572 18.2628C4.92237 18.302 4.66902 18.1122 4.62984 17.8388C4.59065 17.5655 4.78048 17.3121 5.05383 17.2729C5.91887 17.1489 6.49682 16.8044 6.82781 16.5197C4.59978 14.9509 3.48317 12.7667 3.00125 10.6567C2.48778 8.40861 2.68744 6.22111 3.03529 4.87492C3.08901 4.66702 3.26948 4.51663 3.48366 4.50129Z" fill="currentColor"/>
        </svg>
    )
}

function TiktokIcon(){
    return (
        <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles['contact-us__icon']} ${styles['animation4']}`} alt="Tiktok logo">
            <path d="M20 7.50414C18.5333 7.56942 15.52 6.75998 15.2 3H12.4V13.9666C12.4 17.0999 9.93253 18.4412 8.289 17.2507C6.20169 15.7389 7.60003 12.5958 10.2 12.9874V9.6583C8.20003 9.6583 4 10.4416 4 15.3374C4 21.6041 10.8146 21.4083 12.4 20.5824C14.9798 19.2385 15.6 17.7827 15.6 14.5541C15.6 11.6166 15.6 9.85413 15.6 9.0708C16.2667 9.39719 18.08 10.0891 20 10.2458" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}