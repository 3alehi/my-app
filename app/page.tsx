'use client'
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

export default function Page() {
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then(response => response.json())
  //     .then((data: User[]) => setUsers(data))
  //     .catch(error => console.error('Error fetching users:', error));
  // }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ویدیو به عنوان بک‌گراند */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        src="https://bou.ac.ir/wp-content/uploads/2024/12/video_2024-12-17_23-21-22.mp4" 
        autoPlay 
        loop 
        muted
      />
      
      {/* محتوای صفحه */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-bold backdrop-brightness-50">
        <h1 className="mb-4">لیست کاربران</h1>
        <ul className="bg-black bg-opacity-50 p-4 rounded-lg">
          {/* {users.map((user: User) => (
            <li key={user.id} className="flex items-center gap-4 mb-2">
              <img src={user.image} alt={user.firstName} className="w-10 h-10 rounded-full" />
              <span>{user.firstName} {user.lastName}</span>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}