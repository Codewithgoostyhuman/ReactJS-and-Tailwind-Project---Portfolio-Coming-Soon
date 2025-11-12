import React,{useState,useEffect }from 'react'

const HeadLine = () => {
    const words = ["CODE...", "BUILD...", "DEPLOY..."]
    const [text, setText] = React.useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = 500;
        const deletingSpeed = 500;
        const delay = 500;

        let timer;
        if(!isDeleting && charIndex < words[wordIndex].length){
            timer = setTimeout(() => {
                setText(words[wordIndex].substring(0, charIndex));
                setCharIndex(charIndex + 1);
            },typingSpeed)
        }else if(isDeleting && charIndex > 0){
            timer = setTimeout(() => {
                setText(words[wordIndex].substring(0, charIndex));
                setCharIndex(charIndex - 1);
            },deletingSpeed);
        }else if(charIndex === words[wordIndex].length){
            timer = setTimeout(() => {
                setIsDeleting(true);
            },delay);
        }else if(isDeleting && charIndex === 0){
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
        }
        return () => clearTimeout(timer);
        
    }, [charIndex, isDeleting, wordIndex, words]);
  return (
    <div className='flex lg:w-40 md:w-30 sm:w-20 justify-center align-center items-center font-bold tracking-wider m-auto p-auto'>
      <h1 className=' font-sans text-gray-300 lg:text-lg md:text-md sm:text-sm transition-all duration-100'>
      {text}
      <span>|</span>
    </h1>
    </div>
  )
}

export default HeadLine
