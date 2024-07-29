import SectionTitle from "@/components/ui/SectionTitle";

const Blog = () => {
  return (
    <div>
      <div className="md:mx-12 p-4 mt-16">
        <SectionTitle
          subHeading="Find Your Accessories"
          sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
        />
        <div className="bg-green-300 md:flex items-center rounded-md justify-between mt-10">
          <div className="md:flex justify-center  md:w-1/2 p-8 w-full">
            <div className="w-full">
              <h2 className="flex text-xl font-medium mb-2 text-white items-center gap-3">
                MKS Accessories
              </h2>
              <h2 className="tracking-widest mb-2 leading-snug text-3xl font-bold w-full">
                {" "}
                Shopping in <br />{" "}
                <span className="text-pink-500">Mechanical Keyboard</span> Shop
              </h2>
              <h2 className="font-normal tracking-wide mb-2 text-lg">
                We sell a wide range of Keyboard, Tech Products At mechanical
                keyboard shop , we pride ourselves on offering a diverse
                selection of the latest and greatest in Keyboard devices, and
                cutting-edge tech products. Whether you're looking for the
                newest smartphone, a powerful tablet, or essential accessories
                to enhance your tech experience, we've got you covered.
              </h2>
              <div className="flex mt-4 gap-6 items-center">
                <button className="bg-pink-500 text-white text-lg shadow-xl font-medium px-3 py-2 rounded-lg">
                  View Shop
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full p-8">
            <img
              src="https://i.ibb.co/vdcRLV8/bloody-b500-500x500.jpg"
              className="rounded-xl w-[600px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
