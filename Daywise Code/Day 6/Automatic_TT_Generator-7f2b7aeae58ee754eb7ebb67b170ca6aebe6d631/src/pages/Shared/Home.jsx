import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselContents = [
  {
    title: 'Responsive Design',
    description: 'Templates are designed to be responsive and adaptable to different devices and screen sizes. Ensures optimal viewing and usability across desktop, mobile, and tablet devices.'
  },
  {
    title: 'Pre-designed Sections',
    description: 'Templates include pre-designed sections for tasks, events, notes, goals, etc. Select templates with sections tailored to specific purposes.'
  },
  {
    title: 'Feedback and Suggestions',
    description: 'Provide feedback on templates to help improve future designs. Suggest new template ideas or themes for consideration.'
  }
];

const Home = () => {


  return (
    <div className='h-screen w-screen flex flex-row justify-center items-center font-mono'>
      <div className='flex w-full h-full'>
        <div className='w-1/2 flex flex-col justify-center items-center mt-[6vh]'>
          <Carousel autoplay className="w-full h-96 max-w-lg rounded-xl">
            <CarouselContent>
              {carouselContents.map((content, index) => (
                <CarouselItem key={index}>
                  <div className="p-4 inset-0 place-items-center flex justify-center">
                    <Card className="w-full h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="text-center">
                          <p className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                            {content.title}
                          </p>
                          <p className="mb-12 opacity-80">
                            {content.description}
                          </p>
                        </div>
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
        <div className='w-1/2 flex justify-center items-center'>
          <img src="src/assets/img/timetable-software.png" alt="Timetable illustration" className='h-[70%]' />
        </div>
      </div>
    </div>
  );
}

export default Home;
