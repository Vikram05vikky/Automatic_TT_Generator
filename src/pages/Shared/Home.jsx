import React from 'react';
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
    description: 'Templates include pre-designed sections for tasks, events, notes, goals, etc. Select templates with sections tailored to specific purposes (e.g., work, study, fitness).'
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
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <Carousel className="max-w-2xl">
            <CarouselContent>
              {carouselContents.map((content, index) => (
                <CarouselItem key={index}>
                  <div className="p-4 h-80">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                        <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
                        <p className="text-center">{content.description}</p>
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
          <img src="src\assets\img\timetable.png" alt="Timetable illustration" className='max-h-full max-w-full object-cover' />
        </div>
      </div>
    </div>
  );
}

export default Home;
