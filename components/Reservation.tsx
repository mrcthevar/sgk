import React from 'react';
import { Phone, MapPin, Clock, Truck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-transparent">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 shadow-2xl rounded-xl border border-gray-100">
          
          <div className="text-center mb-12">
            <h3 className="text-primary uppercase tracking-widest font-bold text-sm mb-2">Contact Us</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Order & Visit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Craving delicious vegetarian food? Call us for free home delivery or visit our restaurant for a delightful dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             
             {/* Left Column: Delivery */}
             <div className="bg-cream-texture p-8 rounded-lg border border-gray-200 text-center">
                <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-6 text-secondary">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Home Delivery</h3>
                <p className="text-sm text-gray-500 mb-6">Min. Order ₹500 • Within 3 KM Radius</p>
                
                <div className="space-y-4">
                  <a href="tel:9152763455" className="block w-full py-4 bg-primary text-white font-bold text-xl rounded-lg shadow-md hover:bg-red-700 transition-colors flex justify-center items-center gap-2">
                    <Phone className="w-5 h-5" /> 9152763455
                  </a>
                  <a href="tel:9152153455" className="block w-full py-4 bg-white border-2 border-primary text-primary font-bold text-xl rounded-lg hover:bg-red-50 transition-colors flex justify-center items-center gap-2">
                    <Phone className="w-5 h-5" /> 9152153455
                  </a>
                </div>
             </div>

             {/* Right Column: Location & Hours */}
             <div className="space-y-8">
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-gray-50 rounded-full text-primary shrink-0 border border-gray-100 shadow-sm">
                      <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Location</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Shop No.2/9, Opp. Jainam Hall,<br/>
                        LBS Road, Bhandup (W),<br/>
                        Mumbai - 400078
                      </p>
                      <a href="https://share.google/LBUG3VdR1LGb4yHKk" target="_blank" rel="noreferrer" className="text-secondary font-bold text-sm mt-2 inline-block hover:underline">
                        View on Google Maps
                      </a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-gray-50 rounded-full text-primary shrink-0 border border-gray-100 shadow-sm">
                      <Clock className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Opening Hours</h4>
                      <div className="space-y-1 text-gray-600">
                        <p className="flex justify-between gap-8"><span>Everyday</span> <span>08:00 AM - 11:30 PM</span></p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 italic">*Pav Bhaji timing: 11:00 AM to 11:30 PM</p>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;