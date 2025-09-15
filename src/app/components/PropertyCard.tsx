import Image from "next/image";
import { Suspense } from "react";
import Spinner from "./Spinner";

interface PropertyCardProps {
  title: string;
  status?: string;
  imageUrl: string;
}

function PropertyCard({ title, status, imageUrl }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div className="relative h-70">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <Spinner size="lg" />
            </div>
          }
        >
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </Suspense>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 44.41%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        />

        {/* Status Badge */}
        {status && (
          <div className="absolute bottom-20 left-5">
            <div className="flex items-center justify-center w-[140px] h-[42px] px-2 py-1 rounded text-xs font-bold bg-white text-black">
              {status}
            </div>
          </div>
        )}

        {/* Title */}
        <h3
          className="absolute bottom-10 left-5 font-bold text-white"
          style={{ fontSize: "16px" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

export default PropertyCard;
