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
        <h1 className="text-4xl font-bold text-white text-center">APk Online Shopping UI</h1>
        <p className="text-gray-300 text-center">A UI prototype for an online shopping app built with FlutterFlow, featuring a modern and user-friendly interface.</p>
          <div
            alt="Project Name"
            className="bg-fixed bg-[url('/p3U.png')] w-full h-[500px] bg-cover rounded-lg shadow-lg md:bg-center sm:bg-center"
          />
  
          <div className="max-w-3xl py-12 px-6">


          <div className="mt-8 text-left space-y-6">
    <h2 className="text-2xl font-semibold text-white">Project: Pasek APK (Pasar Elektronik)</h2>
    <ul className="list-disc list-inside text-gray-300">
      <li>✅ A UI prototype for an online shopping app.</li>
      <li>✅ Designed and built using FlutterFlow.</li>
      <li>✅ Focuses on intuitive navigation and modern UI design.</li>
      <li>✅ Showcases screens like home, product listing, cart, and checkout.</li>
    </ul>

    <div className="">
        <h2 className="text-2xl font-semibold text-white">Features of Pasek APK</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li> <span className="font-semibold">Home Screen</span> – Displays featured products and categories.</li>
          <li> <span className="font-semibold">Product Listing</span> – A well-structured layout showcasing available products.</li>
          <li> <span className="font-semibold">Cart & Checkout</span> – A seamless experience for adding items and proceeding to checkout.</li>
          <li> <span className="font-semibold">User Profile</span> – Allows users to manage their information and order history.</li>
        </ul>
    </div>
    
    <p className="mt-6 text-gray-300">
      This prototype is built using <span className="font-semibold text-white">FlutterFlow</span> to create a visually appealing and interactive UI for an online shopping experience. 🚀
    </p>
</div>

</div>

  
          <div className="mt-4 text-lg">
            <p><span className="font-semibold">Duration:</span> 2 Weeks</p>
            <p><span className="font-semibold">Created by:</span> Adithya(me), Wahyu Wijaya, And Yana </p>
            <p>
              <span className="font-semibold">Technologies:</span> Flutter flow
            </p>
            <div className="flex m-8">
            <img src="/fluter.png" className="w-52 h-fit mx-auto"></img>
         
            </div>
          </div> 
  
       
          <h2 className="text-2xl font-bold mt-6">Screenshots</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <img src="/ssss1.png" alt="Screenshot 1" className="w-full h-auto object-cover rounded-lg shadow-md" />
            <img src="/ssss2.png" alt="Screenshot 2" className="w-full h-auto object-cover rounded-lg shadow-md" />
            <img src="/ssss3.png" alt="Screenshot 3" className="w-full h-fit item-center object-cover rounded-lg shadow-md" />
            <img src="/ssss4.png" alt="Screenshot 4" className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
  
        
        </div>
      </div>
    );
  }