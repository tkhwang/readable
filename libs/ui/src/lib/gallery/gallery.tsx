import CommentCard from '../comment-card/comment-card';

export interface GalleryProps {}

export function Gallery(props: GalleryProps) {
  return (
    <div className="overflow-hidden text-gray-700 ">
      <div className="container">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/3">
            <div className="w-full">
              <CommentCard></CommentCard>
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/800x600/F3F4F7/8693ac"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/800x600/F3F4F7/8693ac"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              {/* 귀여운 카드 */}
              <div className="bg-gray-100 flex items-center">
                <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                  <img className="rounded-xl" src="https://images.unsplash.com/photo-1547517023-7ca0c162f816" alt="" />
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="mt-5 text-2xl font-semibold">Aloe Cactus</h1>
                      <p className="mt-2">$11.99</p>
                    </div>
                    <div>
                      <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/800x600/F3F4F7/8693ac"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/800x600/F3F4F7/8693ac"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
