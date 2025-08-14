"use client";
import React from "react";
import PaintingsGallery from "../../components/PaintingsManager";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 mt-32">प्रदर्शनी</h1>
        <div className="">
          {/* <Showcards
            imageUrl="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price="$450,000"
            agent="Liam von Hohenberg..."
            agency="2045 AG Lucien Moreau"
            area="40 m²"
            rooms={4}
            postedBy="pixenbytayyub"
            postedTime="2 days ago"
          /> */}

          <PaintingsGallery isAdmin={false} />
        </div>
      </div>
    </div>
  );
};

export default page;
