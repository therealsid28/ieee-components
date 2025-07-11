import MainImage from './pictures/main.jpg';

export default function CompanyValues() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 p-8 bg-white">
      <div className="text-gray-700">
        <img src={MainImage}></img>
      </div>
      <div>
        <p className=" text-purple-600 font-medium mb-2 "> Company Values</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {' '}
          On A Mission To Empower Remote Teams
        </h1>
        <p className="text-gray-700 mb-4">
          {' '}
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
          enim. Mattis mauris semper sed amet vitae sed turpis id. ld dolor
          praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim
          sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis
          id.
        </p>
        <p className="text-gray-700 mb-4">
          Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio
          id et. ld blandit molestie auctor fermentum dignissim. Lacus diam
          tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
          adipiscing egestas. laculis convallis ac tempor et ut. Ac lorem vel
          integer orci.
        </p>
        <p className="text-gray-700">
          Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio
          id et. ld blandit molestie auctor fermentum dignissim. Lacus diam
          tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
          adipiscing egestas. laculis convallis ac tempor et ut. Ac lorem vel
          integer orci.
        </p>
      </div>
    </div>
  );
}
