import { Tab } from "@headlessui/react";
import Header from "./Header";

interface Props {
  data: string;
}

const InfoLil = ({ data }: Props) => {
  return (
    <div className="mx-auto max-w-2xl px-1.5 md:px-4 pt-6 pb-12 lg:max-w-6xl">
      <Header />
      <div className="flex flex-wrap items-start pt-8 ">
        <h1 className="text-5xl font-bold mb-2 text-[#F8F8F2] w-full">
          Preview Gnars
        </h1>
        <p className="font-bold text-[#92FFFF] text-3xl mb-6 hidden md:block">
          Preview the next Gnar before the auction
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 mb-6">
        <Tab.Group as="div" className="flex flex-col-reverse">
          <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
            <Tab.Panel>
              {data ? (
                <img
                  src={`data:image/svg+xml;base64,${data}`}
                  alt={"nouns"}
                  className="h-full w-full object-cover shadow-xl object-center sm:rounded-lg relative"
                />
              ) : (
                ""
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        {/* lilNoun info */}

        <div className="flex flex-col justify-center mt-3 md:mt-10 md:px-4 sm:mt-16 sm:px-0 lg:mt-0 my-auto h-full md:max-w-md">
          {/* <div className="md:mt-8 w-full">
            {data?.[3] === AuctionState.OVER_NOT_SETTLED && (
              <>
                <p className="text-[#92FFFF] font-bold mb-6 text-2xl hidden md:block">
                  Up next on block {blockNumber}{" "}
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-[#F8F8F2] w-full">
                  Lil Noun{" "}
                  {data?.[1] && `# ${parseInt(data[1]._hex.toString())}`}
                </h1>
                <div className="mt-3 mb-3">
                  <h2 className="sr-only">lilNoun information</h2>
                  <p className="text-5xl text-[#F8F8F2]">Ξ 0.15</p>
                </div>
                {isConnected && (
                  <AuctionBtn data={data} isFetching={isFetching} />
                )}
                <Link
                  href="#wtf"
                  className="text-[#92FFFF] underline font-balsamiq mt-4 inline-block"
                >
                  Learn more about settling and bidding on Lil Nouns
                </Link>
              </>
            )}

            {data === undefined && (
              <>
                <h2 className="text-white text-2xl md:text-3xl mt-1">
                  An auction is currently in progress!
                </h2>
                <p className="text-white text-xl md:text-2xl">
                  Try your hand at bidding on{" "}
                  <a
                    className="text-[#92FFFF] hover:underline"
                    href="https://lilnouns.wtf"
                  >
                    lilnouns.wtf
                  </a>
                </p>
              </>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InfoLil;
