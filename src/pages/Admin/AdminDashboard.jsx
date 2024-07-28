import React from 'react';
import NumberTicker from "@/components/magicui/number-ticker";
import { Plus, BarChart, User, FileText, Book } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AnimatedGridPatternDemo } from '@/components/AnimatedGridPatternDemo';

const AdminDashboard = () => {
  return (
    <>
      {/* <AnimatedGridPatternDemo/> */}
      <div className="p-8 space-y-8 font-mono">
        {/* Statistics Cards */}
        <div className="flex justify-around items-center space-x-8">
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 ">
            <p className="text-5xl font-medium tracking-tighter text-black dark:text-white">
              <span className="flex items-center">
                <NumberTicker value={100} />
                <span className="mx-2 text-5xl font-bold text-blue-500">
                  <Plus className='size-[40px]' />
                </span>
                <span className='text-blue-500'>Staffs</span>
              </span>
            </p>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Total number of available staff.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 ">
            <p className="text-5xl font-medium tracking-tighter text-black dark:text-white">
              <span className="flex items-center">
                <NumberTicker value={50} />
                <span className="mx-2 text-5xl font-bold text-blue-500">
                  <Plus className='size-[40px]' />
                </span>
                <span className='text-blue-500'>Courses</span>
              </span>
            </p>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Total number of available courses.</p>
          </div>
        </div>

          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-500 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-600">
              <Book className="text-blue-500 h-8 w-8" />
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-semibold">New course added:</p>
                <p className="mt-1">Advanced React</p>
              </div>
            </li>
            <li className="flex items-start space-x-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-500 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-600">
              <FileText className="text-green-500 h-8 w-8" />
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-semibold">Staff meeting scheduled:</p>
                <p className="mt-1">Next week</p>
              </div>
            </li>
            <li className="flex items-start space-x-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-500 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-600">
              <User className="text-purple-500 h-8 w-8" />
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-semibold">New user registration:</p>
                <p className="mt-1">Jane Doe</p>
              </div>
            </li>
          </ul>
        </div>
    </>
  );
}

export default AdminDashboard;
