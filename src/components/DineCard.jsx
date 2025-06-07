function DineCard({ RestData }) {
  return (
    <div className="max-w-xs border-2 border-gray-200 rounded-2xl transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <a target="_blank" href={RestData.cta.link}>
          <img
            className="w-full h-48 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt={RestData?.info?.name}
          />
        </a>
        <div className="w-full flex justify-between px-3 py-2 absolute bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent">
          <p className="text-white font-bold text-sm truncate max-w-[60%]">
            {RestData?.info?.name}
          </p>
          <p className="text-white font-bold text-sm bg-gray-800 px-2 rounded-full">
            ★ {RestData?.info?.rating?.value}
          </p>
        </div>
      </div>

      <div className="p-3 text-sm space-y-2">
        <div className="flex justify-between gap-2">
          <p className="truncate">{RestData?.info?.cuisines?.join(", ")}</p>
          <span className="whitespace-nowrap">
            {RestData?.info?.costForTwo}
          </span>
        </div>

        <div className="flex justify-between gap-2">
          <p className="truncate">
            {RestData?.info?.locationInfo?.formattedAddress}
          </p>
          <span className="whitespace-nowrap">
            {RestData?.info?.locationInfo?.distanceString}
          </span>
        </div>

        {RestData?.info?.vendorOffer?.offerHighlights[0]?.logoCtx?.text && (
          <div className="px-2 py-1 bg-gray-300 rounded-full w-fit text-xs">
            ☑ {RestData?.info?.vendorOffer?.offerHighlights[0]?.logoCtx?.text}
          </div>
        )}

        {RestData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header && (
          <div className="flex justify-between bg-green-700 p-2 rounded text-white font-bold text-xs">
            <p>
              ₹ {RestData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header}
            </p>
            <span>{RestData?.info?.offerInfoV3?.vendorOffer?.subtext}</span>
          </div>
        )}

        {RestData?.info?.customerOffer?.infos?.[0]?.description && (
          <p className="bg-green-400 p-2 rounded text-white font-bold text-xs">
            {RestData?.info?.customerOffer?.infos[0]?.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default DineCard;
