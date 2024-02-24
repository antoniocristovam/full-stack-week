import Image from "next/image";
import Header from "../components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search.ts/search";
import BookingItem from "../components/booking-item";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Antonio Cristovam</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="mt-6 px-5">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>
    </div>
  );
}
