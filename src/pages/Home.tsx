import icon from "../assets/Kaspa-Icon-Dark-Green-glow.webp";
import topper from "../assets/logo-topper-main.webp";
import ConnectCard from "../components/ConnectCard";
import Button from "../components/ui/button";
import wallet from "../assets/kaspa-fwallet-icons.webp";
import LatestWallet from "../components/LatestWallet";
import appstore from "../assets/App-Store.webp";
import googlePlay from "../assets/Google-Play.webp";
import chainge from "../assets/cha.svg";
import zelcore from "../assets/zelcore.webp";
import tangem from "../assets/tangem.webp";
import onekey from "../assets/onekey.webp";
import okx from "../assets/okx.webp";
import safepal from "../assets/safepal-white-web.webp";
import fast from "../assets/kaspa-feature-fast-1.webp";
import instant from "../assets/kaspa-feature-instant-1.webp";
import scalability from "../assets/kaspa-feature-scalable.webp";
import effecient from "../assets/kaspa-feature-lightneing.webp";
import security from "../assets/kaspa-feature-secure.webp";
import block from "../assets/blockdag-icon-1.webp";
import KeyFeatures from "../components/KeyFeatures";
import { coins } from "../utils/coins";
import CoinCard from "../components/CoinCard";
import stealth from "../assets/stealthx-logo-white.webp";
import change from "../assets/changenow-logo-white.webp";
import simple from "../assets/simpleswap-logo-web.webp";
import rocket from "../assets/RX-Coloured-Logo-white-web.webp";
import godex from "../assets/godex.webp";
import cha from "../assets/chainge-logo-web.webp";
import NewsCard from "../components/NewsCard";
import { newsData } from "../utils/news";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onNext = () => {
    navigate("/issues");
  };
  return (
    <div className="mt-20 w-full flex flex-col items-center justify-center">
      <div className="bg-hero bg-black w-full bg-no-repeat bg-cover">
        <div className="container mx-auto flex flex-col gap-8 items-center justify-center md:py-20  py-20 px-8 text-white md:h-[calc(100vh-10vh)]">
          <img src={icon} alt="KASPA" className="w-44" />
          <h1 className="font-rubik text-[70px] font-bold">Kaspa</h1>
          <h3 className="font-black text-xl font-lato uppercase tracking-[3px]">
            beyond the block
          </h3>
          <h3 className="font-lato text-center text-lg md:w-[45%] md:leading-9 leading-10 ">
            Kaspa is the fastest, open-source, decentralized & fully scalable
            Layer-1 in the world. The world’s first blockDAG – a digital ledger
            enabling parallel blocks and instant transaction confirmation –
            built on a robust proof-of-work engine with rapid single-second
            block intervals. <br />
            <span className="font-bold">
              Built by industry pioneers, led by the people.
            </span>
          </h3>
          <div className="flex items-center flex-col md:flex-row gap-10 md:gap-20 mt-8 md:mt-0">
            <ConnectCard to="https://discord.com" text="discord" />
            <ConnectCard to="https://telegram.com" text="telegram" />
            <ConnectCard to="https://reddit.com" text="reddit" />
            <ConnectCard to="https://github.com" text="github" />
            <ConnectCard to="https://explorer.com" text="explorer" />
          </div>
          <button
            className="relative text-[#091744] bg-white rounded-full px-10 py-4 w-fit font-rubik text-sm font-medium flex items-center gap-2  mt-10"
            style={{ boxShadow: "0px 12px 28px -6px rgba(20, 241, 217, 0.24)" }}
            onClick={onNext}
          >
            RESOLVE
            <span className="">→</span>
          </button>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto flex flex-col gap-2 py-10 px-10 md:w-[80%]">
          <img src={topper} alt="topper" className="w-44" />
          <div className="flex flex-col md:flex-row md:gap-20">
            <div className="flex items-center justify-center px-8 pt-8 rounded-3xl shadow-xl h-[380px] w-full">
              <iframe
                src="https://kaspa-topper.vercel.app/"
                className="h-full w-full"
              ></iframe>
            </div>
            <div className="flex flex-col gap-5 mt-16 md:mt-0">
              <h1 className="font-rubik text-[60px] leading-[60px] font-bold text-[#333]">
                Buy Kaspa quickly & easily
              </h1>
              <h3 className="font-rubik text-[#666] text-lg">
                By integrating Topper, Uphold’s fiat-to-crypto onramp on the
                Kaspa.org site, the Kaspa community is now able to buy $KAS, the
                native currency of the network, on the site! <br />
                <br />
                <span className="">
                  Want to explore a Web3 onramp solution?
                </span>
                <br />
                <br />
                <span>
                  Check out{" "}
                  <span className="text-pry cursor-pointer">Topper</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EFEFEF] uppercase text-pry font-sans text-2xl w-full">
        <div className="container mx-auto text-center py-5 font-semibold">
          see other kaspa swaps
        </div>
      </div>
      <div className="bg-[#1f3065] w-full">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-6 md:w-[80%] xl:w-[70%] w-full p-8 py-16">
          <div className="flex flex-col gap-8 px-5">
            <h1 className="font-rubik text-2xl md:text-[40px] font-semibold uppercase text-white">
              kaspa at a glance
            </h1>
            <h4 className="text-purple font-light leading-8">
              Kaspa is a community project – completely open source with no
              central governance – following in the ethos of coins like Bitcoin.
              The coin was fair-launched without pre-mining or any other
              pre-allocation of coins. <br /> Read all the in-depth details on
              the
              <span className="text-pry"> Kaspa Features</span> page.
            </h4>
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    fair launch date
                  </h3>
                  <h3 className="font-lato font-light text-white">
                    November 7, 2021 (no premine, no allocated coins)
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    hashing algorithm
                  </h3>
                  <h3 className="font-lato font-light text-pry text-lg">
                    kHeavyHash
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    consensus
                  </h3>
                  <h3 className="font-lato font-light text-white">
                    Proof of Work, <br />
                    <span className="text-pry">BlockDAG</span>
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    supported platforms
                  </h3>
                  <h3 className="font-lato font-light text-white">
                    OS – Windows, <br /> OSX, <br /> Linux, Raspberry Pi
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    ticker
                  </h3>
                  <h3 className="font-lato font-light text-white text-lg">
                    KAS
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    block time
                  </h3>
                  <h3 className="font-lato font-light text-white">1 second</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-6">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    circulating suooly
                  </h3>
                  <h3 className="font-lato font-light text-white">
                    24.76B KAS
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    max supply
                  </h3>
                  <h3 className="font-lato font-light text-pry text-lg">
                    ~28.7B
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-pry uppercase font-rubik text-xs">
                    market cap
                  </h3>
                  <h3 className="font-lato font-light text-white">$4.1B</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full h-[400px]">
              <h2 className="font-rubik text-white uppercase text-2xl font-semibold text-center mb-8">
                blockdag visualizer
              </h2>
              <iframe
                src="https://kgi.kaspad.net/"
                className="w-full h-full"
              ></iframe>
              <h4 className="text-pry text-center">Visualizer Website</h4>
            </div>
          </div>
        </div>
        <div className="bg-divider h-56 w-full -mt-36"></div>
        <div className="bg-[#000d59] w-full">
          <div className="container mx-auto flex flex-col gap-8 p-8 md:w-[80%] xl:w-[70%] w-full">
            <h1 className="font-rubik text-2xl md:text-[40px] font-semibold uppercase text-white">
              technically speaking
            </h1>
            <div className="grid md:grid-cols-2 gap-10">
              <h4 className="text-purple font-light leading-8">
                Kaspa is a proof-of-work cryptocurrency which implements the
                <span className="text-pry"> GHOSTDAG protocol</span>. Unlike
                traditional blockchains, GHOSTDAG does not orphan blocks created
                in parallel, but rather allows them to coexist and orders them
                in consensus. Whereby Kaspa is actually a blockDAG; you can see
                GHOSTDAG in action in a real time
                <span className="text-pry"> blockDAG visualizer</span> . <br />
                <br /> This generalization of Nakamoto consensus allows for
                secure operation while maintaining very high block rates
                (currently one block per second, aiming for 32/sec, with visions
                of 100/sec) and minuscule confirmation times dominated by
                internet latency (cf. chapter 6 of{" "}
                <span className="text-pry">the research paper</span> for some
                initial benchmarks).
              </h4>
              <div className="flex flex-col items-center md:items-start gap-8">
                <h4 className="text-purple font-light leading-8">
                  The Kaspa implementation includes a lot of cool features and
                  subprotocols including Reachability to query the DAG’s
                  topology, <span className="text-pry">Block data pruning</span>{" "}
                  (with{" "}
                  <span className="text-pry">
                    near-future plans for block header pruning
                  </span>{" "}
                  ), SPV proofs, and later subnetwork support which will make
                  future implementation of layer 2 solutions much easier.
                </h4>
                <Button
                  backgroundColor="#14F1D9"
                  borderColor="#14F1D9"
                  color="black"
                  label="GHOSTDAG WHITEPAPER"
                  loading={false}
                  onClick={() => {}}
                />
                <Button
                  backgroundColor="#14F1D9"
                  color="black"
                  borderColor="#14F1D9"
                  label="DARKNIGHT WHITEPAPER"
                  loading={false}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blackDivider bg-[#000d59] h-56 w-full"></div>
        <div className="bg-[#000000] w-full">
          <div className="container mx-auto flex flex-col gap-8 p-6 md:w-[80%] xl:w-[70%] w-full">
            <h1 className="font-rubik text-2xl md:text-[40px] font-semibold uppercase text-white">
              get the latest wallets
            </h1>
            <h3 className="font-lato text-white">
              Choose from these convenient wallet options to hold your KAS coins
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <LatestWallet
                heading="web/mobile wallet"
                icon={wallet}
                body={
                  <div>
                    Kaspa Web Wallet based on{" "}
                    <span className="text-pry">PWA technology</span> is the most
                    user-friendly and secure wallet available on the market
                    today.
                  </div>
                }
              />
              <LatestWallet
                heading="desktop wallet - kdx"
                icon={wallet}
                body={
                  <div>
                    KDX process manager provides zero-effort installation and
                    configuration of the Kaspa full-node software and the Kaspa
                    Wallet when running in a desktop operating system
                    environment.
                  </div>
                }
              />
              <LatestWallet
                heading="command line wallet"
                icon={wallet}
                body={
                  <div>
                    The command line wallet is part of the core kaspa node
                    software bundle and is maintained by the core team.
                  </div>
                }
              />
              <LatestWallet
                heading="ledger with kasvault"
                icon={wallet}
                body={
                  <div>
                    KasVault is a simple frontend interface for sending and
                    receiving Kaspa with your hardware wallet. Currently only
                    supports Ledger. Check out the usage guide{" "}
                    <span className="text-pry">here</span>.
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] w-full">
        <div className="container mx-auto  gap-6 md:w-[80%] xl:w-[70%] w-full p-8 py-16">
          <div className="flex flex-col items-center gap-8 px-5">
            <h1 className="font-rubik  text-2xl md:text-[40px] font-semibold uppercase text-white">
              ksapium mobile wallets
            </h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 flex items-center justify-center border-grey text-white text-center rounded-3xl text-3xl p-4">
                Download APK Android
              </div>
              <img src={appstore} alt="app store" />
              <img src={googlePlay} alt="google play" />
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-32">
            <h1 className="font-rubik  text-2xl md:text-[40px] font-semibold uppercase text-white">
              3RD PARTY WALLETS
            </h1>
            <h3 className="font-lato text-white">
              The Kaspa Project does not maintain or offer any technical support
              for these apps. Please contact their support teams if you are
              experiencing any issues.
            </h3>
            <div className="grid md:grid-cols-3 gap-8 justify-items-center items-center ">
              <a target="_blank" href="https://chainge.finance">
                <img src={chainge} alt="chainge" className="w-[200px]" />
              </a>
              <a target="_blank" href="https://zelcore.io">
                <img src={zelcore} alt="zelcore" className="w-[200px]" />
              </a>
              <a target="_blank" href="https://tangem.com/en">
                <img src={tangem} alt="tangem" className="w-[200px]" />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8 justify-items-center items-center mt-10">
              <a target="_blank" href="https://onekey.so">
                <img src={onekey} alt="onekey" className="w-[200px]" />
              </a>
              <a target="_blank" href="https://okx.com/web3">
                <img src={okx} alt="okx" className="w-[200px]" />
              </a>
              <a target="_blank" href="https://safepal.com/en">
                <img src={safepal} alt="tangem" className="w-[200px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] w-full">
        <div className="container mx-auto  gap-6 md:w-[80%] xl:w-[70%] w-full p-8 py-16">
          <div className="flex flex-col items-center gap-8 px-5">
            <h1 className="font-rubik  text-2xl md:text-[40px] font-semibold uppercase text-white">
              kaspa key features
            </h1>
            <div className="grid md:grid-cols-3 gap-8">
              <KeyFeatures
                heading="Fastest Transactions"
                body="Kaspa’s blockDAG network generates multiple blocks every second for posting transactions to the ledger. Combined with fully confirmed transactions in 10 seconds, this makes Kaspa ideal for everyday transactions."
                icon={fast}
              />
              <KeyFeatures
                heading="Instant Confirmation"
                body="Kaspa was designed to be hundreds of times faster than Bitcoin, with each Kaspa transaction visible to the network in one second, and each transaction fully confirmed in 10 seconds on average."
                icon={instant}
              />
              <KeyFeatures
                heading="Scalability"
                body="Kaspa solves the scalability problem with its ability to generate and confirm multiple blocks per second. This comes with no trade-off to security and decentralization as seen with Proof-of-Stake networks."
                icon={scalability}
              />
              <KeyFeatures
                heading="Effecient Proof-of-Work"
                body="Kaspa utilizes the optical-mining ready kHeavyHash algorithm for consensus and security of the network. This algorithm, combined with high-throughput DAG and no-wasted-blocks, makes it less energy intensive than other PoW networks."
                icon={effecient}
              />
              <KeyFeatures
                heading="Security"
                body="Kaspa harnesses an ultra secure block network with no compromise to decentralization.  Achieved with pure, stake-less, proof-of-work combined with a revolutionary GhostDAG Consensus mechanism."
                icon={security}
              />
              <KeyFeatures
                heading="BlockDAG"
                body="Overcoming the problem of blockchains, Kaspa processes all blocks in parallel linking all side-chains. This leads to a DAG structure that increases the formation of blocks per second drastically, creating a blockDAG."
                icon={block}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#231f20] w-full">
        <div className="container mx-auto  gap-6 md:w-[80%] xl:w-[70%] w-full p-8 py-16  items-start">
          <div className="grid md:grid-cols-4 gap-12 gap-y-20">
            {coins.map((item, index) => (
              <CoinCard
                key={index + 1}
                icon={item.icon}
                body={
                  <div className="flex flex-col">
                    {item.body.map((it, index) => (
                      <h2 key={index + 1000}>{it}</h2>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
          <div className="flex flex-col gap-8 mt-10">
            <div className="border-2 border-pry w-[100px]"></div>
            <h1 className="font-rubik  text-2xl md:text-[40px] font-semibold uppercase text-white">
              kaspa swaps
            </h1>
            <h3 className="font-lato text-white">
              DISCLAIMER: Please be advised that the third-party services listed
              do not constitute an endorsement by KASPA and is provided for
              information purposes only. Please do your own research and
              exercise caution when using any third-party services as it is
              outside of our control.
            </h3>
            <div className="grid md:grid-cols-4 gap-12 justify-items-center items-center">
              <a href="">
                <img src={stealth} alt="stealth" className="w-[200px]" />
              </a>
              <a href="">
                <img src={change} alt="change" className="w-[200px]" />
              </a>{" "}
              <a href="">
                <img src={simple} alt="stealth" className="w-[200px]" />
              </a>
              <a href="">
                <img src={rocket} alt="rocket" className="w-[200px]" />
              </a>
              <a href="">
                <img src={godex} alt="godex" className="w-[200px]" />
              </a>
              <a href="">
                <img src={cha} alt="change" className="w-[200px]" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="container mx-auto  gap-6 md:w-[80%] xl:w-[70%] w-full p-8 py-16 flex flex-col items-center">
          <h1 className="font-rubik  text-2xl md:text-[40px] font-semibold uppercase text-black">
            kaspa news
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {newsData.map((item, index) => (
              <NewsCard
                key={index}
                date={item.date}
                text={item.body}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
