import React, {useState} from 'react';
const ScrollTopArrow = () =>{
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop)
    return (
        <div className="scrollTop back-to-top mdi mdi-keyboard-caps" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}} />
    );
}
export default ScrollTopArrow