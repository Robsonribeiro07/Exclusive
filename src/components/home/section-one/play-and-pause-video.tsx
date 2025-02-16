import { useEffect, useRef } from "react";

export function usePlayAndPauseVideo() {


    const videosElements = useRef<{[key: string]: HTMLElement | null}>({});

    const setElementref = (key: string) => (node: HTMLElement | null) =>  {
        videosElements.current[key] = node

    }

    useEffect(() => {
       const observer = new IntersectionObserver(
        ([entry]) => {
            const { target, isIntersecting} = entry

            const video = target as HTMLVideoElement

            if(isIntersecting) {
                console.log("play")
                video.play()
            } else {
                console.log("pause")
                video.pause()
            }
        },
        {
            root: null,
            threshold: 0.5
        }
       )

       Object.keys(videosElements.current).forEach((key) => {
        const element = videosElements.current[key]
        
        if(element) observer.observe(element)
       })

       return () => {
        Object.keys(videosElements.current).forEach((key) => {
            const element = videosElements.current[key]
            
            if(element) observer.unobserve(element)
        })
       }
    },[])                           
    return (
        {setElementref}
        
    )
}