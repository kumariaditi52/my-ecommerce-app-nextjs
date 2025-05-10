import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export const metadata = {
  title: "About Us - NextShop",
  description: "Learn more about NextShop, our mission, values, and team",
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About NextShop</h1>
        
        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000" 
              alt="NextShop Team" 
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Founded in 2020, NextShop began with a simple mission: to create an online shopping experience that combines quality products, competitive prices, and exceptional customer service.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            What started as a small operation has grown into a trusted e-commerce destination serving thousands of customers worldwide. Our journey has been driven by our passion for connecting people with products they love and creating shopping experiences that exceed expectations.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Today, we continue to expand our product offerings while maintaining our commitment to quality and customer satisfaction. We believe in building lasting relationships with our customers and suppliers, creating a community around our brand that shares our values and vision.
          </p>
        </section>
        
        {/* Our Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">We carefully select each product in our catalog to ensure it meets our high standards for quality and durability.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600 dark:text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust</h3>
              <p className="text-gray-600 dark:text-gray-300">We build trust through transparent business practices, secure transactions, and honest communication with our customers.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600 dark:text-purple-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
              <p className="text-gray-600 dark:text-gray-300">We're committed to providing exceptional customer service and support at every step of the shopping journey.</p>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                  alt="John Smith" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">John Smith</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">With over 15 years of experience in retail and e-commerce, John leads our company with passion and vision.</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000" 
                  alt="Sarah Johnson" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Sarah Johnson</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Head of Product</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Sarah curates our product selection, ensuring we offer only the highest quality items to our customers.</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000" 
                  alt="Michael Chen" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Michael Chen</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Customer Experience</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Michael ensures that every customer interaction with NextShop exceeds expectations.</p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or want to explore partnership opportunities, our team is here to help.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">support@nextshop.com</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 3a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0 3a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">123 Main Street, City, Country</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
