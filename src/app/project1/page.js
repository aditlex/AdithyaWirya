import Link from "next/link";
export default function Project2() {
    return (
      <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
        <div className="max-w-full mx-auto">
          
        <Link
          href="/#projects"
          className="block  w-full pt-6 mb-6 text-blue-400 hover:text-blue-900 text-lg"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-4xl font-bold text-white text-center">Welcome to My Portfolio</h1>
  <p className="mt-4 text-lg text-gray-300 text-center">
    A place where I showcase my skills, experience, and projects as a web developer.
  </p>
          <div
            alt="Project Name"
            className="bg-fixed bg-[url('/p1U.jpeg')] w-full h-[500px] bg-cover rounded-lg shadow-lg md:bg-top sm:bg-center"
          />
  
          <div className="max-w-3xl py-12 px-6">


  <div className="mt-8 text-left space-y-6">
    <h2 className="text-2xl font-semibold text-white">Website Purpose</h2>
    <ul className="list-disc list-inside text-gray-300">
      <li>✅ Showcase my skills and completed projects.</li>
      <li>✅ Provide insight into my experience in web development.</li>
      <li>✅ Learn more about me.</li>
      <li>✅ Offer an easy way for visitors to contact me directly.</li>
    </ul>
<div className="">
    <h2 className="text-2xl font-semibold text-white">What’s on This Website?</h2>
    <ul className="list-disc list-inside text-gray-300">
      <li> <span className="font-semibold">About Me</span> – A brief introduction about who I am, my background, and my expertise.</li>
      <li> <span className="font-semibold">Projects</span> – A collection of my completed projects, including, technologies used, and demo/source code links.</li>
      <li> <span className="font-semibold">Skills</span> – A list of my technical skills such as Next.js, Tailwind CSS, and more.</li>
      <li> <span className="font-semibold">Blog </span> – A section where I share insights, tutorials, and experiences in the tech industry.</li>
      <li> <span className="font-semibold">Contact</span> – Various ways to reach me, including email, social media, or a contact form.</li>
    </ul>
    </div>
    <p className="mt-6 text-gray-300">
      This website is built with <span className="font-semibold text-white">Next.js</span> and <span className="font-semibold text-white">Tailwind CSS</span> to ensure a modern, responsive, and fast experience! 🚀
    </p>
  </div>
</div>

  
          <div className="mt-4 text-lg">
            <p><span className="font-semibold">Duration:</span> 2 Weeks</p>
            <p><span className="font-semibold">Created by:</span> Adithya(me) </p>
            <p>
              <span className="font-semibold">Technologies:</span> Next.js, Tailwind CSS
            </p>
            <div className="flex m-8">
            <img src="/gambar5.png" className="w-24 h-fit mx-auto"></img>
            <img src="/gambar6.png" className="w-24 h-fit item-center m-auto"></img>
            </div>
          </div> 
  
       
          <h2 className="text-2xl font-bold mt-6">Screenshots</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <img src="/ss1.png" alt="Screenshot 1" className="w-full h-auto object-cover rounded-lg shadow-md" />
            <img src="/ss2.png" alt="Screenshot 2" className="w-full h-auto object-cover rounded-lg shadow-md" />
            <img src="/ss3.png" alt="Screenshot 3" className="w-full h-fit item-center object-cover rounded-lg shadow-md" />
            <img src="/ss4.png" alt="Screenshot 4" className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
  
          {/* Link ke Website */}
          <Link            
          href="https://adithya-wirya.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-400 mt-6 text-xl font-semibold hover:underline"
          >
            Visit Website →
          </Link>
        </div>
      </div>
    );
  }
