"use client";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export default function Home() {

  const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/11.jpg',
    '/12.jpg',
    '/13.jpg',
    '/14.jpg',
    '/15.jpg',
    '/16.jpg',
    '/17.jpg',
    '/18.jpg',
    '/19.jpg',
    '/20.jpg',
    '/21.jpg',
    '/22.jpg',
    '/23.jpg',
    '/24.jpg',
    '/25.jpg',
    '/26.jpg',
    '/27.jpg',
  ];
  

  
    const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    ) 
  
  return (
<div className="flex flex-col items-center justify-center h-screen">
<meta property="og:image" content="https://i.imgur.com/7K4FAON.jpg"></meta>
  <div className="text-4xl font-bold mb-4">Harrddy.</div>
  <div className="text-sm">Reject humanity, return to Harrddy.</div>
  
  {/* White space between text and carousel */}
  
  <div className="mb-0">
    <Carousel
      plugins={[plugin.current]}
      className="w-s max-w-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <Image width="300" height="500" src={image} alt={`Image ${index + 1}`} className="max-w-full max-h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</div>


  );
}
