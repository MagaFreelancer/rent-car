import CarInfoList from "./components/car-info-list";

const carDetails = {
  rentalRules: {
    deposit: {
      text: "10 000 ₽",
      supp: "Депозит замораживается за 3 дня до аренды и возвращается через 7 дней после ее окончания.",
    },
    minimumExperience: {
      text: "3 года",
      supp: null
    },
    minimumAge: {
      text: "21 год",
      supp: null
    },
    insurance: {
      text: "ОСАГО мультидрайв",
      supp: "Полис распространяется на всех водителей автомобиля"
    },
  },
  carSpecifications: {
    engine: {
      text: "бензин, 1.5 литров",
      supp: null
    },
    drive: {
      text: "передний",
      supp: null
    },
    year: {
      text: "2023",
      supp: null
    },
    seats: {
      text: "4",
      supp: null
    },
    transmission: {
      text: "автоматическая",
      supp: null
    },
    mileage: {
      text: "< 50 тыс.км",
      supp: null
    },
    body: {
      text: "универсал",
      supp: null
    },
    class: {
      text: "стандарт",
      supp: null
    },
    steering: {
      text: "руль слева",
      supp: null
    },

  },
};

const CarInfo = () => {
  return (
    <div className='bg-white py-6 px-4 mb-4 rounded-lg'>
      <div className='mb-5'>
        <h3 className='mb-3'>Правила аренды</h3>
        <CarInfoList carDetails={carDetails.rentalRules} />
      </div>
      <div>
        <h3 className='mb-3'>
          Характеристики автомобиля
        </h3>
        <ul>
          <CarInfoList carDetails={carDetails.carSpecifications} />
        </ul>
      </div>
    </div >
  )
}

export default CarInfo