import React, { useEffect, useState, useRef } from 'react';

const InfiniteCarousel = ({ bucketName, projectRef, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const baseUrl = `https://${projectRef}.supabase.co/storage/v1/object/public/${bucketName}/`;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            2500
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, images.length]);

    return (
        <div className="w-full overflow-hidden py-10 bg-white">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="relative overflow-hidden group">
                    <div 
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
                    >
                        {images.map((img, index) => (
                            <div key={index} className="w-full flex-shrink-0 flex items-center justify-center px-0">
                                <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-2xl border border-orange-50 bg-slate-50 relative group/img">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                                    <img 
                                        src={`${baseUrl}${img.replace(/ /g, '%20')}`} 
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Compact ProgressBar instead of dots */}
                    <div className="max-w-[200px] mx-auto h-1 bg-slate-100 rounded-full mt-8 relative overflow-hidden">
                        <div 
                            className="absolute inset-y-0 left-0 bg-primary transition-all duration-700 ease-in-out"
                            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfiniteCarousel;
