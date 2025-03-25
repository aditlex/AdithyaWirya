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
        <h1 className="text-4xl font-bold text-white text-center">School web</h1>
  <p className="mt-4 text-lg text-gray-300 text-center">
  providing essential information about the school, academic programs, events, and achievements.
  </p>
          <div
            alt="Project Name"
            className="bg-fixed bg-[url('/p2U.jpeg')] w-full h-[500px] bg-cover rounded-lg shadow-lg md:bg-center sm:bg-center"
          />
  
          <div className="max-w-3xl py-12 px-6">


          <div className="mt-8 text-left space-y-6">
  <h2 className="text-2xl font-semibold text-white">Website Purpose</h2>
  <ul className="list-disc list-inside text-gray-300">
    <li>✅ Provide comprehensive information about SMKN 1 Denpasar.</li>
    <li>✅ Showcase school achievements, programs, and activities.</li>
    <li>✅ Facilitate communication between students, teachers, and staff.</li>
    <li>✅ Offer easy access to academic resources and announcements.</li>
  </ul>

  <div>
    <h2 className="text-2xl font-semibold text-white">What’s on This Website?</h2>
    <ul className="list-disc list-inside text-gray-300">
      <li><span className="font-semibold">About SMKN 1 Denpasar</span> – An overview of the school, its history, and vision.</li>
      <li><span className="font-semibold">Programs & Majors</span> – A detailed explanation of the available study programs.</li>
      <li><span className="font-semibold">News & Events</span> – Updates on school events, competitions, and announcements.</li>
      <li><span className="font-semibold">Gallery</span> – A collection of photos and videos from school activities.</li>
      <li><span className="font-semibold">Contact</span> – Information on how to reach the school for inquiries and support.</li>
    </ul>
  </div>

  <p className="mt-6 text-gray-300">
    This website is built with <span className="font-semibold text-white">HTML</span> and <span className="font-semibold text-white">CSS</span>, responsive
  </p>

  <div className="mt-4 text-lg">
    <p><span className="font-semibold">Duration:</span> 1 Week</p>
    <p><span className="font-semibold">Created by:</span> Adithya & Respa</p>
    <p>
      <span className="font-semibold">Technologies:</span> HTML, CSS
    </p>
  </div>
</div>

</div>

  
          <div className="mt-4 text-lg">
        
            <div className="flex m-8">
            <img src="/gambar1.png" className="w-24 h-fit mx-auto"></img>
            <img src="/gambar2.png" className="w-24 h-fit item-center m-auto"></img>
            </div>
          </div> 
  
       
          <h2 className="text-2xl font-bold mt-6">Screenshots</h2>
          <div className="gap-4 mt-4 md:w-1/2 mx- w-full">
            <div className="md:flex gap-14  ">
            <img src="/sss1.png" alt="Screenshot 1" className="w-84 h-fit object-cover rounded-lg shadow-md mb-3" />
            <img src="/sss3.png" alt="Screenshot 2" className="w-full h-auto object-cover rounded-lg shadow-md mb-3 " />
            </div>
            <img src="/sss2.png" alt="Screenshot 3" className="w-auto h-fit item-center object-cover rounded-lg shadow-md md:-mt-48 mb-3" />
          </div>
  
          {/* Link ke Website */}
          <Link            
          href="https://web-skensa.vercel.app/"
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