import type { Result } from "ethers/lib/utils";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

import LoadingSpinner from "./LoadingSpinner";

interface Props {
  data: Result | undefined;
  isFetching: boolean;
}

const AuctionBtn = ({ data, isFetching }: Props) => {
  const { isConnected } = useAccount();
  // const { config, error: prepareError } = usePrepareContractWrite({
  //   address: LilNounsOracle.address,
  //   abi: LilNounsOracle.abi,
  //   functionName: "settleAuction",
  //   args: [data?.[0]],
  // });

  // const { write } = useContractWrite(config);

  // const handleButtonClicked = () => {
  //   write?.();
  // };

  // if (isConnected) {
  //   return (
  //     <button
  //       type="button"
  //       disabled={isFetching || !isConnected}
  //       onClick={() => handleButtonClicked()}
  //       className="cursor-pointer rounded-lg border text-center border-transparent bg-[#92FFFF] px-1 py-4 w-full md:max-w-sm text-black shadow-sm hover:bg-[#83e6e6]"
  //     >
  //       {isFetching ? (
  //         <span className="w-full text-3xl text-slate-500">
  //           Fetching Block...
  //         </span>
  //       ) : data?.[1].mod(10).isZero() ? (
  //         <span className="w-full text-3xl">I&apos;m feeling lucky</span>
  //       ) : (
  //         <span className="w-full text-3xl">Settle auction</span>
  //       )}
  //     </button>
  //   );
  // }

  // if (!isConnected) {
  //   return (
  //     <button
  //       type="button"
  //       disabled
  //       className="hidden md:inline-flex items-center cursor-not-allowed rounded-lg border text-center border-transparent bg-[#FF80BF] px-5 py-4 w-auto md:w-full text-xl font-medium text-black shadow-sm"
  //     >
  //       <section className="text-center w-full flex items-center justify-center">
  //         <span>Connect Wallet</span>
  //       </section>
  //     </button>
  //   );
  // }

  return (
    <button
      type="button"
      disabled
      className="hidden md:inline-flex items-center cursor-pointer rounded-lg border text-center border-transparent bg-[#92FFFF] px-5 py-4 w-auto md:w-80 text-xl font-medium text-black shadow-sm hover:bg-[#83e6e6]"
    >
      {"lol"}
    </button>
  );
};

export default AuctionBtn;
