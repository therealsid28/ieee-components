import React from 'react';

const TextPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header Section */}
      <div className="mb-16">
        <h2 className="text-violet-600 font-bold mb-4">Deploy faster</h2>
        <h1 className="text-6xl font-bold text-gray-900 mb-12">A better workflow</h1>
      </div>

      {/* Text Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="text-justify space-y-8">
          <p className="text-gray-700 leading-relaxed">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-justify space-y-8">
          <p className="text-gray-700 leading-relaxed">
            Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
