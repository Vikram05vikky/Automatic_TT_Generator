// import React from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Button } from '@/components/ui/button';

// const carouselContents = [
//   {
//     title: 'Responsive Design',
//     description: 'Templates are designed to be responsive and adaptable to different devices and screen sizes. Ensures optimal viewing and usability across desktop, mobile, and tablet devices.'
//   },
//   {
//     title: 'Pre-designed Sections',
//     description: 'Templates include pre-designed sections for tasks, events, notes, goals, etc. Select templates with sections tailored to specific purposes (e.g., work, study, fitness).'
//   },
//   {
//     title: 'Feedback and Suggestions',
//     description: 'Provide feedback on templates to help improve future designs. Suggest new template ideas or themes for consideration.'
//   }
// ];

// const Home = () => {
//   return (
//     <div className='h-screen w-screen flex flex-row justify-center items-center font-mono'>
//       <div className='flex w-full h-full'>
//         <div className='w-1/2 flex flex-col justify-center items-center'>
//           {/* <Carousel className="max-w-2xl">
//             <CarouselContent>
//               {carouselContents.map((content, index) => (
//                 <CarouselItem key={index}>
//                   <div className="p-4 h-80">
//                     <Card className="h-full">
//                       <CardContent className="flex flex-col items-center justify-center p-6 h-full">
//                         <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
//                         <p className="text-center">{content.description}</p>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel> */}
          

//           <Carousel className="rounded-xl">
//       <div className="">
//         {/* <img
//           src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//         /> */}
//         <div className=" inset-0  place-items-center flex justify-center">
//           <div className="w-3/4 text-center md:w-2/4">
//             <p
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//             >
//               The Beauty of Nature
//             </p>
//             <p
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim
//               upon men&apos;s hearts, as for that subtle something, that quality
//               of air that emanation from old trees, that so wonderfully changes
//               and renews a weary spirit.
//             </p>
           
//           </div>
          
//         </div>
//       </div>
      
//     </Carousel>

//         </div>
//         <div className='w-1/2 flex justify-center items-center'>
//           <img src="src\assets\img\timetable-software.png" alt="Timetable illustration" className='h-[70%] ' />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';

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
          <Carousel className="rounded-xl">
            {carouselContents.map((content, index) => (
              <div key={index} className="inset-0 place-items-center flex justify-center">
                <div className="w-3/4 text-center md:w-2/4">
                  <p className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                    {content.title}
                  </p>
                  <p className="mb-12 opacity-80">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
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
