const RentalSummary = ({
  carName,
  rentalDate,
  returnDate,
  pricePerDay,
  totalDays,
  CarImage,
}: {
  carName: string;
  rentalDate: string;
  returnDate: string;
  pricePerDay: string;
  totalDays: number;
  CarImage: string;
}) => {
  const totalPrice = totalDays * parseFloat(pricePerDay);

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md mt-8"
      style={{ width: '600px', height: 'auto', maxHeight: '700px' }} // Inline styles for specific width/height
    >
      <h2 className="text-2xl font-bold mb-4">Rental Summary</h2>

      {/* Add Car Image */}
      {CarImage ? (
        <div className="mb-4 flex justify-center">
          <img
            src={CarImage}
            alt={`${carName} image`}
            className="w-full h-auto max-w-md rounded-lg"
          />
        </div>
      ) : (
        <div className="mb-4 flex justify-center">
          <span className="text-gray-500 italic">No image available</span>
        </div>
      )}

      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Car Name:</span>
        <span className="text-gray-900 font-semibold">{carName}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Rental Date:</span>
        <span className="text-gray-900">{rentalDate}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Return Date:</span>
        <span className="text-gray-900">{returnDate}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Price Per Day:</span>
        <span className="text-gray-900">${pricePerDay}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Total Days:</span>
        <span className="text-gray-900">{totalDays} days</span>
      </div>
      <div className="flex justify-between border-t mt-4 pt-4">
        <span className="text-lg font-bold">Total Price:</span>
        <span className="text-lg font-bold text-blue-600">
          ${totalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default RentalSummary;
